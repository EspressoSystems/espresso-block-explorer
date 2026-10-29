import { ReliabilityStatus } from './reliability';
import { EarningsWindow, EpochVotes } from './sample_history';

/**
 * Verdicts for vote participation and earnings. Both are graded against the
 * network rather than fixed thresholds, and reuse the reliability status
 * steps (and colors), with their own labels.
 */

/**
 * NOT_VOTING is the vote rate under which an epoch counts as not voting.
 * Even the network averages about 70% (votes after quorum aren't recorded),
 * so a few percent is a node that has effectively stopped voting.
 */
export const NOT_VOTING = 0.05;

/**
 * VOTE_MARGIN is how far from the network average, in points, still counts
 * as near it.
 */
const VOTE_MARGIN = 0.05;

export const VOTE_STATUS_LABEL: Record<ReliabilityStatus, string> = {
  clean: 'Above network',
  good: 'Near network',
  fair: 'Below network',
  poor: 'Not voting',
};

export type VoteVerdict =
  | {
      kind: 'not-voting';
      status: ReliabilityStatus;
      /** epochs is the number of latest epochs under NOT_VOTING. */
      epochs: number;
      /** lastVoted is the latest epoch at or above NOT_VOTING, if any. */
      lastVoted: null | EpochVotes;
      networkRate: null | number;
    }
  | {
      kind: 'voting';
      status: ReliabilityStatus;
      rate: number;
      networkRate: null | number;
      /** before is the average over the TREND_PERIODS periods before. */
      before: null | number;
    };

const TREND_PERIODS = 6;

function average(values: number[]): null | number {
  return values.length > 0
    ? values.reduce((sum, v) => sum + v, 0) / values.length
    : null;
}

/**
 * voteVerdict describes the validator's vote participation over the latest
 * `recentCount` epochs. `votes` must be in ascending epoch order.
 */
export function voteVerdict(
  votes: EpochVotes[],
  recentCount: number,
): null | VoteVerdict {
  if (votes.length === 0) {
    return null;
  }

  const count = Math.max(1, recentCount);
  const recent = votes.slice(-count);
  const networkRate = average(
    recent
      .map((v) => v.networkRate)
      .filter((rate): rate is number => rate !== null),
  );

  let notVoting = 0;
  while (
    notVoting < votes.length &&
    votes[votes.length - 1 - notVoting].rate < NOT_VOTING
  ) {
    notVoting++;
  }
  if (notVoting >= Math.min(count, votes.length)) {
    return {
      kind: 'not-voting',
      status: 'poor',
      epochs: notVoting,
      lastVoted:
        notVoting < votes.length ? votes[votes.length - 1 - notVoting] : null,
      networkRate,
    };
  }

  const rate = average(recent.map((v) => v.rate)) as number;
  const before = average(
    votes
      .slice(Math.max(0, votes.length - count * (TREND_PERIODS + 1)), -count)
      .map((v) => v.rate),
  );
  let status: ReliabilityStatus = 'good';
  if (networkRate !== null) {
    if (rate >= networkRate + VOTE_MARGIN) {
      status = 'clean';
    } else if (rate < networkRate - VOTE_MARGIN) {
      status = 'fair';
    }
  }
  return { kind: 'voting', status, rate, networkRate, before };
}

export const EARNINGS_STATUS_LABEL: Record<ReliabilityStatus, string> = {
  clean: 'Above network',
  good: 'At network rate',
  fair: 'Below network',
  poor: 'Not earning',
};

/**
 * earningsStatus grades the validator's rewards over the last 7 days,
 * before commission, against the network APR (which is also before
 * commission): within 5% of it is at the network rate.
 */
export function earningsStatus(
  last7Days: null | EarningsWindow,
  networkAPR: null | number,
): null | ReliabilityStatus {
  const gross = last7Days?.grossAPR ?? null;
  if (gross === null) {
    return null;
  }
  if (gross < 0.002) {
    return 'poor';
  }
  if (networkAPR === null || networkAPR <= 0) {
    return null;
  }
  if (gross >= networkAPR * 1.05) {
    return 'clean';
  }
  if (gross >= networkAPR * 0.95) {
    return 'good';
  }
  return 'fair';
}
