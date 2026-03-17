import { RetryController } from './controller';
/**
 * createLogRetryController takes a `RetryController` and will log all retry
 * queries for it utilizing the given logger.
 */
export declare function createLogRetryController(controller: RetryController, logger: typeof console.log): RetryController;
export declare function withLogRetryController(logger: typeof console.log): (controller: RetryController) => RetryController;
