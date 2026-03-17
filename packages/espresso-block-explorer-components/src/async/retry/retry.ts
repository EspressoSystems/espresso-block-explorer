import { sleep } from '@/async/sleep';
import { RetryController, ShouldRetryResult } from './controller';

/**
 * retry will attempt to retry the async function given based on the critiera
 * of the `RetryController`.
 *
 * The penalty, delay, number of attempts, loggings, inspection, and anything
 * else is dictated and specified by the `RetryController`.
 */
export async function retry<T>(
  controller: RetryController,
  fn: () => Promise<T>,
): Promise<T> {
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (err) {
      attempt += 1;
      const shouldRetry = controller.shouldRetry(attempt, err);
      if (shouldRetry === ShouldRetryResult.no) {
        throw err;
      }

      await sleep(shouldRetry);
    }
  }
}
