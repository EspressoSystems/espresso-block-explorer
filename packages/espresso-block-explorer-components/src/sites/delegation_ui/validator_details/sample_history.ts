import type { NodeVersionStatus } from './validator_history_file';
/**
 * Validator history types, and sample history.
 *
 * Real history comes from the validator history files (see
 * validator_history_file.ts). When no history source is configured, for
 * example in local development or Storybook, the validator details views
 * render deterministic sample data anchored to the validator's real current
 * stake, commission, and epoch, so the charts end on the true values.
 *
 * Every section must show the user when its `sources` entry is 'sample'.
 */

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export interface StakePoint {
  date: Date;
  stake: number;
}

/**
 * StakeFlow is the stake delegated to and undelegated from a validator on
 * one day (UTC).
 */
export interface StakeFlow {
  date: Date;
  delegated: number;
  undelegated: number;
}

export interface EpochPerformance {
  epoch: number;
  slotsLed: number;
  slotsMissed: number;
}

export interface EpochVote {
  epoch: number;
  rate: number;
}

/**
 * EpochVotes is the share of eligible blocks the validator voted on in one
 * epoch, and the network's average for that epoch.
 */
export interface EpochVotes {
  epoch: number;
  rate: number;
  networkRate: null | number;
}

/**
 * EarningsPeriod is the staking rewards one validator generated over a
 * period of about a day: what reached the validator's own address
 * (commission plus rewards on its own stake) and what reached its
 * delegators, in ESP. Estimated periods come from block proposals, before
 * espressonodes started measuring reward balances.
 */
export interface EarningsPeriod {
  start: Date;
  end: Date;
  validator: number;
  delegators: number;
  estimated: boolean;
}

export interface EarningsAmounts {
  total: bigint;
  validator: bigint;
  delegators: bigint;
}

export interface EarningsWindow {
  /**
   * delegatorNetAPR is delegator rewards over delegator stake, annualized:
   * what delegators earned after commission.
   */
  delegatorNetAPR: null | number;
  /**
   * grossAPR is all rewards over all stake, annualized: before commission.
   */
  grossAPR: null | number;
}

export interface ValidatorEarnings {
  asOf: Date;
  lifetime: EarningsAmounts;
  last7Days: null | EarningsWindow;
  last30Days: null | EarningsWindow;
  /**
   * periods are in time order; estimated ones come first.
   */
  periods: EarningsPeriod[];
}

export interface DelegatorShare {
  address: `0x${string}`;
  amount: number;
}

export type ActivityKind = 'delegate' | 'undelegate';

export interface ActivityEntry {
  date: Date;
  kind: ActivityKind;
  delegator: `0x${string}`;
  amount: number;
  txHash: null | `0x${string}`;
}

export interface CommissionChange {
  date: Date;
  from: null | number;
  to: number;
  txHash: null | `0x${string}`;
  block?: number;
  logIndex?: number;
}

export interface DelegationBaseline {
  delegatedAt: Date;
  commission: null | number;
  block: number;
  logIndex: number;
}

/**
 * HistoryStatus describes where the history came from: sample data, a
 * loaded history file, no file for this validator, or a failed load.
 */
export type HistoryStatus = 'sample' | 'live' | 'missing' | 'error';

/**
 * HistorySource says whether a section's data is real ('live') or sample
 * data that has to be labelled as such in the UI.
 */
export type HistorySource = 'live' | 'sample';

export interface ValidatorHistorySources {
  stake: HistorySource;
  flows: HistorySource;
  epochs: HistorySource;
  delegators: HistorySource;
  activity: HistorySource;
  commission: HistorySource;
}

export interface ValidatorHistory {
  status: HistoryStatus;
  sources: ValidatorHistorySources;
  stake: StakePoint[];
  flows: StakeFlow[];
  epochs: EpochPerformance[];
  delegatorCount: number;
  topDelegators: DelegatorShare[];
  /**
   * delegatedTotal is the stake the delegator shares are measured against.
   */
  delegatedTotal: number;
  /**
   * delegatorsEpoch is the epoch the delegators are from, when they are live.
   */
  delegatorsEpoch: null | number;
  activity: ActivityEntry[];
  commissionChanges: CommissionChange[];
  /** Absent for older exports; an empty map means no wallets have stake. */
  delegationBaselines?: ReadonlyMap<string, DelegationBaseline>;
  registeredAt: null | Date;
  /**
   * exitedAt is when the validator exited the stake table, if it has.
   */
  exitedAt: null | Date;
  /**
   * networkMissedRates is the network's average missed slot rate for each
   * epoch, when known.
   */
  networkMissedRates: Map<number, number>;
  /**
   * lastEpochVote is the share of eligible blocks the validator voted on in
   * the last completed epoch, when known.
   */
  lastEpochVote: null | EpochVote;
  /**
   * nodeVersion is the version the node is running, as measured by
   * espressonodes, when known.
   */
  nodeVersion: null | string;
  /**
   * nodeVersionStatus says whether nodeVersion is the newest release for
   * the network, when known.
   */
  nodeVersionStatus: null | NodeVersionStatus;
  /**
   * delegatorAPR is the annualized return delegators actually earned over
   * the last 30 days, after commission, as measured by espressonodes.
   */
  delegatorAPR: null | number;
  /**
   * votes are the validator's per-epoch vote participation, in epoch order.
   */
  votes: EpochVotes[];
  /**
   * earnings are the staking rewards the validator generated, measured by
   * espressonodes, when known.
   */
  earnings: null | ValidatorEarnings;
  /**
   * msPerEpoch is the recent length of an epoch from the history file, when
   * it has one, so time labels don't wait for the block time to be measured.
   */
  msPerEpoch: null | number;
  /**
   * txExplorerURL is the block explorer URL that transaction hashes are
   * appended to, when known.
   */
  txExplorerURL: null | string;
}

export interface SampleHistoryInput {
  address: `0x${string}`;
  stake: number;
  commission: number;
  currentEpoch: number;
  now: Date;
}

/**
 * seededRandom returns a deterministic pseudo random generator seeded from
 * the given string, so a validator always renders the same sample history.
 */
function seededRandom(seedText: string): () => number {
  let seed = 2166136261;
  for (let i = 0; i < seedText.length; i++) {
    seed ^= seedText.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }
  seed = (seed >>> 0) % 2147483647 || 1;

  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function randomAddress(random: () => number): `0x${string}` {
  let hex = '';
  for (let i = 0; i < 40; i++) {
    hex += '0123456789abcdef'[Math.floor(random() * 16)];
  }
  return `0x${hex}`;
}

function sampleStake(
  random: () => number,
  input: SampleHistoryInput,
): StakePoint[] {
  const days = 90;
  const raw: number[] = [];
  let value = 1;
  const stepDay = Math.floor(days * (0.25 + random() * 0.3));
  const dropDay = Math.floor(days * (0.6 + random() * 0.25));
  for (let i = 0; i < days; i++) {
    if (i === stepDay) value *= 1 + random() * 0.08;
    if (i === dropDay) value *= 1 - random() * 0.03;
    value *= 1 + (random() - 0.4) * 0.002;
    raw.push(value);
  }

  const scale = input.stake / raw[raw.length - 1];
  return raw.map((v, i) => ({
    date: new Date(input.now.valueOf() - (days - 1 - i) * MS_PER_DAY),
    stake: v * scale,
  }));
}

function sampleEpochs(
  random: () => number,
  input: SampleHistoryInput,
): EpochPerformance[] {
  const count = 60;
  const result: EpochPerformance[] = [];
  for (let i = 0; i < count; i++) {
    const epoch = input.currentEpoch - (count - 1 - i);
    const slotsLed = 1600 + Math.round(random() * 220);
    const roll = random();
    let rate = 0;
    if (roll > 0.75) rate = random() * 0.004;
    if (roll > 0.95) rate = 0.01 + random() * 0.012;
    result.push({ epoch, slotsLed, slotsMissed: Math.round(slotsLed * rate) });
  }
  return result;
}

function sampleFlows(
  random: () => number,
  input: SampleHistoryInput,
): StakeFlow[] {
  const count = 30;
  const scale = input.stake * 0.002;
  const today = Math.floor(input.now.valueOf() / MS_PER_DAY);
  const result: StakeFlow[] = [];
  for (let i = 0; i < count; i++) {
    result.push({
      date: new Date((today - (count - 1 - i)) * MS_PER_DAY),
      delegated: random() > 0.35 ? random() * scale : 0,
      undelegated: random() > 0.6 ? random() * scale * 0.6 : 0,
    });
  }
  return result;
}

function sampleDelegators(
  random: () => number,
  input: SampleHistoryInput,
): { count: number; top: DelegatorShare[] } {
  const count = 40 + Math.floor(random() * 1400);
  const top: DelegatorShare[] = [];
  let remaining = input.stake;
  let share = 0.3 + random() * 0.3;
  for (let i = 0; i < 7 && remaining > 0; i++) {
    const amount = remaining * share;
    top.push({ address: randomAddress(random), amount });
    remaining -= amount;
    share = 0.15 + random() * 0.2;
  }
  return { count, top };
}

function sampleActivity(
  random: () => number,
  input: SampleHistoryInput,
): ActivityEntry[] {
  const result: ActivityEntry[] = [];
  let daysAgo = random() * 0.5;
  for (let i = 0; i < 12; i++) {
    const kind: ActivityKind = random() > 0.3 ? 'delegate' : 'undelegate';
    const magnitude = Math.pow(10, 2 + random() * 3.5);
    result.push({
      date: new Date(input.now.valueOf() - daysAgo * MS_PER_DAY),
      kind,
      delegator: randomAddress(random),
      amount: Math.round(magnitude * 100) / 100,
      txHash: null,
    });
    daysAgo += 0.4 + random() * 3.5;
  }
  return result;
}

function sampleCommission(
  random: () => number,
  input: SampleHistoryInput,
): CommissionChange[] {
  const registeredDaysAgo = 200 + Math.floor(random() * 60);
  const registered: CommissionChange = {
    date: new Date(input.now.valueOf() - registeredDaysAgo * MS_PER_DAY),
    from: null,
    to: input.commission,
    txHash: null,
  };

  if (random() > 0.5) {
    return [registered];
  }

  const changedDaysAgo = 40 + Math.floor(random() * 120);
  const previous = Math.min(1, input.commission + 0.01);
  return [
    {
      date: new Date(input.now.valueOf() - changedDaysAgo * MS_PER_DAY),
      from: previous,
      to: input.commission,
      txHash: null,
    },
    { ...registered, to: previous },
  ];
}

/**
 * sampleValidatorHistory produces a deterministic sample history for the
 * given validator.
 */
export function sampleValidatorHistory(
  input: SampleHistoryInput,
): ValidatorHistory {
  const random = seededRandom(input.address.toLowerCase());
  const delegators = sampleDelegators(random, input);

  return {
    status: 'sample',
    sources: {
      stake: 'sample',
      flows: 'sample',
      epochs: 'sample',
      delegators: 'sample',
      activity: 'sample',
      commission: 'sample',
    },
    stake: sampleStake(random, input),
    flows: sampleFlows(random, input),
    epochs: sampleEpochs(random, input),
    delegatorCount: delegators.count,
    topDelegators: delegators.top,
    delegatedTotal: input.stake,
    delegatorsEpoch: null,
    activity: sampleActivity(random, input),
    commissionChanges: sampleCommission(random, input),
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
    txExplorerURL: null,
  };
}
