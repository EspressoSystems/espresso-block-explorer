import { describe, expect, it } from 'vitest';
import { commissionIncreaseSinceDelegation } from '../commission_warning';
import {
  ActivityEntry,
  CommissionChange,
  DelegationBaseline,
} from '../sample_history';

const WALLET: `0x${string}` = '0x00000000000000000000000000000000000000aa';
const OTHER: `0x${string}` = '0x00000000000000000000000000000000000000bb';
const day = (d: string) => new Date(`2026-${d}T00:00:00Z`);
const delegated = (date: string, delegator = WALLET): ActivityEntry => ({
  date: day(date),
  kind: 'delegate',
  delegator,
  amount: 1,
  txHash: null,
});

describe('commission warnings from delegation baselines', () => {
  const baseline: DelegationBaseline = {
    delegatedAt: day('01-02'),
    commission: 0.05,
    block: 2,
    logIndex: 0,
  };
  const raised = { ...change('10-20', 0.05, 0.1), block: 3, logIndex: 0 };
  const baselines = new Map([[WALLET, baseline]]);

  it('warns when the delegation is older than the activity window', () => {
    expect(
      commissionIncreaseSinceDelegation([], [raised], WALLET, 0.1, baselines),
    ).toEqual({
      from: 0.05,
      to: 0.1,
      changedAt: day('10-20'),
      delegatedAt: day('01-02'),
    });
    expect(
      commissionIncreaseSinceDelegation(
        [],
        [raised],
        WALLET.toUpperCase() as `0x${string}`,
        0.1,
        baselines,
      ),
    ).not.toBeNull();
  });

  it('treats a present baseline map as authoritative, including removed wallets', () => {
    expect(
      commissionIncreaseSinceDelegation(
        [delegated('09-03')],
        [raised, registered],
        WALLET,
        0.1,
        new Map(),
      ),
    ).toBeNull();
    expect(
      commissionIncreaseSinceDelegation([], [raised], OTHER, 0.1, baselines),
    ).toBeNull();
  });

  it('does not guess an unknown commission or warn after accepting the new rate', () => {
    for (const commission of [null, 0.1, 0.15]) {
      const accepted = new Map([[WALLET, { ...baseline, commission }]]);
      expect(
        commissionIncreaseSinceDelegation([], [raised], WALLET, 0.1, accepted),
      ).toBeNull();
    }
  });

  it('orders a delegation and commission changes in the same block by log index', () => {
    const sameBlock = new Map([
      [
        WALLET,
        { ...baseline, delegatedAt: day('10-20'), block: 3, logIndex: 1 },
      ],
    ]);
    const after = { ...raised, logIndex: 2 };
    expect(
      commissionIncreaseSinceDelegation([], [after], WALLET, 0.1, sameBlock),
    ).not.toBeNull();
    expect(
      commissionIncreaseSinceDelegation([], [raised], WALLET, 0.1, sameBlock),
    ).toBeNull();
  });

  it('dates a partial decrease at the event setting the current rate', () => {
    const lowered = { ...change('10-25', 0.1, 0.06), block: 4, logIndex: 0 };
    expect(
      commissionIncreaseSinceDelegation(
        [],
        [lowered, raised],
        WALLET,
        0.06,
        baselines,
      )?.changedAt,
    ).toEqual(day('10-25'));
    expect(
      commissionIncreaseSinceDelegation(
        [],
        [lowered, raised],
        WALLET,
        0.05,
        baselines,
      ),
    ).toBeNull();
  });

  it('waits for history to catch up to a newer current commission', () => {
    expect(
      commissionIncreaseSinceDelegation([], [raised], WALLET, 0.2, baselines),
    ).toBeNull();
  });
});
const change = (
  date: string,
  from: null | number,
  to: number,
): CommissionChange => ({ date: day(date), from, to, txHash: null });
const registered = change('01-01', null, 0.05);

describe('commissionIncreaseSinceDelegation', () => {
  it('flags an increase after the latest delegation', () => {
    expect(
      commissionIncreaseSinceDelegation(
        [delegated('09-03')],
        [change('10-20', 0.05, 0.1), registered],
        WALLET,
        0.1,
      ),
    ).toEqual({
      from: 0.05,
      to: 0.1,
      changedAt: day('10-20'),
      delegatedAt: day('09-03'),
    });
  });

  it('ignores increases the wallet accepted by delegating again', () => {
    expect(
      commissionIncreaseSinceDelegation(
        [delegated('11-01'), delegated('09-03')],
        [change('10-20', 0.05, 0.1), registered],
        WALLET,
        0.1,
      ),
    ).toBeNull();
  });

  it('ignores decreases and increases that were taken back', () => {
    expect(
      commissionIncreaseSinceDelegation(
        [delegated('09-03')],
        [change('10-20', 0.05, 0.03), registered],
        WALLET,
        0.03,
      ),
    ).toBeNull();
    expect(
      commissionIncreaseSinceDelegation(
        [delegated('09-03')],
        [change('10-25', 0.1, 0.05), change('10-20', 0.05, 0.1), registered],
        WALLET,
        0.05,
      ),
    ).toBeNull();
  });

  it('dates the warning at the change that set the current rate', () => {
    expect(
      commissionIncreaseSinceDelegation(
        [delegated('09-03')],
        [change('10-25', 0.1, 0.06), change('10-20', 0.05, 0.1), registered],
        WALLET,
        0.06,
      ),
    ).toEqual({
      from: 0.05,
      to: 0.06,
      changedAt: day('10-25'),
      delegatedAt: day('09-03'),
    });
  });

  it('only looks at the given wallet', () => {
    expect(
      commissionIncreaseSinceDelegation(
        [delegated('09-03', OTHER)],
        [change('10-20', 0.05, 0.1), registered],
        WALLET,
        0.1,
      ),
    ).toBeNull();
  });

  it('uses the first later change when the delegation predates the history', () => {
    expect(
      commissionIncreaseSinceDelegation(
        [delegated('01-01')],
        [change('10-20', 0.05, 0.1)],
        WALLET,
        0.1,
      )?.from,
    ).toBe(0.05);
  });
});
