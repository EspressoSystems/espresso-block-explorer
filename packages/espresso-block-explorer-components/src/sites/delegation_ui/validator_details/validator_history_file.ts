import { Environment } from '@/models/config/environment/environment';
import {
  ActivityEntry,
  CommissionChange,
  DelegationBaseline,
  EarningsWindow,
  EpochPerformance,
  EpochVote,
  EpochVotes,
  StakeFlow,
  StakePoint,
  ValidatorEarnings,
} from './sample_history';

/**
 * Validator history files.
 *
 * The validator monitor (espressonodes.com) writes one static JSON file per
 * validator after every epoch:
 *
 *   {base}/{network}/validators/{address}.json
 *
 * It holds per-epoch participation, which no public API keeps, and the
 * validator's stake table events from L1, from which stake history,
 * activity, and commission changes are derived.
 */

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const WEI_PER_ESP = 1e18;
const STAKE_DAYS = 90;
const FLOW_DAYS = 30;
export const VALIDATOR_HISTORY_REFRESH_MS = 5 * 60 * 1000;

export const VALIDATOR_HISTORY_SCHEMA_VERSION = 1;

export interface HistoryFileEpoch {
  epoch: number;
  slots: null | number;
  proposals: null | number;
  vote_rate: null | number;
  proposal_rate: null | number;
}

export interface HistoryFileNetworkEpoch {
  epoch: number;
  active_validators: null | number;
  avg_vote_rate: null | number;
  avg_missed_rate: null | number;
}

export interface HistoryFileStakePoint {
  timestamp: string;
  block: number;
  stake: string;
}

export type HistoryFileEventType =
  'delegated' | 'undelegated' | 'commission_updated' | 'registered' | 'exited';

export interface HistoryFileEvent {
  type: HistoryFileEventType;
  timestamp: string;
  block: number;
  tx_hash: `0x${string}`;
  log_index: number;
  delegator: null | `0x${string}`;
  amount: null | string;
  old_commission_bps: null | number;
  new_commission_bps: null | number;
}

export interface HistoryFileNodeVersion {
  version: string;
  updated_at: null | string;
  /**
   * latest is the newest node release for the network, and status whether
   * this node runs it. Older files don't have them.
   */
  latest?: null | string;
  status?: null | 'latest' | 'outdated';
}

export interface HistoryFileDelegationBaseline {
  delegated_at: string;
  commission_bps: null | number;
  block: number;
  log_index: number;
}

export interface HistoryFileEarningsAmounts {
  total: string;
  validator: string;
  delegators: string;
}

export interface HistoryFileEarningsWindow {
  delegator_net_apr: null | number;
  gross_apr?: null | number;
}

export interface HistoryFileEarningsInterval {
  epoch_from?: number;
  epoch_to?: number;
  start: string;
  end: string;
  source: 'measured' | 'estimated';
  validator: string;
  delegators: string;
}

/**
 * HistoryFileEarnings is the part of the file's earnings the site reads.
 */
export interface HistoryFileEarnings {
  as_of?: string;
  lifetime?: HistoryFileEarningsAmounts;
  windows?: Partial<Record<'7d' | '30d', HistoryFileEarningsWindow>>;
  intervals?: HistoryFileEarningsInterval[];
}

export interface ValidatorHistoryFile {
  schema_version: number;
  network: string;
  address: `0x${string}`;
  generated_at: string;
  latest_epoch: null | number;
  epochs: HistoryFileEpoch[];
  network_epochs: HistoryFileNetworkEpoch[];
  stake_history: HistoryFileStakePoint[];
  events: HistoryFileEvent[];
  /** Latest accepted commission per staked wallet, independent of event retention. */
  delegation_baselines?: Record<string, HistoryFileDelegationBaseline>;
  /**
   * node_version is the version espressonodes reads from the node's metrics,
   * when it can. Older files don't have it.
   */
  node_version?: null | HistoryFileNodeVersion;
  /**
   * earnings are the staking rewards espressonodes measured for the
   * validator. Older files don't have it.
   */
  earnings?: null | HistoryFileEarnings;
}

/**
 * historyNetwork names the network in the history files for an environment,
 * or null when there is no history for it.
 */
export function historyNetwork(environment: Environment): null | string {
  switch (environment) {
    case Environment.mainnet:
      return 'mainnet';
    case Environment.decaf:
      return 'decaf';
    default:
      return null;
  }
}

/**
 * txExplorerURLFor is the L1 block explorer URL for transactions on the
 * network's L1, or null when unknown.
 */
export function txExplorerURLFor(network: string): null | string {
  switch (network) {
    case 'mainnet':
      return 'https://etherscan.io/tx/';
    case 'decaf':
      return 'https://sepolia.etherscan.io/tx/';
    default:
      return null;
  }
}

const VALIDATOR_ADDRESS = /^0x[0-9a-fA-F]{40}$/;

/**
 * isValidatorAddress says whether text from a URL is shaped like an
 * address, so it is safe to put in a history file URL.
 */
export function isValidatorAddress(address: string): address is `0x${string}` {
  return VALIDATOR_ADDRESS.test(address);
}

export function validatorHistoryFileURL(
  baseURL: string,
  network: string,
  address: `0x${string}`,
): string {
  const base = baseURL.endsWith('/') ? baseURL : `${baseURL}/`;
  return new URL(
    `${network}/validators/${address.toLowerCase()}.json`,
    base,
  ).toString();
}

/**
 * ValidatorHistoryFileMissing is thrown when a validator has no history
 * file, which is normal for a validator the monitor has not seen yet.
 */
export class ValidatorHistoryFileMissing extends Error {}

type Shape = Record<string, unknown>;

function isShape(value: unknown): value is Shape {
  return typeof value === 'object' && value !== null;
}

function isNumberOrNull(value: unknown): boolean {
  return value === null || typeof value === 'number';
}

function isStringOrNull(value: unknown): boolean {
  return value === null || typeof value === 'string';
}

function isEpoch(value: unknown): boolean {
  return (
    isShape(value) &&
    typeof value.epoch === 'number' &&
    isNumberOrNull(value.slots) &&
    isNumberOrNull(value.proposals) &&
    isNumberOrNull(value.vote_rate)
  );
}

function isNetworkEpoch(value: unknown): boolean {
  return (
    isShape(value) &&
    typeof value.epoch === 'number' &&
    isNumberOrNull(value.avg_vote_rate) &&
    isNumberOrNull(value.avg_missed_rate)
  );
}

function isStakePoint(value: unknown): boolean {
  return (
    isShape(value) &&
    typeof value.timestamp === 'string' &&
    typeof value.stake === 'string'
  );
}

function isEvent(value: unknown): boolean {
  return (
    isShape(value) &&
    typeof value.type === 'string' &&
    typeof value.timestamp === 'string' &&
    isStringOrNull(value.delegator) &&
    isStringOrNull(value.amount) &&
    isNumberOrNull(value.old_commission_bps) &&
    isNumberOrNull(value.new_commission_bps)
  );
}

function isNodeVersion(value: unknown): boolean {
  return (
    value === undefined ||
    value === null ||
    (isShape(value) && typeof value.version === 'string')
  );
}

function isDelegationBaselines(value: unknown): boolean {
  if (value === undefined) {
    return true;
  }
  return (
    isShape(value) &&
    !Array.isArray(value) &&
    Object.entries(value).every(
      ([wallet, baseline]) =>
        isValidatorAddress(wallet) &&
        isShape(baseline) &&
        typeof baseline.delegated_at === 'string' &&
        Number.isFinite(Date.parse(baseline.delegated_at)) &&
        (baseline.commission_bps === null ||
          (typeof baseline.commission_bps === 'number' &&
            Number.isInteger(baseline.commission_bps) &&
            baseline.commission_bps >= 0 &&
            baseline.commission_bps <= 10_000)) &&
        typeof baseline.block === 'number' &&
        Number.isSafeInteger(baseline.block) &&
        baseline.block >= 0 &&
        typeof baseline.log_index === 'number' &&
        Number.isSafeInteger(baseline.log_index) &&
        baseline.log_index >= 0,
    )
  );
}

function isEarnings(value: unknown): boolean {
  if (value === undefined || value === null) {
    return true;
  }
  return (
    isShape(value) &&
    (value.intervals === undefined || Array.isArray(value.intervals)) &&
    (value.windows === undefined || isShape(value.windows)) &&
    (value.lifetime === undefined || isShape(value.lifetime))
  );
}

/**
 * isValidatorHistoryFile checks the shape of everything the readers below
 * touch, so a malformed publish shows as an error rather than throwing
 * while a page renders.
 */
export function isValidatorHistoryFile(
  value: unknown,
): value is ValidatorHistoryFile {
  if (!isShape(value)) {
    return false;
  }

  return (
    value.schema_version === VALIDATOR_HISTORY_SCHEMA_VERSION &&
    Array.isArray(value.epochs) &&
    value.epochs.every(isEpoch) &&
    Array.isArray(value.network_epochs) &&
    value.network_epochs.every(isNetworkEpoch) &&
    Array.isArray(value.stake_history) &&
    value.stake_history.every(isStakePoint) &&
    Array.isArray(value.events) &&
    value.events.every(isEvent) &&
    isDelegationBaselines(value.delegation_baselines) &&
    isNodeVersion(value.node_version) &&
    isEarnings(value.earnings)
  );
}

const cache = new Map<
  string,
  { fetchedAt: number; request: Promise<ValidatorHistoryFile> }
>();

/**
 * fetchValidatorHistoryFile fetches and validates a history file. Files
 * only change once per epoch, so responses are reused for a few minutes.
 */
export function fetchValidatorHistoryFile(
  url: string,
): Promise<ValidatorHistoryFile> {
  const cached = cache.get(url);
  if (cached && Date.now() - cached.fetchedAt < VALIDATOR_HISTORY_REFRESH_MS) {
    return cached.request;
  }

  const request = fetch(url).then(async (response) => {
    if (response.status === 404) {
      throw new ValidatorHistoryFileMissing(url);
    }
    if (!response.ok) {
      throw new Error(`validator history ${response.status}: ${url}`);
    }

    const body: unknown = await response.json();
    if (!isValidatorHistoryFile(body)) {
      throw new Error(`unsupported validator history file: ${url}`);
    }
    return body;
  });

  cache.set(url, { fetchedAt: Date.now(), request });
  request.catch((err) => {
    // Retry failures next time, but remember that a file is missing.
    if (!(err instanceof ValidatorHistoryFileMissing)) {
      cache.delete(url);
    }
  });
  return request;
}

function weiToESP(wei: null | string): number {
  if (!wei) {
    return 0;
  }
  try {
    return Number(BigInt(wei)) / WEI_PER_ESP;
  } catch {
    return 0;
  }
}

function utcDay(date: Date): number {
  return Math.floor(date.valueOf() / MS_PER_DAY);
}

/**
 * stakePointsFromFile turns the stake after every change into one point per
 * day for the last 90 days, starting from the first change if the validator
 * is newer than that.
 */
export function stakePointsFromFile(
  file: ValidatorHistoryFile,
  now: Date,
): StakePoint[] {
  const changes = file.stake_history
    .map((point) => ({
      day: utcDay(new Date(point.timestamp)),
      stake: weiToESP(point.stake),
    }))
    .sort((a, b) => a.day - b.day);

  if (changes.length === 0) {
    return [];
  }

  const today = utcDay(now);
  const firstDay = Math.max(today - (STAKE_DAYS - 1), changes[0].day);
  const points: StakePoint[] = [];
  let index = 0;
  let stake = 0;
  for (let day = firstDay; day <= today; day++) {
    while (index < changes.length && changes[index].day <= day) {
      stake = changes[index].stake;
      index++;
    }
    points.push({ date: new Date(day * MS_PER_DAY), stake });
  }
  return points;
}

/**
 * flowsFromFile sums stake delegated and undelegated per day for the last
 * 30 days.
 */
export function flowsFromFile(
  file: ValidatorHistoryFile,
  now: Date,
): StakeFlow[] {
  const today = utcDay(now);
  const firstDay = today - (FLOW_DAYS - 1);
  const flows: StakeFlow[] = Array.from({ length: FLOW_DAYS }, (_, i) => ({
    date: new Date((firstDay + i) * MS_PER_DAY),
    delegated: 0,
    undelegated: 0,
  }));

  for (const event of file.events) {
    const day = utcDay(new Date(event.timestamp));
    const flow = flows[day - firstDay];
    if (!flow) {
      continue;
    }
    if (event.type === 'delegated') {
      flow.delegated += weiToESP(event.amount);
    } else if (event.type === 'undelegated') {
      flow.undelegated += weiToESP(event.amount);
    }
  }
  return flows;
}

/**
 * epochsFromFile converts per-epoch participation into slots led and
 * missed, skipping epochs without slot data.
 */
export function epochsFromFile(file: ValidatorHistoryFile): EpochPerformance[] {
  return file.epochs
    .filter(
      (epoch) =>
        epoch.slots !== null && epoch.proposals !== null && epoch.slots > 0,
    )
    .map((epoch) => ({
      epoch: epoch.epoch,
      slotsLed: epoch.slots as number,
      slotsMissed: Math.max(
        0,
        (epoch.slots as number) - (epoch.proposals as number),
      ),
    }))
    .sort((a, b) => a.epoch - b.epoch);
}

/**
 * networkMissedRatesFromFile maps each epoch to the network's average missed
 * slot rate, where known.
 */
export function networkMissedRatesFromFile(
  file: ValidatorHistoryFile,
): Map<number, number> {
  return new Map(
    file.network_epochs
      .filter((epoch) => epoch.avg_missed_rate !== null)
      .map((epoch) => [epoch.epoch, epoch.avg_missed_rate as number]),
  );
}

export function activityFromFile(file: ValidatorHistoryFile): ActivityEntry[] {
  return file.events
    .filter(
      (event) =>
        (event.type === 'delegated' || event.type === 'undelegated') &&
        event.delegator !== null,
    )
    .map((event) => ({
      date: new Date(event.timestamp),
      kind:
        event.type === 'delegated'
          ? ('delegate' as const)
          : ('undelegate' as const),
      delegator: event.delegator as `0x${string}`,
      amount: weiToESP(event.amount),
      txHash: event.tx_hash,
    }))
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

/**
 * commissionChangesFromFile lists commission changes newest first, ending
 * with the commission set at registration when the file includes it.
 */
export function commissionChangesFromFile(
  file: ValidatorHistoryFile,
): CommissionChange[] {
  return file.events
    .filter(
      (event) =>
        (event.type === 'commission_updated' || event.type === 'registered') &&
        event.new_commission_bps !== null,
    )
    .map((event) => ({
      date: new Date(event.timestamp),
      from:
        event.type === 'registered' || event.old_commission_bps === null
          ? null
          : event.old_commission_bps / 10_000,
      to: (event.new_commission_bps as number) / 10_000,
      txHash: event.tx_hash,
      block: event.block,
      logIndex: event.log_index,
    }))
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

export function delegationBaselinesFromFile(
  file: ValidatorHistoryFile,
): undefined | ReadonlyMap<string, DelegationBaseline> {
  if (file.delegation_baselines === undefined) {
    return undefined;
  }
  return new Map(
    Object.entries(file.delegation_baselines).map(([wallet, baseline]) => [
      wallet.toLowerCase(),
      {
        delegatedAt: new Date(baseline.delegated_at),
        commission:
          baseline.commission_bps === null
            ? null
            : baseline.commission_bps / 10_000,
        block: baseline.block,
        logIndex: baseline.log_index,
      },
    ]),
  );
}

/**
 * lastEpochVoteFromFile is the vote rate of the latest epoch that has one.
 * The files only hold completed epochs, so this is the last completed epoch.
 */
export function lastEpochVoteFromFile(
  file: ValidatorHistoryFile,
): null | EpochVote {
  let latest: null | EpochVote = null;
  for (const epoch of file.epochs) {
    if (epoch.vote_rate !== null && (!latest || epoch.epoch > latest.epoch)) {
      latest = { epoch: epoch.epoch, rate: epoch.vote_rate };
    }
  }
  return latest;
}

/**
 * nodeVersionFromFile is the version the node is running, as measured by
 * espressonodes, or null when it isn't known.
 */
export function nodeVersionFromFile(file: ValidatorHistoryFile): null | string {
  const version = file.node_version?.version;
  return typeof version === 'string' && version.trim() ? version.trim() : null;
}

/**
 * delegatorAPRFromFile is the APR delegators earned over the last 30 days,
 * after commission, or null when espressonodes hasn't measured it.
 */
export function delegatorAPRFromFile(
  file: ValidatorHistoryFile,
): null | number {
  const apr = file.earnings?.windows?.['30d']?.delegator_net_apr;
  return typeof apr === 'number' && Number.isFinite(apr) ? apr : null;
}

/**
 * votesFromFile is the validator's vote participation per epoch with the
 * network's average, skipping epochs without a vote rate.
 */
export function votesFromFile(file: ValidatorHistoryFile): EpochVotes[] {
  const network = new Map(
    file.network_epochs.map((epoch) => [epoch.epoch, epoch.avg_vote_rate]),
  );
  return file.epochs
    .filter((epoch) => epoch.vote_rate !== null)
    .map((epoch) => ({
      epoch: epoch.epoch,
      rate: epoch.vote_rate as number,
      networkRate: network.get(epoch.epoch) ?? null,
    }))
    .sort((a, b) => a.epoch - b.epoch);
}

function weiToBigInt(wei: undefined | null | string): bigint {
  try {
    return wei ? BigInt(wei) : 0n;
  } catch {
    return 0n;
  }
}

function finiteOrNull(value: undefined | null | number): null | number {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function earningsWindow(
  window: undefined | HistoryFileEarningsWindow,
): null | EarningsWindow {
  if (!window) {
    return null;
  }
  return {
    delegatorNetAPR: finiteOrNull(window.delegator_net_apr),
    grossAPR: finiteOrNull(window.gross_apr),
  };
}

/**
 * earningsFromFile converts the validator's rewards, or null when the file
 * has none.
 */
export function earningsFromFile(
  file: ValidatorHistoryFile,
): null | ValidatorEarnings {
  const earnings = file.earnings;
  if (!earnings?.as_of || !earnings.lifetime) {
    return null;
  }

  return {
    asOf: new Date(earnings.as_of),
    lifetime: {
      total: weiToBigInt(earnings.lifetime.total),
      validator: weiToBigInt(earnings.lifetime.validator),
      delegators: weiToBigInt(earnings.lifetime.delegators),
    },
    last7Days: earningsWindow(earnings.windows?.['7d']),
    last30Days: earningsWindow(earnings.windows?.['30d']),
    periods: (earnings.intervals ?? [])
      .map((interval) => ({
        start: new Date(interval.start),
        end: new Date(interval.end),
        validator: weiToESP(interval.validator),
        delegators: weiToESP(interval.delegators),
        estimated: interval.source !== 'measured',
      }))
      .sort((a, b) => a.end.valueOf() - b.end.valueOf()),
  };
}

/**
 * EPOCH_LENGTH_INTERVALS is how many of the latest earnings intervals the
 * epoch length is averaged over (about a week).
 */
const EPOCH_LENGTH_INTERVALS = 7;

/**
 * msPerEpochFromFile is the recent length of an epoch, from the epoch
 * boundary times of the latest earnings intervals, or null without them.
 */
export function msPerEpochFromFile(file: ValidatorHistoryFile): null | number {
  const intervals = (file.earnings?.intervals ?? [])
    .filter(
      (i) =>
        typeof i.epoch_from === 'number' &&
        typeof i.epoch_to === 'number' &&
        i.epoch_to >= i.epoch_from,
    )
    .sort((a, b) => Date.parse(a.end) - Date.parse(b.end))
    .slice(-EPOCH_LENGTH_INTERVALS);

  let ms = 0;
  let epochs = 0;
  for (const interval of intervals) {
    const length = Date.parse(interval.end) - Date.parse(interval.start);
    if (Number.isFinite(length) && length > 0) {
      ms += length;
      epochs +=
        (interval.epoch_to as number) - (interval.epoch_from as number) + 1;
    }
  }
  return epochs > 0 ? ms / epochs : null;
}

/**
 * exitedAtFromFile is when the validator exited the stake table, or null if
 * it hasn't.
 */
export function exitedAtFromFile(file: ValidatorHistoryFile): null | Date {
  const exits = file.events
    .filter((event) => event.type === 'exited')
    .map((event) => new Date(event.timestamp).valueOf());

  return exits.length > 0 ? new Date(Math.max(...exits)) : null;
}

export interface NodeVersionStatus {
  status: 'latest' | 'outdated';
  latest: null | string;
}

/**
 * nodeVersionStatusFromFile says whether the node runs the newest release
 * for its network, when espressonodes could tell.
 */
export function nodeVersionStatusFromFile(
  file: ValidatorHistoryFile,
): null | NodeVersionStatus {
  const status = file.node_version?.status;
  if (status !== 'latest' && status !== 'outdated') {
    return null;
  }
  return { status, latest: file.node_version?.latest ?? null };
}

export function registeredAtFromFile(file: ValidatorHistoryFile): null | Date {
  const registrations = file.events
    .filter((event) => event.type === 'registered')
    .map((event) => new Date(event.timestamp).valueOf());

  return registrations.length > 0 ? new Date(Math.min(...registrations)) : null;
}
