// Tests for ErrorBasedRetryController — a decorator that gates retries on the
// result of a caller-supplied inspection function.  If the inspect function
// returns false for a given error the decorator overrides the inner controller's
// decision and returns ShouldRetryResult.no.  This allows callers to suppress
// retries for non-retryable error classes (e.g. a 404 that will never recover).

import { describe, expect, it } from 'vitest';
import { createAlwaysRetryController } from '../always_retry';
import { ShouldRetryResult } from '../controller';
import {
  createErrorBasedRetryController,
  withErrorBasedRetryController,
} from '../error_based_retry';
import { createNeverRetryController } from '../never_retry';

describe('ErrorBasedRetryController', () => {
  describe('createErrorBasedRetryController', () => {
    it('allows retry when inspect returns true', () => {
      const inner = createAlwaysRetryController();
      const controller = createErrorBasedRetryController(inner, () => true);

      expect(controller.shouldRetry(1, new Error())).not.toBe(
        ShouldRetryResult.no,
      );
    });

    it('blocks retry when inspect returns false', () => {
      const inner = createAlwaysRetryController();
      const controller = createErrorBasedRetryController(inner, () => false);

      expect(controller.shouldRetry(1, new Error())).toBe(ShouldRetryResult.no);
    });

    it('passes the thrown error to the inspect function', () => {
      const received: unknown[] = [];
      const inner = createAlwaysRetryController();
      const controller = createErrorBasedRetryController(inner, (err) => {
        received.push(err);
        return true;
      });

      const err = new TypeError('specific');
      controller.shouldRetry(1, err);

      expect(received).toEqual([err]);
    });

    it('does not invoke inspect when the inner controller already returns ShouldRetryResult.no', () => {
      // inspect is an additional gate; if the inner controller has already
      // decided "no retry" there is no point paying the cost of inspecting.
      let inspectCalled = false;
      const inner = createNeverRetryController();
      const controller = createErrorBasedRetryController(inner, () => {
        inspectCalled = true;
        return true;
      });

      expect(controller.shouldRetry(1, new Error())).toBe(ShouldRetryResult.no);
      expect(inspectCalled).toBe(false);
    });

    it('blocks retry for errors that fail the inspect predicate even when the inner controller allows it', () => {
      const inner = createAlwaysRetryController();
      const controller = createErrorBasedRetryController(
        inner,
        (err) => err instanceof RangeError,
      );

      expect(controller.shouldRetry(1, new TypeError())).toBe(
        ShouldRetryResult.no,
      );
      expect(controller.shouldRetry(1, new RangeError())).not.toBe(
        ShouldRetryResult.no,
      );
    });
  });

  describe('withErrorBasedRetryController', () => {
    it('wraps a controller with the given inspect function', () => {
      const inner = createAlwaysRetryController();
      const controller = withErrorBasedRetryController(() => true)(inner);

      expect(controller.shouldRetry(1, new Error())).not.toBe(
        ShouldRetryResult.no,
      );
    });

    it('blocks retry via the curried form when inspect returns false', () => {
      const inner = createAlwaysRetryController();
      const controller = withErrorBasedRetryController(() => false)(inner);

      expect(controller.shouldRetry(1, new Error())).toBe(ShouldRetryResult.no);
    });
  });
});
