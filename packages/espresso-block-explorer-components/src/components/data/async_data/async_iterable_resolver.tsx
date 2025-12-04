import React from 'react';
import { AsyncSnapshot, AsyncState } from './async_snapshot';
import { AsyncSnapshotContext } from './async_snapshot_context';
import ProvideAsyncStates from './provide_async_states';

/**
 * AsyncIterableResolverProps represents the props that can be passed to the
 * AsyncIterableResolver.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface AsyncIterableResolverProps<T, R = any, N = any> {
  asyncIterable: AsyncIterable<T, R, N>;
  next?: N;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * AsyncIterableResolverState represents the internal state of the AsyncIterableResolver.
 */
interface AsyncIterableResolverState<T> {
  asyncIterable: AsyncIterable<T>;
  inFlightPromise: null | Promise<IteratorResult<T>>;
  state: AsyncSnapshot<T>;
}

/**
 * AsyncIterableResolver is a component that resolves an AsyncIterable into a series of AsyncSnapshots.
 * This component is useful for consuming an AsyncIterable in a React component.
 */
const AsyncIterableResolver: React.FC<AsyncIterableResolverProps<unknown>> = (
  props,
) => {
  const asyncIterable = props.asyncIterable;
  const next = props.next;
  const [state, setState] = React.useState<AsyncIterableResolverState<unknown>>(
    {
      asyncIterable,
      inFlightPromise: null,
      state: AsyncSnapshot.waiting(),
    },
  );

  const snapshot = state.state;
  React.useEffect(() => {
    let setTheState = setState;

    if (state.asyncIterable !== asyncIterable) {
      setTheState({
        asyncIterable,
        inFlightPromise: null,
        state: AsyncSnapshot.waiting(),
      });

      return;
    }

    const asyncIterator = asyncIterable[Symbol.asyncIterator]();
    const processSuccess = (data: IteratorResult<unknown>) => {
      if (data.done) {
        setTheState({
          asyncIterable,
          inFlightPromise: null,
          state: AsyncSnapshot.withData(AsyncState.done, snapshot.data),
        });
        return;
      }

      setTheState({
        asyncIterable,
        inFlightPromise: null,
        state: AsyncSnapshot.withData(AsyncState.active, data.value),
      });
    };

    const processFailure = (error: unknown) => {
      setTheState({
        asyncIterable,
        inFlightPromise: null,
        state: AsyncSnapshot.withError(AsyncState.done, error),
      });
    };

    if (state.inFlightPromise !== null) {
      // We're still waiting for this promise.
      state.inFlightPromise.then(processSuccess, processFailure);
      return;
    }

    if (snapshot.asyncState === AsyncState.done) {
      return;
    }

    // We declare a function to allow us to change the function when the
    // component becomes unmounted.  This allows us to not call setState
    // needlessly.
    if (
      snapshot.asyncState === AsyncState.waiting ||
      snapshot.asyncState === AsyncState.active
    ) {
      const promise = asyncIterator.next(next);
      setTheState({
        asyncIterable,
        inFlightPromise: promise,
        state: snapshot,
      });
    }

    return () => {
      // Can we cancel the inflight promise?  Not really, the best we can do
      // is rebind the setTheState function to a no-op, so it doesn't update
      // the current state / doesn't consume the current state.
      setTheState = () => {};
    };
  }, [
    asyncIterable,
    snapshot,
    snapshot.asyncState,
    snapshot.data,
    state.inFlightPromise,
    state.asyncIterable,
    next,
  ]);

  return (
    <AsyncSnapshotContext.Provider value={snapshot}>
      <ProvideAsyncStates>{props.children}</ProvideAsyncStates>
    </AsyncSnapshotContext.Provider>
  );
};

export default AsyncIterableResolver;
