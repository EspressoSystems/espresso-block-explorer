/**
 * A completer is a simple object that allows you to complete a Promise
 * external to the the Promise itself.
 */
export interface Completer<T> {
    readonly promise: Promise<T>;
    readonly isCompleted: boolean;
    /**
     * complete completes the promise with the given value.
     *
     * The value must either be a value of type `T` or a promise of type
     * `Promise<T>`.
     *
     * If the value is itself a Promise, the completer will wait for the promise
     * to complete, and completed with teh same result, whether it was a success
     * or an error.
     *
     * Calling `complete` or `completeError` must be done at most once.
     */
    complete(value: T | Promise<T>): void;
    /**
     * completesError completes teh promise with the given error.
     *
     * Calling `complete` or `completeError` must be done at most once.
     *
     * Completing a promise with an error indicates that an Error was thrown
     * while trying to produce a value.
     *
     * if `error` is a `Promise`, the promise itself is used as the error value.
     * If you want to complete a with the result of the promise, you can use
     * `complete` instead.
     */
    completeError(error: unknown): void;
}
/**
 * createCompleter will create a new Completer which will contain a Promise
 * that is able to be resolved / rejected externally.
 */
export declare function createCompleter<T>(): Completer<T>;
