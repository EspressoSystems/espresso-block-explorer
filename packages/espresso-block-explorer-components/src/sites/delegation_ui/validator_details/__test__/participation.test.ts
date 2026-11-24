import { describe, expect, it } from 'vitest';
import {
  commissionRaisedSince,
  delegatorAPRToShow,
  earningsStatus,
  plausibleAPR,
} from '../participation';

describe('earningsStatus', () => {
  const window = (grossAPR: null | number) => ({
    delegatorNetAPR: null,
    grossAPR,
  });

  it('grades the gross APR against the network APR', () => {
    expect(earningsStatus(window(0.0415), 0.0391)).toBe('clean');
    expect(earningsStatus(window(0.0385), 0.0391)).toBe('good');
    expect(earningsStatus(window(0.03), 0.0391)).toBe('fair');
    expect(earningsStatus(window(0.0001), 0.0391)).toBe('poor');
  });

  it('has no status without data', () => {
    expect(earningsStatus(null, 0.0391)).toBeNull();
    expect(earningsStatus(window(null), 0.0391)).toBeNull();
    expect(earningsStatus(window(0.039), null)).toBeNull();
  });
});

describe('plausibleAPR', () => {
  it('accepts rates up to one and a half times the network APR', () => {
    expect(plausibleAPR(0, 0.04)).toBe(true);
    expect(plausibleAPR(0.0355, 0.04)).toBe(true);
    expect(plausibleAPR(0.06, 0.04)).toBe(true);
  });

  it('rejects rates no validator could have earned', () => {
    expect(plausibleAPR(2.5, 0.04)).toBe(false);
    expect(plausibleAPR(0.0601, 0.04)).toBe(false);
    expect(plausibleAPR(-0.01, 0.04)).toBe(false);
    expect(plausibleAPR(Number.NaN, 0.04)).toBe(false);
  });

  it('accepts nothing it cannot check against the network', () => {
    expect(plausibleAPR(0.0355, null)).toBe(false);
    expect(plausibleAPR(0.0355, 0)).toBe(false);
    expect(plausibleAPR(null, 0.04)).toBe(false);
  });
});

describe('commissionRaisedSince', () => {
  const since = new Date('2026-10-12T00:00:00Z');
  const change = (date: string, from: null | number, to: number) => ({
    date: new Date(date),
    from,
    to,
  });

  it('finds an increase after the given time', () => {
    expect(
      commissionRaisedSince([change('2026-11-01T00:00:00Z', 0.05, 0.5)], since),
    ).toBe(true);
  });

  it('ignores older increases, decreases, and the registration', () => {
    expect(
      commissionRaisedSince(
        [
          change('2026-09-01T00:00:00Z', 0.05, 0.5),
          change('2026-11-01T00:00:00Z', 0.5, 0.1),
          change('2026-11-02T00:00:00Z', null, 0.1),
        ],
        since,
      ),
    ).toBe(false);
  });
});

describe('delegatorAPRToShow', () => {
  const base = {
    measured: 0.0355,
    networkAPR: 0.0391,
    commission: 0.1,
    commissionRaised: false,
  };
  const estimate = 0.0391 * 0.9;

  it('prefers the measured rate, which reflects the validator itself', () => {
    expect(delegatorAPRToShow(base)).toEqual({ rate: 0.0355, measured: true });
  });

  it('shows a validator that earned nothing as earning nothing', () => {
    expect(delegatorAPRToShow({ ...base, measured: 0 })).toEqual({
      rate: 0,
      measured: true,
    });
  });

  it('falls back to the estimate without a measured rate', () => {
    expect(delegatorAPRToShow({ ...base, measured: null })).toEqual({
      rate: estimate,
      measured: false,
    });
  });

  it('never shows an implausible measured rate', () => {
    expect(delegatorAPRToShow({ ...base, measured: 2.5 })).toEqual({
      rate: estimate,
      measured: false,
    });
    expect(delegatorAPRToShow({ ...base, measured: -1 })).toEqual({
      rate: estimate,
      measured: false,
    });
  });

  it('shows nothing when the network APR is unknown', () => {
    expect(delegatorAPRToShow({ ...base, networkAPR: null })).toBeNull();
    expect(
      delegatorAPRToShow({ ...base, measured: 2.5, networkAPR: null }),
    ).toBeNull();
  });

  it('caps the measured rate by the estimate after a commission increase', () => {
    // Measured at the old 10% commission; now 50%.
    expect(
      delegatorAPRToShow({ ...base, commission: 0.5, commissionRaised: true }),
    ).toEqual({ rate: 0.0391 * 0.5, measured: false });
    // A validator that earned less than the estimate keeps its measured rate.
    expect(
      delegatorAPRToShow({ ...base, measured: 0.001, commissionRaised: true }),
    ).toEqual({ rate: 0.001, measured: true });
  });
});
