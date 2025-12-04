import { SetData } from '@/contexts/DataProvider';
import { SetError } from '@/contexts/ErrorProvider';
import { SetLoading } from '@/contexts/LoadingProvider';
import React from 'react';
import { AsyncState } from './AsyncSnapshot';
import { AsyncSnapshotContext } from './AsyncSnapshotContext';

export interface ProvideAsyncStatesProps {
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideAsyncStates consumes an ancestor AsyncSnapshotContext and will
 * provide a LoadingContext, ErrorContext, and DataContext for consumption
 * by ancestor components.
 */
const ProvideAsyncStates: React.FC<ProvideAsyncStatesProps> = (props) => {
  const snapshot = React.useContext(AsyncSnapshotContext);

  return (
    <SetLoading loading={snapshot.asyncState === AsyncState.waiting}>
      <SetError error={snapshot.error}>
        <SetData data={snapshot.data}>{props.children}</SetData>
      </SetError>
    </SetLoading>
  );
};

export default ProvideAsyncStates;
