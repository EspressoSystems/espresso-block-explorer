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
import { ValidatorHistoryURLContext } from '../contexts/validator_details_context';
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
  flowsFromFile,
  historyNetwork,
  lastEpochVoteFromFile,
  networkMissedRatesFromFile,
  nodeVersionFromFile,
  nodeVersionStatusFromFile,
  registeredAtFromFile,
  exitedAtFromFile,
  stakePointsFromFile,
  txExplorerURLFor,
  votesFromFile,
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

const TOP_DELEGATOR_COUNT = 7;

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

interface EpochValidatorEntry {
  entry: ValidatorEntry;
  /** epoch is the epoch the entry was fetched for. */
  epoch: number;
}

/**
 * useEpochValidatorEntry returns the query service's entry for a validator,
 * with the epoch it belongs to, or null until one has loaded. When the
 * epoch moves on, the previous epoch's entry is kept until the new one
 * arrives, so it is always labelled with its own epoch.
 */
function useEpochValidatorEntry(
  address: `0x${string}`,
  epoch: number,
): null | EpochValidatorEntry {
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const [loaded, setLoaded] = React.useState<null | {
    epoch: number;
    validators: ActiveValidators;
  }>(null);

  React.useEffect(() => {
    if (!service || epoch <= 0) {
      return;
    }

    let mounted = true;
    fetchEpochValidators(service, epoch).then(
      (validators) => mounted && setLoaded({ epoch, validators }),
      () => {},
    );
    return () => {
      mounted = false;
    };
  }, [service, epoch]);

  if (!loaded) {
    return null;
  }

  const target = address.toLowerCase();
  for (const [key, entry] of loaded.validators.validators) {
    if (key.toLowerCase() === target) {
      return { entry, epoch: loaded.epoch };
    }
  }
  return null;
}

/**
 * withLiveDelegators replaces the sample delegators with the validator's
 * real delegators from the query service.
 */
function withLiveDelegators(
  history: ValidatorHistory,
  entry: ValidatorEntry,
  epoch: number,
): ValidatorHistory {
  const delegators = Array.from(entry.delegators, ([address, amount]) => ({
    address,
    amount: espToNumber(amount),
  })).sort((a, b) => b.amount - a.amount);

  return {
    ...history,
    sources: { ...history.sources, delegators: 'live' },
    delegatorCount: delegators.length,
    topDelegators: delegators.slice(0, TOP_DELEGATOR_COUNT),
    delegatedTotal: espToNumber(entry.stake),
    delegatorsEpoch: epoch,
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
    if (!url) {
      return;
    }

    let mounted = true;
    const refresh = () =>
      fetchValidatorHistoryFile(url).then(
        (file) => mounted && setLoaded({ url, file: { state: 'live', file } }),
        (err) =>
          mounted &&
          setLoaded({
            url,
            file: {
              state:
                err instanceof ValidatorHistoryFileMissing
                  ? 'missing'
                  : 'error',
            },
          }),
      );
    void refresh();
    const interval = window.setInterval(refresh, VALIDATOR_HISTORY_REFRESH_MS);
    window.addEventListener('focus', refresh);
    return () => {
      mounted = false;
      window.clearInterval(interval);
      window.removeEventListener('focus', refresh);
    };
  }, [url]);

  if (!url) {
    return { network, file: { state: 'none' } };
  }
  if (!loaded || loaded.url !== url) {
    return { network, file: { state: 'loading' } };
  }
  return { network, file: loaded.file };
}

const ALL_LIVE = {
  stake: 'live',
  flows: 'live',
  epochs: 'live',
  delegators: 'live',
  activity: 'live',
  commission: 'live',
} as const;

/**
 * historyFromFile builds the validator history from its history file, or
 * an empty history when the validator has no file or it failed to load.
 */
function historyFromFile(
  file: HistoryFileState,
  network: null | string,
  stake: number,
  now: Date,
): ValidatorHistory {
  const empty: ValidatorHistory = {
    status: file.state === 'error' ? 'error' : 'missing',
    sources: ALL_LIVE,
    stake: [],
    flows: [],
    epochs: [],
    delegatorCount: 0,
    topDelegators: [],
    delegatedTotal: stake,
    delegatorsEpoch: null,
    activity: [],
    commissionChanges: [],
    registeredAt: null,
    exitedAt: null,
    networkMissedRates: new Map(),
    lastEpochVote: null,
    nodeVersion: null,
    nodeVersionStatus: null,
    delegatorAPR: null,
    votes: [],
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
    flows: flowsFromFile(file.file, now),
    epochs,
    activity: activityFromFile(file.file),
    commissionChanges: commissionChangesFromFile(file.file),
    delegationBaselines: delegationBaselinesFromFile(file.file),
    registeredAt: registeredAtFromFile(file.file),
    exitedAt: exitedAtFromFile(file.file),
    networkMissedRates: networkMissedRatesFromFile(file.file),
    lastEpochVote: lastEpochVoteFromFile(file.file),
    nodeVersion: nodeVersionFromFile(file.file),
    nodeVersionStatus: nodeVersionStatusFromFile(file.file),
    delegatorAPR: delegatorAPRFromFile(file.file),
    votes: votesFromFile(file.file),
    earnings: earningsFromFile(file.file),
    msPerEpoch: msPerEpochFromFile(file.file),
  };
}

/**
 * ProvideValidatorHistory provides the ValidatorHistoryContext.
 *
 * Delegators are live, from the query service. Everything else comes from
 * the validator history files when a source is configured; without one
 * (local development, Storybook) it falls back to deterministic sample data
 * anchored to the validator's real current values, and `sources` records
 * which sections are samples.
 */
export const ProvideValidatorHistory: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const validator = React.useContext(ValidatorNodeContext);
  const currentEpoch = React.useContext(EspressoCurrentEpochContext);
  const now = React.useContext(Now);

  const address = validator.addressText;
  const stake = espToNumber(validator.stake);
  const commission = validator.commission.valueOf();
  const epoch = Number(currentEpoch);
  // Only rebuild when the day changes, not on every tick of Now.
  const day = Math.floor(now.valueOf() / 86_400_000);
  const delegatorsEntry = useEpochValidatorEntry(address, epoch);
  const { network, file } = useValidatorHistoryFile(address);

  const history = React.useMemo(() => {
    if (epoch <= 0 || file.state === 'loading') {
      return null;
    }
    // Sample data is scaled to the stake, so it needs some.
    if (file.state === 'none' && stake <= 0) {
      return null;
    }

    const today = new Date(day * 86_400_000);
    let base: ValidatorHistory;
    if (file.state === 'none') {
      base = sampleValidatorHistory({
        address,
        stake,
        commission,
        currentEpoch: epoch,
        now: today,
      });
    } else {
      try {
        base = historyFromFile(file, network, stake, new Date());
      } catch {
        // A file that passed validation but still trips a reader is shown
        // like a file that failed to load.
        base = historyFromFile({ state: 'error' }, network, stake, new Date());
      }
    }

    return delegatorsEntry
      ? withLiveDelegators(base, delegatorsEntry.entry, delegatorsEntry.epoch)
      : base;
  }, [address, stake, commission, epoch, day, delegatorsEntry, file, network]);

  return (
    <ValidatorHistoryContext.Provider value={history}>
      {children}
    </ValidatorHistoryContext.Provider>
  );
};
