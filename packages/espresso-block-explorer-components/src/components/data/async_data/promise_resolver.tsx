import React from 'react';
import { AsyncSnapshot, AsyncState } from './AsyncSnapshot';
import { AsyncSnapshotContext } from './AsyncSnapshotContext';
import ProvideAsyncStates from './ProvideAsyncStates';

export interface PromiseBuilderProps<T> {
  promise: Promise<T>;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * PromiseResolverState represents the internal state of the PromiseBuilder.
 */
interface PromiseResolverState<T> {
  promise: Promise<T>;
  state: AsyncSnapshot<T>;
}

/**
 * PromiseResolver converts the given promise into distinct AsyncSnapshot
 * states and passes it to the given children components via the
 * AsyncSnapshotContext React Context.  It also automatically expands the
 * data in the AsyncSnapshot to the Data, Loading, and Error contexts using
 * the ProvideAsyncStates component.  As such, any descendant component will
 * have access to what is needed via the AsyncSnapshotContext, LoadingContext,
 * DataContext, or ErrorContext contexts.
 */
const PromiseResolver: React.FC<PromiseBuilderProps<unknown>> = (props) => {
  const promise = props.promise;
  const [state, setState] = React.useState<PromiseResolverState<unknown>>({
    promise,
    state: AsyncSnapshot.waiting(),
  });

  const snapshot = state.state;
  React.useEffect(() => {
    // We declare a function to allow us to change the function when the
    // component becomes unmounted.  This allows us to not call setState
    // needlessly.
    let setTheState = setState;
    if (snapshot.asyncState == AsyncState.waiting) {
      promise.then(
        (data) => {
          setTheState({
            promise,
            state: AsyncSnapshot.withData(AsyncState.done, data),
          });
        },
        (error) => {
          setTheState({
            promise,
            state: AsyncSnapshot.withError(AsyncState.done, error),
          });
        },
      );
    }

    if (state.promise !== promise) {
      setTheState({
        promise,
        state: AsyncSnapshot.waiting(),
      });
    }

    return () => {
      setTheState = () => {};
    };
  }, [promise, snapshot.asyncState, state.promise]);

  return (
    <AsyncSnapshotContext.Provider value={snapshot}>
      <ProvideAsyncStates>{props.children}</ProvideAsyncStates>
    </AsyncSnapshotContext.Provider>
  );
};

export default PromiseResolver;
