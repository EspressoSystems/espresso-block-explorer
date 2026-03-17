// Tests for AlwaysRetryController — a base RetryController that unconditionally
// signals "retry" (i.e. never returns ShouldRetryResult.no) with a fixed delay
// of zero.  It is the simplest possible inner controller and is used throughout
// the other tests as a stand-in for "inner always permits retrying".

import { describe, expect, it } from 'vitest';
import { createAlwaysRetryController } from '../always_retry';
import { ShouldRetryResult } from '../controller';

describe('AlwaysRetryController', () => {
  it('never returns ShouldRetryResult.no', () => {
    const controller = createAlwaysRetryController();
    expect(controller.shouldRetry(1, new Error())).not.toBe(
      ShouldRetryResult.no,
    );
  });

  it('returns the same result regardless of attempt number', () => {
    // AlwaysRetryController is stateless with respect to attempt count — the
    // delay it signals should be identical no matter how many attempts have
    // already been made.
    const controller = createAlwaysRetryController();
    const results = [1, 2, 10, 100].map((attempt) =>
      controller.shouldRetry(attempt, new Error()),
    );
    expect(new Set(results).size).toBe(1);
  });

  it('returns the same result regardless of error type', () => {
    // AlwaysRetryController does not inspect the error; the delay it signals
    // must be identical regardless of what was thrown.
    const controller = createAlwaysRetryController();
    const results = [
      controller.shouldRetry(1, new TypeError('type')),
      controller.shouldRetry(1, 'string error'),
      controller.shouldRetry(1, null),
      controller.shouldRetry(1, undefined),
    ];
    expect(new Set(results).size).toBe(1);
  });
});
