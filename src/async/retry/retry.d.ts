import { RetryController } from './controller';
/**
 * retry will attempt to retry the async function given based on the critiera
 * of the `RetryController`.
 *
 * The penalty, delay, number of attempts, loggings, inspection, and anything
 * else is dictated and specified by the `RetryController`.
 */
export declare function retry<T>(controller: RetryController, fn: () => Promise<T>): Promise<T>;
