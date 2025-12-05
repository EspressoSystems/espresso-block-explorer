import { SetData } from '@/contexts/data_provider';
import { SetError } from '@/contexts/error_provider';
import { SetLoading } from '@/contexts/loading_provider';
import React from 'react';
import { AsyncState } from './async_snapshot';
import { AsyncSnapshotContext } from './async_snapshot_context';

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
