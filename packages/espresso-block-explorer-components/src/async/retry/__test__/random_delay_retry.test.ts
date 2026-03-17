// Tests for RandomDelayRetryController — a decorator that adds a random jitter
// in the range [0, maxDelay) on top of whatever the inner controller returns.
// Jitter prevents multiple clients from thundering-herding into the same retry
// window.  If the inner controller returns ShouldRetryResult.no the decorator
// passes that through unchanged.

import { describe, expect, it, vi } from 'vitest';
import { createAlwaysRetryController } from '../always_retry';
import { ShouldRetryResult } from '../controller';
import { createNeverRetryController } from '../never_retry';
import {
  createRandomDelayRetryController,
  withRandomDelayRetryController,
} from '../random_delay_retry';

// The Milliseconds<number> brand resolves to `never` for generic `number`, so
// numeric literals must be cast at call sites.
/* eslint-disable @typescript-eslint/no-explicit-any */
const maxDelay100 = 100 as any;
/* eslint-enable @typescript-eslint/no-explicit-any */

describe('RandomDelayRetryController', () => {
  describe('createRandomDelayRetryController', () => {
    it('passes ShouldRetryResult.no from the inner controller through unchanged', () => {
      const inner = createNeverRetryController();
      const controller = createRandomDelayRetryController(inner, maxDelay100);

      expect(controller.shouldRetry(1, new Error())).toBe(ShouldRetryResult.no);
    });

    it('returns a non-blocking value within [0, maxDelay)', () => {
      const inner = createAlwaysRetryController();
      const controller = createRandomDelayRetryController(inner, maxDelay100);

      // Sample several times to increase confidence that the bounds hold.
      for (let i = 0; i < 20; i++) {
        const result = controller.shouldRetry(1, new Error());
        expect(result).not.toBe(ShouldRetryResult.no);
        expect(result as number).toBeGreaterThanOrEqual(0);
        expect(result as number).toBeLessThan(100);
      }
    });

    it('adds the jitter on top of the inner result', () => {
      // Pin Math.random so the jitter contribution is deterministic:
      // floor(0.5 * maxDelay100) = 50.
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const inner = createAlwaysRetryController();
      const controller = createRandomDelayRetryController(inner, maxDelay100);

      const base = inner.shouldRetry(1, new Error()) as number;
      expect(controller.shouldRetry(1, new Error())).toBe(base + 50);

      vi.restoreAllMocks();
    });

    it('adds zero jitter when Math.random returns 0', () => {
      // floor(0 * maxDelay) = 0, so the result should equal the inner delay.
      vi.spyOn(Math, 'random').mockReturnValue(0);
      const inner = createAlwaysRetryController();
      const controller = createRandomDelayRetryController(inner, maxDelay100);

      const base = inner.shouldRetry(1, new Error()) as number;
      expect(controller.shouldRetry(1, new Error())).toBe(base);

      vi.restoreAllMocks();
    });

    it('adds a non-blocking amount of jitter when using the default maxDelay', () => {
      // We do not assert the exact default value (it is internal and subject
      // to change).  We verify only that the default produces a non-blocking
      // result that is at least as large as a known smaller explicit maxDelay,
      // confirming the default is a meaningful positive value.
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const inner = createAlwaysRetryController();
      const withDefault = createRandomDelayRetryController(inner);
      const withSmall = createRandomDelayRetryController(inner, maxDelay100);

      const defaultResult = withDefault.shouldRetry(1, new Error()) as number;
      const smallResult = withSmall.shouldRetry(1, new Error()) as number;

      expect(defaultResult).not.toBe(ShouldRetryResult.no);
      expect(defaultResult).toBeGreaterThanOrEqual(smallResult);

      vi.restoreAllMocks();
    });
  });

  describe('withRandomDelayRetryController', () => {
    it('wraps a controller with the given maxDelay', () => {
      // Pin Math.random for a deterministic result: floor(0.5 * 100) = 50.
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const inner = createAlwaysRetryController();
      const controller = withRandomDelayRetryController(maxDelay100)(inner);

      const base = inner.shouldRetry(1, new Error()) as number;
      expect(controller.shouldRetry(1, new Error())).toBe(base + 50);

      vi.restoreAllMocks();
    });

    it('produces a non-blocking result when called with no argument', () => {
      const inner = createAlwaysRetryController();
      const controller = withRandomDelayRetryController()(inner);

      expect(controller.shouldRetry(1, new Error())).not.toBe(
        ShouldRetryResult.no,
      );
    });
  });
});
