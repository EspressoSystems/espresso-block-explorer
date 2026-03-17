import { RetryController } from './controller';
/**
 * createMaxAttemptsRetryController takes a `RetryController` and a maximum
 * number of attempts, and will return a `RetryController` that will instruct
 * not to retry after the max attempts has been reached.
 */
export declare function createMaxAttemptsRetryController(controller: RetryController, maxAttempts?: number): RetryController;
export declare function withMaxAttemptsRetryController(maxAttempts?: number): (controller: RetryController) => RetryController;
