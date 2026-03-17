// Tests for the core retry controller primitives:
//   - ShouldRetryResult enum (the "don't retry" sentinel)
//   - createRetryController, which composes a base controller with zero or
//     more decorator options into a single RetryController

import { describe, expect, it } from 'vitest';
import {
  RetryController,
  ShouldRetry,
  ShouldRetryResult,
  createRetryController,
} from '../controller';

describe('ShouldRetryResult', () => {
  // ShouldRetryResult.no is the single hard-coded sentinel value used throughout
  // the retry system to signal "do not retry".  Its numeric value is part of the
  // public contract (callers compare against it directly), so we pin it here.
  it('no is -1', () => {
    expect(ShouldRetryResult.no).toBe(-1);
  });
});

describe('createRetryController', () => {
  it('returns the base controller unchanged when no options are given', () => {
    const base: RetryController = {
      shouldRetry: () => ShouldRetryResult.no,
    };

    const result = createRetryController(base);
    expect(result.shouldRetry(1, new Error())).toBe(ShouldRetryResult.no);
  });

  it('applies a single option so it wraps the base controller', () => {
    const base: RetryController = {
      shouldRetry: () => 0 as ShouldRetry,
    };

    const calls: string[] = [];
    const option = (controller: RetryController): RetryController => ({
      shouldRetry(attempt, err) {
        calls.push('option');
        return controller.shouldRetry(attempt, err);
      },
    });

    const result = createRetryController(base, option);
    result.shouldRetry(1, new Error());

    expect(calls).toEqual(['option']);
  });

  it('applies options left-to-right, producing outermost-last wrapping', () => {
    // Options are applied in order A then B, meaning B ends up as the outermost
    // wrapper.  Call order when shouldRetry fires is therefore B → A → base.
    const order: string[] = [];

    const base: RetryController = {
      shouldRetry: () => {
        order.push('base');
        return 0 as ShouldRetry;
      },
    };

    const optionA = (controller: RetryController): RetryController => ({
      shouldRetry(attempt, err) {
        order.push('A');
        return controller.shouldRetry(attempt, err);
      },
    });

    const optionB = (controller: RetryController): RetryController => ({
      shouldRetry(attempt, err) {
        order.push('B');
        return controller.shouldRetry(attempt, err);
      },
    });

    createRetryController(base, optionA, optionB).shouldRetry(1, new Error());

    expect(order).toEqual(['B', 'A', 'base']);
  });

  it('passes attempt and error to the base controller unchanged', () => {
    const receivedArgs: [number, unknown][] = [];
    const err = new Error('test');

    const base: RetryController = {
      shouldRetry(attempt, error) {
        receivedArgs.push([attempt, error]);
        return ShouldRetryResult.no;
      },
    };

    createRetryController(base).shouldRetry(5, err);

    expect(receivedArgs).toEqual([[5, err]]);
  });
});
