export declare enum AsyncState {
    none = 0,
    waiting = 1,
    active = 2,
    done = 3
}
/**
 * AsyncSnapshot represents a snapshot within an Asynchronous process.  This
 * snapshot can be used to represent the async processes for Promise or
 * AsyncIterators / AsyncIterables.
 *
 * AsyncSnapshot is a base class that more definitive states will represent.
 * AsyncSnapshot cannot be built directly itself, but it does have several
 * static functions that act as constructors to the various different
 * representations with the relevant arguments populated.
 */
export declare abstract class AsyncSnapshot<T> {
    get asyncState(): AsyncState;
    get data(): undefined | T;
    get error(): undefined | unknown;
    get hasData(): boolean;
    get hasError(): boolean;
    /**
     * nothing creates an AsyncSnapshot with the "nothing" state. It is provided
     * for convenience but ultimately will likely not be utilized in a normal
     * asynchronous process.
     */
    static nothing<T>(): AsyncSnapshotNothing<T>;
    /**
     * waiting creates an AsyncSnapshot with the "waiting" state.  It is meant
     * to indicate the an Async process has begun, but has not yet resolved.
     */
    static waiting<T>(): AsyncSnapshotWaiting<T>;
    /**
     * withData creates an AsyncSnapshot with the given state and data.  This
     * will primarily be used with the states "done" indicating that no more
     * data updates will follow, or "active" indicating that there may be more
     * data updates.
     */
    static withData<T>(asyncState: AsyncState, data: T): AsyncSnapshotData<T>;
    /**
     * withError creates an AsyncSnapshot with the given state and error.  This
     * will primarily be used with the states "done" indicating that no more
     * updates will follow, or "active" indicating that there may be more updates.
     * In this case it's most likely that any errors would prevent further
     * updates.
     */
    static withError<T>(asyncState: AsyncState, error: unknown): AsyncSnapshotError<T>;
}
/**
 * AsyncSnapshotNothing represents a non-state of an AsyncSnapshot.  It is
 * provided for convenience, but ultimately should not be used.
 */
declare class AsyncSnapshotNothing<T> extends AsyncSnapshot<T> {
}
/**
 * AsyncSnapshotWaiting represents the waiting state of an AsyncSnapshot. It
 * indicates that the async process has not yet yielded any data.
 */
declare class AsyncSnapshotWaiting<T> extends AsyncSnapshot<T> {
    get asyncState(): AsyncState;
}
/**
 * AsyncSnapshotError represents an AsyncSnapshot with an error populated.  It
 * indicates that an error has occurred, and that we do not have data.
 */
declare class AsyncSnapshotError<T> extends AsyncSnapshot<T> {
    private readonly _connectionState;
    private readonly _error;
    get asyncState(): AsyncState;
    get error(): undefined | unknown;
    constructor(connectionState: AsyncState, error: unknown);
    get hasError(): boolean;
}
/**
 * AsyncSnapshotData represents an AsyncSnapshot with data populated. It
 * indicates that we have data from the Async process, and that we do not
 * currently have an error.
 */
declare class AsyncSnapshotData<T> extends AsyncSnapshot<T> {
    private readonly _connectionState;
    private readonly _data;
    get asyncState(): AsyncState;
    get data(): undefined | T;
    constructor(connectionState: AsyncState, data: T);
    get hasData(): boolean;
}
export {};
