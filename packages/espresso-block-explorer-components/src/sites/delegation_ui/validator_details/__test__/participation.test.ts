import { describe, expect, it } from 'vitest';
import { earningsStatus, voteVerdict } from '../participation';
import { EpochVotes } from '../sample_history';

/**
 * votes builds ascending epochs from vote rates, with a 70% network.
 */
function votes(rates: number[], network = 0.7): EpochVotes[] {
  return rates.map((rate, i) => ({ epoch: i + 1, rate, networkRate: network }));
}

describe('voteVerdict', () => {
  it('compares the recent average with the network', () => {
    expect(voteVerdict(votes([0.7, 0.7, 0.8, 0.8]), 2)).toMatchObject({
      kind: 'voting',
      status: 'clean',
      rate: 0.8,
      before: 0.7,
    });
    expect(voteVerdict(votes([0.72, 0.68]), 2)?.status).toBe('good');
    expect(voteVerdict(votes([0.5, 0.5]), 2)?.status).toBe('fair');
  });

  it('calls a run of near-zero epochs not voting', () => {
    const verdict = voteVerdict(votes([0.9, 0.9, 0.009, 0.0, 0.01]), 2);
    expect(verdict).toMatchObject({
      kind: 'not-voting',
      status: 'poor',
      epochs: 3,
    });
    expect(verdict?.kind === 'not-voting' && verdict.lastVoted?.epoch).toBe(2);
  });

  it('keeps voting when only the latest epoch is near zero', () => {
    expect(voteVerdict(votes([0.9, 0.9, 0.0]), 2)?.kind).toBe('voting');
  });

  it('grades without a network average as near it', () => {
    expect(
      voteVerdict(votes([0.4, 0.4], null as unknown as number), 2),
    ).toMatchObject({
      kind: 'voting',
      status: 'good',
    });
    expect(voteVerdict([], 2)).toBeNull();
  });
});

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
