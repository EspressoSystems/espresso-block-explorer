import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { EnvironmentContext } from '@/components/config/environment';
import { Now } from '@/contexts/now_provider';
import { HotShotQueryService } from '@/service/hotshot_query_service/hot_shot_query_service_api';
import { ActiveValidators } from '@/service/hotshot_query_service/node/active_validators';
import { ValidatorEntry } from '@/service/hotshot_query_service/node/validator_entry';
import { default as React } from 'react';
import { ActiveValidatorsContext } from '../contexts/active_validators_context';
import { ConsensusMapContext } from '../contexts/consensus_map_context';
import { CurrentDelegationsContext } from '../contexts/current_delegations_context';
import { EspressoCurrentEpochContext } from '../contexts/espresso_current_epoch_context';
import { PendingUndelegationsContext } from '../contexts/pending_undelegations_context';
import { RankMapContext } from '../contexts/rank_map_context';
import { TotalStakeContext } from '../contexts/total_stake_context';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import {
  SampleValidatorHistoryContext,
  ValidatorHistoryURLContext,
} from '../contexts/validator_details_context';
import {
  commissionRaisedSince,
  DelegatorAPR,
  delegatorAPRToShow,
} from './participation';
import { sampleValidatorHistory, ValidatorHistory } from './sample_history';
import {
  activityFromFile,
  commissionChangesFromFile,
  delegationBaselinesFromFile,
  delegatorAPRFromFile,
  earningsFromFile,
  epochsFromFile,
  msPerEpochFromFile,
  fetchValidatorHistoryFile,
  historyNetwork,
  lastEpochVoteFromFile,
  networkMissedRatesFromFile,
  nodeVersionFromFile,
  nodeVersionStatusFromFile,
  registeredAtFromFile,
  stakePointsFromFile,
  txExplorerURLFor,
  ValidatorHistoryFile,
  ValidatorHistoryFileMissing,
  VALIDATOR_HISTORY_REFRESH_MS,
  validatorHistoryFileURL,
} from './validator_history_file';

const ESP_DECIMALS = 1e18;

/**
 * espToNumber converts an on-chain ESP amount into a floating point number of
 * whole ESP. It is only intended for charting, never for display of balances.
 */
export function espToNumber(value: bigint): number {
  return Number(value) / ESP_DECIMALS;
}

/**
 * ValidatorFacts are the values about a validator that the Delegation UI
 * already has from the staking API. Everything here is real data.
 */
export interface ValidatorFacts {
  address: `0x${string}`;
  name: null | string;
  description: null | string;
  website: null | URL;
  stake: bigint;
  stakeShare: null | number;
  commission: number;
  estimatedAPRAfterCommission: null | number;
  rank: null | number;
  isActive: boolean;
  myDelegation: null | bigint;
  myPendingUndelegation: null | bigint;
  /**
   * myUndelegationAvailable is when the pending undelegation can be
   * withdrawn, if there is one.
   */
  myUndelegationAvailable: null | Date;
}

/**
 * safeWebsite only allows http(s) links to avoid script injection through
 * validator supplied metadata.
 */
function safeWebsite(url: null | undefined | URL): null | URL {
  if (!url) {
    return null;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return null;
  }

  return url;
}

/**
 * nonEmpty treats blank validator supplied metadata the same as missing.
 */
function nonEmpty(value: null | undefined | string): null | string {
  const trimmed = value?.trim() ?? '';
  return trimmed === '' ? null : trimmed;
}

/**
 * useValidatorFacts derives the ValidatorFacts for the validator in the
 * current ValidatorNodeContext.
 */
export function useValidatorFacts(): ValidatorFacts {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);
  const rankMap = React.useContext(RankMapContext);
  const totalStake = React.useContext(TotalStakeContext);
  const activeValidators = React.useContext(ActiveValidatorsContext);
  const delegations = React.useContext(CurrentDelegationsContext);
  const undelegations = React.useContext(PendingUndelegationsContext);

  const address = validator.addressText;
  const content = validator.metadata?.content ?? null;
  const consensus = consensusMap.get(address) ?? null;
  const commission = validator.commission.valueOf();
  const networkAPR = activeValidators?.apr.ratio ?? null;

  return {
    address,
    name: nonEmpty(content?.name),
    description: nonEmpty(content?.description),
    website: safeWebsite(content?.companyWebsite),
    stake: validator.stake,
    stakeShare:
      totalStake > 0n
        ? Number((validator.stake * 1_000_000n) / totalStake) / 1_000_000
        : null,
    commission,
    estimatedAPRAfterCommission:
      networkAPR === null ? null : networkAPR * (1 - commission),
    rank: rankMap.get(address) ?? null,
    isActive: consensus !== null,
    myDelegation: delegations.get(address)?.amount ?? null,
    myPendingUndelegation: undelegations.get(address)?.amount ?? null,
    myUndelegationAvailable: undelegations.get(address)?.availableTime ?? null,
  };
}

/**
 * ValidatorHistoryContext provides the historical series for the validator
 * in the current ValidatorNodeContext.
 */
export const ValidatorHistoryContext =
  React.createContext<null | ValidatorHistory>(null);

type EpochValidatorsCache = Map<number, Promise<ActiveValidators>>;
const epochValidatorsCaches = new WeakMap<object, EpochValidatorsCache>();

/**
 * fetchEpochValidators fetches the validators, with their delegators, for
 * an epoch from the query service. Each epoch is fetched at most once per
 * service, so opening several validators reuses the same response.
 */
function fetchEpochValidators(
  service: HotShotQueryService,
  epoch: number,
): Promise<ActiveValidators> {
  let cache = epochValidatorsCaches.get(service);
  if (!cache) {
    cache = new Map();
    epochValidatorsCaches.set(service, cache);
  }

  const cached = cache.get(epoch);
  if (cached) {
    return cached;
  }

  const request = service.node.getValidatorsAtEpoch(epoch);
  cache.set(epoch, request);
  // Let a failed request be retried the next time it is needed.
  request.catch(() => cache.delete(epoch));
  return request;
}

/**
 * EpochDelegators is what the query service's stake table says about a
 * validator's delegators. The stake table only lists the active set, so a
 * validator outside of it ('inactive') has delegators that aren't listed,
 * and a failed request ('error') says nothing about them either. Neither
 * may be shown as "no delegators".
 */
type EpochDelegators =
  | { state: 'loading' }
  | { state: 'error' }
  | { state: 'inactive'; epoch: number }
  | { state: 'live'; entry: ValidatorEntry; epoch: number };

// Shared so the state keeps its identity between renders.
const DELEGATORS_LOADING: EpochDelegators = { state: 'loading' };
const DELEGATORS_ERROR: EpochDelegators = { state: 'error' };

/**
 * EPOCH_VALIDATORS_RETRY_MS is how long to wait before asking for the stake
 * table again after a failed request.
 */
export const EPOCH_VALIDATORS_RETRY_MS = 30_000;

/**
 * useEpochDelegators looks the validator up in the query service's stake
 * table for the epoch. When the epoch moves on, or a later request fails,
 * the last loaded stake table is kept until a new one arrives, so the
 * delegators are always labelled with their own epoch. Failed requests are
 * retried.
 */
function useEpochDelegators(
  address: `0x${string}`,
  epoch: number,
): EpochDelegators {
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const [loaded, setLoaded] = React.useState<null | {
    epoch: number;
    validators: ActiveValidators;
  }>(null);
  const [failed, setFailed] = React.useState(false);
  const [attempt, setAttempt] = React.useState(0);

  React.useEffect(() => {
    if (!service || epoch <= 0) {
      return;
    }

    let mounted = true;
    let retry: undefined | number;
    fetchEpochValidators(service, epoch).then(
      (validators) => {
        if (mounted) {
          setLoaded({ epoch, validators });
          setFailed(false);
        }
      },
      () => {
        if (mounted) {
          setFailed(true);
          retry = window.setTimeout(
            () => setAttempt((count) => count + 1),
            EPOCH_VALIDATORS_RETRY_MS,
          );
        }
      },
    );
    return () => {
      mounted = false;
      window.clearTimeout(retry);
    };
  }, [service, epoch, attempt]);

  // The result is a dependency of the validator history, so it must keep its
  // identity between renders.
  return React.useMemo(() => {
    if (!loaded) {
      return failed ? DELEGATORS_ERROR : DELEGATORS_LOADING;
    }

    const target = address.toLowerCase();
    for (const [key, entry] of loaded.validators.validators) {
      if (key.toLowerCase() === target) {
        return { state: 'live', entry, epoch: loaded.epoch };
      }
    }
    return { state: 'inactive', epoch: loaded.epoch };
  }, [loaded, failed, address]);
}

/**
 * withDelegators sets the history's number of delegators from the stake
 * table when it lists the validator, and otherwise why it isn't known. A
 * validator outside the active set still gets its number of delegators
 * from the history file, which counts every wallet with stake.
 */
function withDelegators(
  history: ValidatorHistory,
  delegators: EpochDelegators,
): ValidatorHistory {
  if (delegators.state === 'live') {
    return {
      ...history,
      sources: { ...history.sources, delegators: 'live' },
      delegatorCount: delegators.entry.delegators.size,
      delegatorsUnknown: null,
      delegatorsEpoch: delegators.epoch,
    };
  }

  // Sample history brings its own sample number of delegators.
  if (history.status === 'sample') {
    return history;
  }

  const inactive = delegators.state === 'inactive';
  return {
    ...history,
    delegatorCount: inactive
      ? (history.delegationBaselines?.size ?? null)
      : null,
    delegatorsUnknown: delegators.state,
    delegatorsEpoch: inactive ? delegators.epoch : null,
  };
}

type HistoryFileState =
  | { state: 'none' }
  | { state: 'loading' }
  | { state: 'live'; file: ValidatorHistoryFile }
  | { state: 'missing' }
  | { state: 'error' };

/**
 * useValidatorHistoryFile loads the validator's history file, when a source
 * is configured for the current network.
 */
export function useValidatorHistoryFile(address: `0x${string}`): {
  network: null | string;
  file: HistoryFileState;
} {
  const baseURL = React.useContext(ValidatorHistoryURLContext);
  const environment = React.useContext(EnvironmentContext);
  const network = historyNetwork(environment);
  const url =
    baseURL && network
      ? validatorHistoryFileURL(baseURL, network, address)
      : null;
  const [loaded, setLoaded] = React.useState<{
    url: string;
    file: HistoryFileState;
  } | null>(null);

  React.useEffect(() => {
    if (!url || !network) {
      return;
    }

    let mounted = true;
    const refresh = () =>
      fetchValidatorHistoryFile(url, network, address).then(
        (file) =>
          mounted &&
          // Refreshing within the cache window returns the same file; keep
          // the state so the history isn't rebuilt for nothing.
          setLoaded((prev) =>
            prev?.url === url &&
            prev.file.state === 'live' &&
            prev.file.file === file
              ? prev
              : { url, file: { state: 'live', file } },
          ),
        (err) => {
          const file =
            err instanceof ValidatorHistoryFileMissing
              ? MISSING_HISTORY_FILE
              : FAILED_HISTORY_FILE;
          return (
            mounted &&
            // A refresh that fails keeps the file that is already showing:
            // history from a few minutes ago beats an error message.
            setLoaded((prev) =>
              prev?.url === url &&
              (prev.file.state === 'live' || prev.file === file)
                ? prev
                : { url, file },
            )
          );
        },
      );
    void refresh();
    const interval = window.setInterval(refresh, VALIDATOR_HISTORY_REFRESH_MS);
    window.addEventListener('focus', refresh);
    return () => {
      mounted = false;
      window.clearInterval(interval);
      window.removeEventListener('focus', refresh);
    };
  }, [url, network, address]);

  if (!url) {
    return { network, file: NO_HISTORY_FILE };
  }
  if (!loaded || loaded.url !== url) {
    return { network, file: LOADING_HISTORY_FILE };
  }
  return { network, file: loaded.file };
}

// Shared so the file state keeps its identity between renders.
const NO_HISTORY_FILE: HistoryFileState = { state: 'none' };
const LOADING_HISTORY_FILE: HistoryFileState = { state: 'loading' };
const MISSING_HISTORY_FILE: HistoryFileState = { state: 'missing' };
const FAILED_HISTORY_FILE: HistoryFileState = { state: 'error' };

const ALL_LIVE = {
  stake: 'live',
  epochs: 'live',
  delegators: 'live',
  activity: 'live',
  commission: 'live',
} as const;

/**
 * historyFromFile builds the validator history from its history file, or
 * an empty history when the validator has no file, it failed to load, or
 * the network has no history source.
 */
function historyFromFile(
  file: HistoryFileState,
  network: null | string,
  now: Date,
): ValidatorHistory {
  const empty: ValidatorHistory = {
    status:
      file.state === 'error'
        ? 'error'
        : file.state === 'none'
          ? 'unavailable'
          : 'missing',
    sources: ALL_LIVE,
    stake: [],
    epochs: [],
    delegatorCount: null,
    delegatorsUnknown: 'loading',
    delegatorsEpoch: null,
    activity: [],
    commissionChanges: [],
    registeredAt: null,
    networkMissedRates: new Map(),
    lastEpochVote: null,
    nodeVersion: null,
    nodeVersionStatus: null,
    delegatorAPR: null,
    earnings: null,
    msPerEpoch: null,
    txExplorerURL: network ? txExplorerURLFor(network) : null,
  };

  if (file.state !== 'live') {
    return empty;
  }

  const epochs = epochsFromFile(file.file);
  return {
    ...empty,
    status: 'live',
    stake: stakePointsFromFile(file.file, now),
    epochs,
    activity: activityFromFile(file.file),
    commissionChanges: commissionChangesFromFile(file.file),
    delegationBaselines: delegationBaselinesFromFile(file.file),
    registeredAt: registeredAtFromFile(file.file),
    networkMissedRates: networkMissedRatesFromFile(file.file),
    lastEpochVote: lastEpochVoteFromFile(file.file),
    nodeVersion: nodeVersionFromFile(file.file),
    nodeVersionStatus: nodeVersionStatusFromFile(file.file),
    delegatorAPR: delegatorAPRFromFile(file.file),
    earnings: earningsFromFile(file.file),
    msPerEpoch: msPerEpochFromFile(file.file),
  };
}

/**
 * ProvideValidatorHistory provides the ValidatorHistoryContext. It is null
 * while the history file is loading.
 *
 * Delegators are live, from the query service. Everything else comes from
 * the validator history files. Without a history source for the network the
 * history is empty and marked 'unavailable'; only where the host turns on
 * SampleValidatorHistoryContext (Storybook, local development) is it
 * replaced by deterministic sample data anchored to the validator's real
 * current values, with `sources` recording which sections are samples.
 */
export const ProvideValidatorHistory: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const validator = React.useContext(ValidatorNodeContext);
  const currentEpoch = React.useContext(EspressoCurrentEpochContext);
  const sampleHistory = React.useContext(SampleValidatorHistoryContext);
  const now = React.useContext(Now);

  const address = validator.addressText;
  const stake = espToNumber(validator.stake);
  const commission = validator.commission.valueOf();
  const epoch = Number(currentEpoch);
  // Only rebuild when the day changes, not on every tick of Now.
  const day = Math.floor(now.valueOf() / 86_400_000);
  const delegators = useEpochDelegators(address, epoch);
  const { network, file } = useValidatorHistoryFile(address);

  const history = React.useMemo(() => {
    if (file.state === 'loading') {
      return null;
    }

    let base: ValidatorHistory;
    // Sample data is scaled to the stake and ends on the epoch, so it needs
    // both.
    if (file.state === 'none' && sampleHistory && stake > 0 && epoch > 0) {
      base = sampleValidatorHistory({
        address,
        stake,
        commission,
        currentEpoch: epoch,
        now: new Date(day * 86_400_000),
      });
    } else {
      try {
        base = historyFromFile(file, network, new Date());
      } catch {
        // A file that passed validation but still trips a reader is shown
        // like a file that failed to load.
        base = historyFromFile(FAILED_HISTORY_FILE, network, new Date());
      }
    }

    return withDelegators(base, delegators);
  }, [
    address,
    stake,
    commission,
    epoch,
    day,
    delegators,
    file,
    network,
    sampleHistory,
  ]);

  return (
    <ValidatorHistoryContext.Provider value={history}>
      {children}
    </ValidatorHistoryContext.Provider>
  );
};

/**
 * useDelegatorAPR is the APR to show for the current validator: what its
 * delegators earned over the last 30 days when espressonodes measured a
 * believable figure, and otherwise the estimate from the network APR and
 * the validator's commission. It is null when neither is known.
 */
export function useDelegatorAPR(): null | DelegatorAPR {
  const facts = useValidatorFacts();
  const history = React.useContext(ValidatorHistoryContext);
  const activeValidators = React.useContext(ActiveValidatorsContext);
  const earnings = history?.earnings ?? null;

  return delegatorAPRToShow({
    measured: history?.delegatorAPR ?? null,
    networkAPR: activeValidators?.apr.ratio ?? null,
    commission: facts.commission,
    commissionRaised:
      history !== null &&
      earnings !== null &&
      commissionRaisedSince(
        history.commissionChanges,
        new Date(earnings.asOf.valueOf() - 30 * 86_400_000),
      ),
  });
}
