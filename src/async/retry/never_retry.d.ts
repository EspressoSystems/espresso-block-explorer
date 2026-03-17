import { RetryController } from './controller';
/**
 * createNeverRetryController will create a `RetryController` that indicates
 * that another attempt should **NEVER** be attempted.
 */
export declare function createNeverRetryController(): RetryController;
