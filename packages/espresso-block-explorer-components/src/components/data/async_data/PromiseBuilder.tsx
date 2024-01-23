import React from 'react';
import { AsyncSnapshot } from './AsyncSnapshot';
import { AsyncSnapshotContext } from './AsyncSnapshotContext';
import PromiseResolver from './PromiseResolver';

/**
 * The Props of a Builder component passed to the builder of a PromiseBuilder.
 */
export type PromiseBuilderBuilderProps<T> = {
  snapshot: AsyncSnapshot<T>;
};

/**
 * PromiseBuilder requires a promise and a builder that accepts AsyncSnapshots
 * of the Promise result.
 */
export interface PromiseBuilderProps<T> {
  promise: Promise<T>;
  builder: React.ComponentType<PromiseBuilderBuilderProps<T>>;
}

function consumeSnapshot(
  component: React.ComponentType<PromiseBuilderBuilderProps<unknown>>
): React.FC {
  return function ConsumeSnapshot() {
    const snapshot = React.useContext(AsyncSnapshotContext);
    return React.createElement(component, { snapshot });
  };
}

/**
 * PromiseBuilder is a component that can resolve the Async nature of promise
 * for components.
 */
const PromiseBuilder: React.FC<PromiseBuilderProps<unknown>> = (props) => {
  return (
    <PromiseResolver promise={props.promise}>
      {React.createElement(consumeSnapshot(props.builder))}
    </PromiseResolver>
  );
};

export default PromiseBuilder;
