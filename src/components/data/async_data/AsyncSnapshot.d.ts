export declare enum ConnectionState {
    none = 0,
    waiting = 1,
    active = 2,
    done = 3
}
export interface AsyncSnapshotInterface<T> {
    readonly connectionState: ConnectionState;
    readonly data: undefined | T;
    readonly error: undefined | unknown;
    readonly hasData: boolean;
    readonly hasError: boolean;
}
export declare abstract class AsyncSnapshot<T> implements AsyncSnapshotInterface<T> {
    get connectionState(): ConnectionState;
    get data(): undefined | T;
    get error(): undefined | unknown;
    get hasData(): boolean;
    get hasError(): boolean;
    static nothing<T>(): AsyncSnapshotNothing<T>;
    static waiting<T>(): AsyncSnapshotWaiting<T>;
    static withData<T>(connectionState: ConnectionState, data: T): AsyncSnapshotData<T>;
    static withError(connectionState: ConnectionState, error: unknown): AsyncSnapshotError<unknown>;
}
declare class AsyncSnapshotNothing<T> extends AsyncSnapshot<T> {
}
declare class AsyncSnapshotWaiting<T> extends AsyncSnapshot<T> {
    get connectionState(): ConnectionState;
}
declare class AsyncSnapshotError<T> extends AsyncSnapshot<T> {
    private readonly _connectionState;
    private readonly _error;
    get connectionState(): ConnectionState;
    get error(): undefined | unknown;
    constructor(connectionState: ConnectionState, error: unknown);
    get hasError(): boolean;
}
declare class AsyncSnapshotData<T> extends AsyncSnapshot<T> {
    private readonly _connectionState;
    private readonly _data;
    get connectionState(): ConnectionState;
    get data(): undefined | T;
    constructor(connectionState: ConnectionState, data: T);
    get hasData(): boolean;
}
export {};
