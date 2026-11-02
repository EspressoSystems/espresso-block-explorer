import {
  ActivityEntry,
  CommissionChange,
  DelegationBaseline,
} from './sample_history';

export interface CommissionIncrease {
  /** from is the commission when the wallet last delegated. */
  from: number;
  /** to is the commission now. */
  to: number;
  /** changedAt is when the commission reached its current rate. */
  changedAt: Date;
  /** delegatedAt is when the wallet last delegated to the validator. */
  delegatedAt: Date;
}

/**
 * commissionIncreaseSinceDelegation says whether a validator raised its
 * commission after the wallet last delegated to it, so the wallet earns
 * less than it signed up for. Delegating again after an increase accepts
 * the new rate, so only increases since the latest delegation count, and
 * only while the commission is still above the rate at that time.
 */
export function commissionIncreaseSinceDelegation(
  activity: ActivityEntry[],
  changes: CommissionChange[],
  wallet: `0x${string}`,
  currentCommission: number,
  baselines?: ReadonlyMap<string, DelegationBaseline>,
): null | CommissionIncrease {
  const account = wallet.toLowerCase();
  if (baselines !== undefined) {
    const baseline = baselines.get(account);
    if (
      !baseline ||
      baseline.commission === null ||
      currentCommission <= baseline.commission
    ) {
      return null;
    }
    // The retained commission events supply the date. Chain positions matter:
    // delegating and changing commission can happen within the same block.
    const after = changes
      .filter(
        (change) =>
          change.block !== undefined &&
          change.logIndex !== undefined &&
          (change.block > baseline.block ||
            (change.block === baseline.block &&
              change.logIndex > baseline.logIndex)),
      )
      .sort((a, b) => a.block! - b.block! || a.logIndex! - b.logIndex!);
    const latest = after[after.length - 1];
    // The staking API can be ahead of the export. Don't attach an older
    // change's date to a newer rate; wait for matching history.
    if (
      !latest ||
      Math.round(latest.to * 10_000) !== Math.round(currentCommission * 10_000)
    ) {
      return null;
    }
    return {
      from: baseline.commission,
      to: currentCommission,
      changedAt: latest.date,
      delegatedAt: baseline.delegatedAt,
    };
  }

  // Compatibility with exports published before delegation baselines.
  const delegatedAt = activity
    .filter(
      (entry) =>
        entry.kind === 'delegate' && entry.delegator.toLowerCase() === account,
    )
    .reduce<null | Date>(
      (latest, entry) =>
        !latest || entry.date.valueOf() > latest.valueOf()
          ? entry.date
          : latest,
      null,
    );
  if (!delegatedAt) {
    return null;
  }

  const ordered = [...changes].sort(
    (a, b) => a.date.valueOf() - b.date.valueOf(),
  );
  const before = ordered.filter(
    (change) => change.date.valueOf() <= delegatedAt.valueOf(),
  );
  const after = ordered.filter(
    (change) => change.date.valueOf() > delegatedAt.valueOf(),
  );
  // The rate in force when the wallet delegated: the last change before it,
  // or else what the first later change moved away from.
  const from =
    before.length > 0
      ? before[before.length - 1].to
      : (after.find((change) => change.from !== null)?.from ?? null);
  const increases = after.filter(
    (change) => change.from !== null && change.to > change.from,
  );
  if (from === null || increases.length === 0 || currentCommission <= from) {
    return null;
  }

  // The current rate came from the last change, which may be a partial
  // decrease after an increase; the date must match the rate shown.
  return {
    from,
    to: currentCommission,
    changedAt: after[after.length - 1].date,
    delegatedAt,
  };
}
