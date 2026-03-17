// Tests for LinearBackOffRetryController — a decorator that adds a linearly
// growing delay penalty on top of whatever the inner controller returns.  The
// extra penalty is `min(attempt * delayPenalty, maxPenalty)`, capped so that
// delays do not grow unboundedly.  If the inner controller returns
// ShouldRetryResult.no the decorator passes that through unchanged.

import { describe, expect, it } from 'vitest';
import { createAlwaysRetryController } from '../always_retry';
import { RetryController, ShouldRetry, ShouldRetryResult } from '../controller';
import {
  createLinearBackOffRetryController,
  withLinearBackOffRetryController,
} from '../linear_back_off';
import { createNeverRetryController } from '../never_retry';

// The Milliseconds<number> brand resolves to `never` for generic `number`, so
// numeric literals must be cast at call sites, mirroring the source file's own
// use of `as Milliseconds<number>`.
/* eslint-disable @typescript-eslint/no-explicit-any */
const penalty100 = 100 as any;
const penalty500 = 500 as any;
const penalty2000 = 2000 as any;
/* eslint-enable @typescript-eslint/no-explicit-any */

describe('LinearBackOffRetryController', () => {
  describe('createLinearBackOffRetryController', () => {
    it('adds attempt * delayPenalty to the inner result', () => {
      // All parameters are supplied explicitly, so the computed totals are
      // safe to assert: base + min(attempt * penalty, max).
      const inner = createAlwaysRetryController();
      const controller = createLinearBackOffRetryController(
        inner,
        penalty100,
        penalty2000,
      );

      const base = inner.shouldRetry(1, new Error()) as number;
      expect(controller.shouldRetry(1, new Error())).toBe(base + 100);
      expect(controller.shouldRetry(2, new Error())).toBe(base + 200);
    });

    it('caps the added penalty at maxPenalty', () => {
      const inner = createAlwaysRetryController();
      const controller = createLinearBackOffRetryController(
        inner,
        penalty100,
        penalty500,
      );

      const base = inner.shouldRetry(1, new Error()) as number;
      // attempt=6 → min(6*100, 500) = 500 (capped)
      expect(controller.shouldRetry(6, new Error())).toBe(base + 500);
      // attempt=10 → still capped at 500
      expect(controller.shouldRetry(10, new Error())).toBe(base + 500);
    });

    it('adds the penalty on top of a non-zero inner delay', () => {
      // Verify that the decorator accumulates with the inner result rather than
      // replacing it.
      const baseDelay = 50 as ShouldRetry;
      const inner: RetryController = {
        shouldRetry: () => baseDelay,
      };
      const controller = createLinearBackOffRetryController(
        inner,
        penalty100,
        penalty2000,
      );

      expect(controller.shouldRetry(1, new Error())).toBe(
        (baseDelay as number) + 100,
      );
    });

    it('passes ShouldRetryResult.no from the inner controller through unchanged', () => {
      // The decorator must not convert a "no retry" signal into a delay.
      const inner = createNeverRetryController();
      const controller = createLinearBackOffRetryController(
        inner,
        penalty100,
        penalty2000,
      );

      expect(controller.shouldRetry(1, new Error())).toBe(ShouldRetryResult.no);
    });

    it('produces strictly increasing delays as attempt grows (up to the cap)', () => {
      const inner = createAlwaysRetryController();
      const controller = createLinearBackOffRetryController(
        inner,
        penalty100,
        penalty500,
      );

      const d1 = controller.shouldRetry(1, new Error()) as number;
      const d2 = controller.shouldRetry(2, new Error()) as number;
      const d3 = controller.shouldRetry(3, new Error()) as number;

      expect(d2).toBeGreaterThan(d1);
      expect(d3).toBeGreaterThan(d2);
    });

    it('adds a positive non-blocking delay when using the default penalty', () => {
      // We do not assert the exact default values (they are internal and
      // subject to change).  We verify only that the default produces a
      // meaningful positive delay, and that a higher explicit penalty produces
      // an equal or greater result at the same attempt.
      const inner = createAlwaysRetryController();
      const withDefault = createLinearBackOffRetryController(inner);
      const withHighPenalty = createLinearBackOffRetryController(
        inner,
        penalty2000,
        penalty2000,
      );

      const defaultResult = withDefault.shouldRetry(1, new Error()) as number;
      expect(defaultResult).toBeGreaterThan(0);
      expect(defaultResult).not.toBe(ShouldRetryResult.no);

      const highResult = withHighPenalty.shouldRetry(1, new Error()) as number;
      expect(highResult).toBeGreaterThanOrEqual(defaultResult);
    });
  });

  describe('withLinearBackOffRetryController', () => {
    it('wraps a controller with the given penalties', () => {
      const inner = createAlwaysRetryController();
      const option = withLinearBackOffRetryController(penalty100, penalty500);
      const controller = option(inner);

      const base = inner.shouldRetry(1, new Error()) as number;
      expect(controller.shouldRetry(1, new Error())).toBe(base + 100);
      expect(controller.shouldRetry(6, new Error())).toBe(base + 500);
    });

    it('adds a positive non-blocking delay when called with no arguments', () => {
      const inner = createAlwaysRetryController();
      const controller = withLinearBackOffRetryController()(inner);

      const result = controller.shouldRetry(1, new Error());
      expect(result).not.toBe(ShouldRetryResult.no);
      expect(result as number).toBeGreaterThan(0);
    });
  });
});
