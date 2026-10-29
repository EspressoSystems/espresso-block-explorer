import { describe, expect, it } from 'vitest';
import {
  cleanStreak,
  compareWithNetwork,
  EpochDuration,
  lastEpochMissedRate,
  reliabilityStatus,
  reliabilityVerdict,
  summarizeWindow,
} from '../reliability';
import { EpochPerformance } from '../sample_history';

const HOUR = 60 * 60 * 1000;

/**
 * epochs builds ascending epochs from a list of missed slot counts, each
 * leading 100 slots.
 */
function epochs(missed: number[], first = 1): EpochPerformance[] {
  return missed.map((slotsMissed, i) => ({
    epoch: first + i,
    slotsLed: 100,
    slotsMissed,
  }));
}

const noNetwork = new Map<number, number>();

describe('reliabilityStatus', () => {
  it('grades a low network average (mainnet-like)', () => {
    const network = 0.0005;
    expect(reliabilityStatus(0, network)).toBe('clean');
    expect(reliabilityStatus(0.0002, network)).toBe('good');
    expect(reliabilityStatus(0.0004, network)).toBe('fair');
    expect(reliabilityStatus(0.01, network)).toBe('fair');
    expect(reliabilityStatus(0.0101, network)).toBe('poor');
  });

  it('grades a high network average (decaf-like)', () => {
    const network = 0.012;
    expect(reliabilityStatus(0.006, network)).toBe('good');
    expect(reliabilityStatus(0.011, network)).toBe('fair');
    expect(reliabilityStatus(0.012, network)).toBe('fair');
    expect(reliabilityStatus(0.013, network)).toBe('poor');
  });

  it('never grades as good without a network average', () => {
    expect(reliabilityStatus(0.0001, null)).toBe('fair');
    expect(reliabilityStatus(0.02, null)).toBe('poor');
  });
});

describe('summarizeWindow', () => {
  it('totals slots and averages the network rate over known epochs', () => {
    const network = new Map([
      [1, 0.01],
      [2, 0.03],
    ]);
    const summary = summarizeWindow(epochs([0, 2, 0]), network);
    expect(summary).toMatchObject({ epochs: 3, slots: 300, missed: 2 });
    expect(summary.rate).toBeCloseTo(2 / 300);
    expect(summary.networkRate).toBeCloseTo(0.02);
  });
});

describe('cleanStreak', () => {
  it('counts the latest epochs without misses', () => {
    expect(cleanStreak(epochs([1, 0, 0, 0]))).toBe(3);
    expect(cleanStreak(epochs([0, 0, 1]))).toBe(0);
    expect(cleanStreak([])).toBe(0);
  });
});

describe('reliabilityVerdict', () => {
  it('reports a clean streak and what came before it', () => {
    const verdict = reliabilityVerdict(
      epochs([5, 3, ...Array(20).fill(0)]),
      noNetwork,
      10,
    );
    expect(verdict).toMatchObject({ kind: 'clean', cleanEpochs: 20 });
    expect(verdict?.kind === 'clean' && verdict.before?.missed).toBe(8);
  });

  it('calls out a single rough epoch rather than averaging it away', () => {
    const verdict = reliabilityVerdict(
      epochs([...Array(20).fill(0), 48, 0, 0, 0]),
      noNetwork,
      10,
    );
    expect(verdict).toMatchObject({
      kind: 'spike',
      epochsAgo: 3,
      cleanEpochs: 3,
    });
    expect(verdict?.kind === 'spike' && verdict.epoch.slotsMissed).toBe(48);
  });

  it('reports ongoing misses with the trend against the days before', () => {
    const verdict = reliabilityVerdict(
      epochs([...Array(20).fill(0), 3, 2, 4, 0, 3, 5, 2, 4, 3, 2]),
      noNetwork,
      10,
    );
    expect(verdict).toMatchObject({ kind: 'ongoing', epochsWithMisses: 9 });
    expect(verdict?.kind === 'ongoing' && verdict.before?.missed).toBe(0);
  });

  it('has nothing to say without epochs', () => {
    expect(reliabilityVerdict([], noNetwork, 10)).toBeNull();
  });
});

describe('reliabilityVerdict window', () => {
  it('only counts the latest epochs in the window', () => {
    // A miss 5 epochs ago is outside a 4-epoch (about 24 hours) window.
    const history = epochs([...Array(10).fill(0), 3, 0, 0, 0, 0]);
    expect(reliabilityVerdict(history, noNetwork, 4)?.kind).toBe('clean');
    expect(reliabilityVerdict(history, noNetwork, 6)?.kind).toBe('spike');
  });
});

describe('EpochDuration', () => {
  it('describes spans and ages in hours or days', () => {
    const mainnet = new EpochDuration(5.5 * HOUR);
    expect(mainnet.span(10)).toBe('2 days');
    expect(mainnet.span(4)).toBe('22 hours');
    expect(mainnet.ago(0)).toBe('now');
    expect(mainnet.ago(3)).toBe('17h ago');
    expect(mainnet.ago(30)).toBe('7d ago');
  });

  it('uses minutes for short epochs', () => {
    const shortEpochs = new EpochDuration(25 * 60 * 1000);
    expect(shortEpochs.span(1)).toBe('25 minutes');
    expect(shortEpochs.ago(1)).toBe('25m ago');
  });

  it('converts hours to whole epochs', () => {
    expect(new EpochDuration(5.5 * HOUR).epochsIn(24, 10)).toBe(4);
    expect(new EpochDuration(25 * 60 * 1000).epochsIn(24, 10)).toBe(58);
    expect(new EpochDuration(48 * HOUR).epochsIn(24, 10)).toBe(1);
    expect(new EpochDuration(0).epochsIn(24, 10)).toBe(10);
  });

  it('falls back to epochs when the epoch length is unknown', () => {
    const unknown = new EpochDuration(0);
    expect(unknown.span(10)).toBe('10 epochs');
    expect(unknown.ago(1)).toBe('1 epoch ago');
  });
});

describe('lastEpochMissedRate', () => {
  it('is the latest epoch’s missed share', () => {
    expect(lastEpochMissedRate(epochs([5, 0, 2]))).toBe(0.02);
    expect(lastEpochMissedRate([])).toBeNull();
  });
});

describe('compareWithNetwork', () => {
  it('says above, below, or at the network average', () => {
    expect(compareWithNetwork(0.003, 0.002)).toBe('above');
    expect(compareWithNetwork(0.0003, 0.002)).toBe('below');
    expect(compareWithNetwork(0, 0.002)).toBe('below');
    expect(compareWithNetwork(0.00205, 0.002)).toBe('at');
  });
});
