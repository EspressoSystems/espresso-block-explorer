import { ReliabilityStatus } from './reliability';
import { EarningsWindow } from './sample_history';

/**
 * The earnings verdict. It is graded against the network rather than fixed
 * thresholds, and reuses the reliability status steps (and colors), with
 * its own labels.
 */

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

/**
 * MAX_APR_OVER_NETWORK bounds a measured APR to a multiple of the network
 * APR. Rewards follow stake, so a validator can't earn much more than the
 * network rate; the room above it is for small validators, whose few leader
 * slots make a month's rewards uneven.
 */
export const MAX_APR_OVER_NETWORK = 1.5;

/**
 * plausibleAPR says whether an APR read from a history file is one a
 * validator could have earned: not negative, and not far above the network
 * APR from the staking API. Without the network APR nothing can be checked,
 * so nothing passes. This keeps a wrong or tampered file from putting an
 * arbitrary rate on the page.
 */
export function plausibleAPR(
  apr: null | number,
  networkAPR: null | number,
): apr is number {
  return (
    apr !== null &&
    networkAPR !== null &&
    networkAPR > 0 &&
    apr >= 0 &&
    apr <= networkAPR * MAX_APR_OVER_NETWORK
  );
}

/**
 * commissionRaisedSince says whether the validator raised its commission
 * after the given time.
 */
export function commissionRaisedSince(
  changes: { date: Date; from: null | number; to: number }[],
  since: Date,
): boolean {
  return changes.some(
    (change) =>
      change.from !== null &&
      change.to > change.from &&
      change.date.valueOf() > since.valueOf(),
  );
}

/**
 * DelegatorAPR is the APR shown for a validator and where it comes from:
 * measured from its delegators' rewards over the last 30 days, or estimated
 * from the network APR and the validator's commission.
 */
export interface DelegatorAPR {
  rate: number;
  measured: boolean;
}

export const MEASURED_APR_LABEL = 'Delegator APR (last 30 days)';
export const ESTIMATED_APR_LABEL = 'Est. APR after commission';
export const MEASURED_APR_NOTE =
  'What delegators of this validator earned over the last 30 days, after commission, annualized. Measured by espressonodes.com.';
export const ESTIMATED_APR_NOTE =
  "The network's APR less this validator's commission. It assumes the validator performs like the network average.";

/**
 * delegatorAPRToShow picks the APR to show for a validator.
 *
 * The measured rate is preferred, because it is the only one that reflects
 * how this validator performs: the estimate is the same for every validator
 * with the same commission, even one that earns nothing. The measured rate
 * is only used when it is plausible, and it looks back: when the validator
 * raised its commission inside the measured window, new delegators can't
 * expect more than the estimate at today's commission, so the lower of the
 * two is shown.
 */
export function delegatorAPRToShow(input: {
  measured: null | number;
  networkAPR: null | number;
  commission: number;
  commissionRaised: boolean;
}): null | DelegatorAPR {
  const { measured, networkAPR, commission, commissionRaised } = input;
  const estimate = networkAPR === null ? null : networkAPR * (1 - commission);
  const estimated =
    estimate === null ? null : { rate: estimate, measured: false };

  if (!plausibleAPR(measured, networkAPR)) {
    return estimated;
  }
  if (commissionRaised && estimate !== null && estimate < measured) {
    return estimated;
  }
  return { rate: measured, measured: true };
}
