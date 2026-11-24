import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { STRIP_EPOCHS } from '../reliability';
import { ReliabilityOverview } from '../reliability_view';
import { sampleValidatorHistory, ValidatorHistory } from '../sample_history';
import { ValidatorHistoryContext } from '../validator_details_contexts';

const DECAF_EPOCH = 32 * 60 * 1000;

/**
 * decafHistory has 96 32-minute epochs (two days, like decaf) with a miss in
 * `missedEpochs` and 10 slots led in each.
 */
function decafHistory(missedEpochs: number[]): ValidatorHistory {
  const base = sampleValidatorHistory({
    address: `0x${'aa'.repeat(20)}`,
    stake: 1000,
    commission: 0.05,
    currentEpoch: 96,
    now: new Date('2026-11-02T00:00:00Z'),
  });
  return {
    ...base,
    epochs: Array.from({ length: 96 }, (_, i) => ({
      epoch: i + 1,
      slotsLed: 10,
      slotsMissed: missedEpochs.includes(i + 1) ? 1 : 0,
    })),
    msPerEpoch: DECAF_EPOCH,
  };
}

function renderOverview(history: ValidatorHistory) {
  render(
    <ValidatorHistoryContext.Provider value={history}>
      <ReliabilityOverview history={history} />
    </ValidatorHistoryContext.Provider>,
  );
}

afterEach(cleanup);

describe('ReliabilityOverview', () => {
  it('headlines the same epochs the strip shows', () => {
    // Epoch 10 is outside the strip's latest 30 epochs, epoch 90 inside.
    renderOverview(decafHistory([10, 90]));
    expect(screen.getByText('15h ago')).toBeTruthy();
    expect(
      screen.getByText(
        `Missed 1 of ${STRIP_EPOCHS * 10} slots in the past 15 hours`,
      ),
    ).toBeTruthy();
  });

  it('ignores misses before the strip', () => {
    renderOverview(decafHistory([10]));
    expect(
      screen.getByText('No missed slots in the past 15 hours'),
    ).toBeTruthy();
  });
});
