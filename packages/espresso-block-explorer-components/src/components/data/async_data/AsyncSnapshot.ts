export enum AsyncState {
  none,
  waiting,
  active,
  done,
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
export abstract class AsyncSnapshot<T> {
  get asyncState(): AsyncState {
    return AsyncState.none;
  }

  get data(): undefined | T {
    return undefined;
  }

  get error(): undefined | unknown {
    return undefined;
  }

  get hasData(): boolean {
    return false;
  }

  get hasError(): boolean {
    return false;
  }

  /**
   * nothing creates an AsyncSnapshot with the "nothing" state. It is provided
   * for convenience but ultimately will likely not be utilized in a normal
   * asynchronous process.
   */
  public static nothing<T>() {
    return new AsyncSnapshotNothing<T>();
  }

  /**
   * waiting creates an AsyncSnapshot with the "waiting" state.  It is meant
   * to indicate the an Async process has begun, but has not yet resolved.
   */
  public static waiting<T>() {
    return new AsyncSnapshotWaiting<T>();
  }

  /**
   * withData creates an AsyncSnapshot with the given state and data.  This
   * will primarily be used with the states "done" indicating that no more
   * data updates will follow, or "active" indicating that there may be more
   * data updates.
   */
  public static withData<T>(asyncState: AsyncState, data: T) {
    return new AsyncSnapshotData(asyncState, data);
  }

  /**
   * withError creates an AsyncSnapshot with the given state and error.  This
   * will primarily be used with the states "done" indicating that no more
   * updates will follow, or "active" indicating that there may be more updates.
   * In this case it's most likely that any errors would prevent further
   * updates.
   */
  public static withError(asyncState: AsyncState, error: unknown) {
    return new AsyncSnapshotError(asyncState, error);
  }
}

/**
 * AsyncSnapshotNothing represents a non-state of an AsyncSnapshot.  It is
 * provided for convenience, but ultimately should not be used.
 */
class AsyncSnapshotNothing<T> extends AsyncSnapshot<T> {}

/**
 * AsyncSnapshotWaiting represents the waiting state of an AsyncSnapshot. It
 * indicates that the async process has not yet yielded any data.
 */
class AsyncSnapshotWaiting<T> extends AsyncSnapshot<T> {
  get asyncState(): AsyncState {
    return AsyncState.waiting;
  }
}

/**
 * AsyncSnapshotError represents an AsyncSnapshot with an error populated.  It
 * indicates that an error has occurred, and that we do not have data.
 */
class AsyncSnapshotError<T> extends AsyncSnapshot<T> {
  private readonly _connectionState: AsyncState;
  private readonly _error: unknown;

  public get asyncState(): AsyncState {
    return this._connectionState;
  }

  public get error(): undefined | unknown {
    return this._error;
  }

  constructor(connectionState: AsyncState, error: unknown) {
    super();
    this._connectionState = connectionState;
    this._error = error;
  }

  get hasError(): boolean {
    return true;
  }
}

/**
 * AsyncSnapshotData represents an AsyncSnapshot with data populated. It
 * indicates that we have data from the Async process, and that we do not
 * currently have an error.
 */
class AsyncSnapshotData<T> extends AsyncSnapshot<T> {
  private readonly _connectionState: AsyncState;
  private readonly _data: T;

  public get asyncState(): AsyncState {
    return this._connectionState;
  }

  public get data(): undefined | T {
    return this._data;
  }

  constructor(connectionState: AsyncState, data: T) {
    super();
    this._connectionState = connectionState;
    this._data = data;
  }

  get hasData(): boolean {
    return true;
  }
}
