import { describe, expect, it } from 'vitest';
import { earningsStatus } from '../participation';

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
