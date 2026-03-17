// Tests for LogRetryController — a decorator that calls a logger function on
// every shouldRetry invocation before delegating to the inner controller.  The
// purpose is observability: callers can wire in any console.log-compatible
// function to trace retry activity without coupling the retry logic to a
// specific logging library.

import { describe, expect, it, vi } from 'vitest';
import { createAlwaysRetryController } from '../always_retry';
import { ShouldRetryResult } from '../controller';
import { createLogRetryController, withLogRetryController } from '../log_retry';
import { createNeverRetryController } from '../never_retry';

describe('LogRetryController', () => {
  describe('createLogRetryController', () => {
    it('calls the logger once per shouldRetry invocation', () => {
      const logger = vi.fn();
      const inner = createAlwaysRetryController();
      const controller = createLogRetryController(inner, logger);

      controller.shouldRetry(2, new Error('boom'));

      expect(logger).toHaveBeenCalledOnce();
    });

    it('delegates to the inner controller and returns its result', () => {
      const logger = vi.fn();
      const inner = createAlwaysRetryController();
      const controller = createLogRetryController(inner, logger);

      expect(controller.shouldRetry(1, new Error())).not.toBe(
        ShouldRetryResult.no,
      );
    });

    it('returns ShouldRetryResult.no when the inner controller returns no', () => {
      const logger = vi.fn();
      const inner = createNeverRetryController();
      const controller = createLogRetryController(inner, logger);

      expect(controller.shouldRetry(1, new Error())).toBe(ShouldRetryResult.no);
    });

    it('calls the logger on every invocation', () => {
      const logger = vi.fn();
      const inner = createAlwaysRetryController();
      const controller = createLogRetryController(inner, logger);

      controller.shouldRetry(1, new Error());
      controller.shouldRetry(2, new Error());
      controller.shouldRetry(3, new Error());

      expect(logger).toHaveBeenCalledTimes(3);
    });
  });

  describe('withLogRetryController', () => {
    it('wraps a controller with the given logger', () => {
      const logger = vi.fn();
      const inner = createAlwaysRetryController();
      const controller = withLogRetryController(logger)(inner);

      const result = controller.shouldRetry(1, new Error('test'));

      expect(result).not.toBe(ShouldRetryResult.no);
      expect(logger).toHaveBeenCalledOnce();
    });
  });
});
