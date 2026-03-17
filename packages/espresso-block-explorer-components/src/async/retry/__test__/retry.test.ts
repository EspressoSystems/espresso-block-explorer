// Tests for the core retry execution loop.
//
// `retry(controller, fn)` calls fn repeatedly until either:
//   a) fn resolves — the resolved value is returned, or
//   b) fn rejects and the controller returns ShouldRetryResult.no — the error
//      is re-thrown.
//
// Between each failed attempt the loop awaits `sleep(delay)` where delay is
// the value returned by the controller.  sleep is mocked out here so tests
// run without real timers.

import { describe, expect, it, vi } from 'vitest';
import { createAlwaysRetryController } from '../always_retry';
import { RetryController, ShouldRetry, ShouldRetryResult } from '../controller';
import { createMaxAttemptsRetryController } from '../max_attempts';
import { createNeverRetryController } from '../never_retry';
import { retry } from '../retry';

// Replace sleep with a no-op so tests run instantly without real timers.
vi.mock('@/async/sleep', () => ({
  sleep: vi.fn().mockResolvedValue(undefined),
}));

// Cast helper: 0 is a valid ShouldRetry value (retry immediately, no delay),
// but the branded Milliseconds<number> type rejects plain literals.
const noDelay = 0 as ShouldRetry;

describe('retry', () => {
  it('returns the fn result on the first successful attempt', async () => {
    const controller = createNeverRetryController();
    const fn = vi.fn().mockResolvedValue(42);

    await expect(retry(controller, fn)).resolves.toBe(42);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('re-throws immediately when fn fails and the controller returns ShouldRetryResult.no', async () => {
    const controller = createNeverRetryController();
    const err = new Error('fail');
    const fn = vi.fn().mockRejectedValue(err);

    await expect(retry(controller, fn)).rejects.toBe(err);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('keeps retrying fn until it succeeds', async () => {
    const controller = createAlwaysRetryController();
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error('first'))
      .mockRejectedValueOnce(new Error('second'))
      .mockResolvedValue('ok');

    await expect(retry(controller, fn)).resolves.toBe('ok');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('re-throws the last error once the controller exhausts its attempts', async () => {
    // MaxAttemptsRetryController(inner, 3) returns ShouldRetryResult.no on
    // attempt >= 3, so fn is called 3 times total before the error propagates.
    const controller = createMaxAttemptsRetryController(
      createAlwaysRetryController(),
      3,
    );
    const err = new Error('persistent');
    const fn = vi.fn().mockRejectedValue(err);

    await expect(retry(controller, fn)).rejects.toBe(err);
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('forwards each failure error to the controller', async () => {
    // Capture the errors passed to shouldRetry and allow two retries before
    // stopping so we can inspect both captured values.
    const errors: unknown[] = [];
    const controller: RetryController = {
      shouldRetry(_attempt, err) {
        errors.push(err);
        return errors.length < 3 ? noDelay : ShouldRetryResult.no;
      },
    };

    const e1 = new Error('one');
    const e2 = new Error('two');
    const fn = vi
      .fn()
      .mockRejectedValueOnce(e1)
      .mockRejectedValueOnce(e2)
      .mockResolvedValue('done');

    await retry(controller, fn);

    expect(errors).toEqual([e1, e2]);
  });

  it('passes an incrementing attempt count to the controller', async () => {
    // The attempt counter starts at 1 on the first failure and increments by
    // one for every subsequent failure.
    const attempts: number[] = [];
    const controller: RetryController = {
      shouldRetry(attempt) {
        attempts.push(attempt);
        return attempt < 3 ? noDelay : ShouldRetryResult.no;
      },
    };
    const fn = vi.fn().mockRejectedValue(new Error('x'));

    await expect(retry(controller, fn)).rejects.toThrow('x');

    expect(attempts).toEqual([1, 2, 3]);
  });

  it('awaits the sleep delay returned by the controller before retrying', async () => {
    // Verify that the delay value from the controller is forwarded to sleep
    // rather than discarded.
    const { sleep } = await import('@/async/sleep');
    vi.mocked(sleep).mockClear();

    const delayMs = 150 as ShouldRetry;
    const controller: RetryController = {
      shouldRetry(attempt) {
        return attempt < 2 ? delayMs : ShouldRetryResult.no;
      },
    };
    const fn = vi.fn().mockRejectedValue(new Error('x'));

    await expect(retry(controller, fn)).rejects.toThrow('x');

    expect(sleep).toHaveBeenCalledWith(150);
  });
});
