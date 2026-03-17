// Tests for NeverRetryController — a base RetryController that unconditionally
// signals "do not retry" (always returns ShouldRetryResult.no).  It is useful
// as a terminal inner controller in compositions where some outer decorator
// should be the sole arbiter of whether a retry is allowed.

import { describe, expect, it } from 'vitest';
import { ShouldRetryResult } from '../controller';
import { createNeverRetryController } from '../never_retry';

describe('NeverRetryController', () => {
  it('always returns ShouldRetryResult.no', () => {
    const controller = createNeverRetryController();
    expect(controller.shouldRetry(1, new Error())).toBe(ShouldRetryResult.no);
  });

  it('returns ShouldRetryResult.no regardless of attempt number', () => {
    const controller = createNeverRetryController();
    for (const attempt of [1, 2, 10, 100]) {
      expect(controller.shouldRetry(attempt, new Error())).toBe(
        ShouldRetryResult.no,
      );
    }
  });

  it('returns ShouldRetryResult.no regardless of error type', () => {
    const controller = createNeverRetryController();
    expect(controller.shouldRetry(1, new TypeError())).toBe(
      ShouldRetryResult.no,
    );
    expect(controller.shouldRetry(1, 'a string error')).toBe(
      ShouldRetryResult.no,
    );
    expect(controller.shouldRetry(1, null)).toBe(ShouldRetryResult.no);
  });
});
