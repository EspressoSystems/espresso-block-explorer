import { RetryController } from './controller';
/**
 * createAlwaysRetryController will return a `RetryController` that will
 * return that an attempt should **ALWAYS** be retried with no delay.
 */
export declare function createAlwaysRetryController(): RetryController;
