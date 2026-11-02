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
