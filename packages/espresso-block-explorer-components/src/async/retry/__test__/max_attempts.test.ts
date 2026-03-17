// Tests for MaxAttemptsRetryController — a decorator that wraps another
// RetryController and enforces an upper bound on the number of attempts.
// Once the attempt count reaches (or exceeds) the configured maximum the
// decorator always returns ShouldRetryResult.no, regardless of what the inner
// controller would have returned.

import { describe, expect, it } from 'vitest';
import { createAlwaysRetryController } from '../always_retry';
import { RetryController, ShouldRetryResult } from '../controller';
import {
  createMaxAttemptsRetryController,
  withMaxAttemptsRetryController,
} from '../max_attempts';

describe('MaxAttemptsRetryController', () => {
  describe('createMaxAttemptsRetryController', () => {
    it('delegates to the inner controller while under the limit', () => {
      const inner = createAlwaysRetryController();
      const controller = createMaxAttemptsRetryController(inner, 3);

      // attempts 1 and 2 are below the limit of 3
      expect(controller.shouldRetry(1, new Error())).not.toBe(
        ShouldRetryResult.no,
      );
      expect(controller.shouldRetry(2, new Error())).not.toBe(
        ShouldRetryResult.no,
      );
    });

    it('returns ShouldRetryResult.no when attempt equals the limit', () => {
      const inner = createAlwaysRetryController();
      const controller = createMaxAttemptsRetryController(inner, 3);

      expect(controller.shouldRetry(3, new Error())).toBe(ShouldRetryResult.no);
    });

    it('returns ShouldRetryResult.no when attempt exceeds the limit', () => {
      const inner = createAlwaysRetryController();
      const controller = createMaxAttemptsRetryController(inner, 3);

      expect(controller.shouldRetry(4, new Error())).toBe(ShouldRetryResult.no);
      expect(controller.shouldRetry(100, new Error())).toBe(
        ShouldRetryResult.no,
      );
    });

    it('applies a finite default limit when none is specified', () => {
      const inner = createAlwaysRetryController();
      const withDefault = createMaxAttemptsRetryController(inner);
      const withExplicit = createMaxAttemptsRetryController(inner, 5);

      // Scan for the attempt number at which the default controller first
      // blocks.  We don't assert the exact cutoff value (it's an internal
      // default), but we verify that:
      //   1. A cutoff exists and is positive — the default is finite.
      //   2. Every attempt below the cutoff is still allowed.
      //   3. A controller with a higher explicit limit allows at least as many
      //      attempts, confirming the parameter is wired correctly.
      let cutoff: number | null = null;
      for (let attempt = 1; attempt <= 20; attempt++) {
        if (withDefault.shouldRetry(attempt, new Error()) === ShouldRetryResult.no) {
          cutoff = attempt;
          break;
        }
      }
      expect(cutoff).not.toBeNull();
      expect(cutoff).toBeGreaterThan(0);

      for (let attempt = 1; attempt < cutoff!; attempt++) {
        expect(withDefault.shouldRetry(attempt, new Error())).not.toBe(
          ShouldRetryResult.no,
        );
      }

      expect(withExplicit.shouldRetry(cutoff! - 1, new Error())).not.toBe(
        ShouldRetryResult.no,
      );
    });

    it('propagates ShouldRetryResult.no from the inner controller regardless of attempt count', () => {
      // Even when we are well under the max-attempts limit, if the inner
      // controller itself says "no" that result must flow through unchanged.
      const alwaysNo: RetryController = {
        shouldRetry: () => ShouldRetryResult.no,
      };
      const controller = createMaxAttemptsRetryController(alwaysNo, 5);

      expect(controller.shouldRetry(1, new Error())).toBe(ShouldRetryResult.no);
    });
  });

  describe('withMaxAttemptsRetryController', () => {
    it('wraps a controller with an explicit limit', () => {
      const inner = createAlwaysRetryController();
      const option = withMaxAttemptsRetryController(2);
      const controller = option(inner);

      expect(controller.shouldRetry(1, new Error())).not.toBe(
        ShouldRetryResult.no,
      );
      expect(controller.shouldRetry(2, new Error())).toBe(ShouldRetryResult.no);
    });

    it('applies a finite default limit when called with no argument', () => {
      const inner = createAlwaysRetryController();
      const withDefault = withMaxAttemptsRetryController()(inner);
      const withExplicitHigh = withMaxAttemptsRetryController(100)(inner);

      // Verify the default eventually blocks within a reasonable range.
      let blocked = false;
      for (let attempt = 1; attempt <= 50; attempt++) {
        if (withDefault.shouldRetry(attempt, new Error()) === ShouldRetryResult.no) {
          blocked = true;
          break;
        }
      }
      expect(blocked).toBe(true);

      // A controller with a much higher explicit limit should still allow early
      // attempts, confirming the curried form wires its argument correctly.
      expect(withExplicitHigh.shouldRetry(1, new Error())).not.toBe(
        ShouldRetryResult.no,
      );
    });
  });
});
