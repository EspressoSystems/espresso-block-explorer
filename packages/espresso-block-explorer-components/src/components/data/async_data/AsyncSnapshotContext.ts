import React from 'react';
import { AsyncSnapshot } from './AsyncSnapshot';

/**
 * AsyncSnapshotContext is a React Context that holds an AsyncSnapshot state.
 * This is useful for passing AsyncSnapshots down the component tree.
 */
export const AsyncSnapshotContext = React.createContext<AsyncSnapshot<unknown>>(
  AsyncSnapshot.nothing()
);
