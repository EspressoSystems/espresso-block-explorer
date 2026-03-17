import { RetryController } from './controller';
/**
 * ErrorInspection represents a function that will inspect the underlying
 * error and return whether the the error indicates whether a reattempt is
 * warrented or not.
 */
type ErrorInspection = (error: unknown) => boolean;
/**
 * createErrorBasedRetryController will create a `RetryController` that will
 * indicate that an attempt should be retried based on the result of an
 * error inspection.
 */
export declare function createErrorBasedRetryController(controller: RetryController, inspect: ErrorInspection): RetryController;
export declare function withErrorBasedRetryController(inspect: ErrorInspection): (controller: RetryController) => RetryController;
export {};
