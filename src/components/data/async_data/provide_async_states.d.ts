import { default as React } from 'react';
export interface ProvideAsyncStatesProps {
    children?: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideAsyncStates consumes an ancestor AsyncSnapshotContext and will
 * provide a LoadingContext, ErrorContext, and DataContext for consumption
 * by ancestor components.
 */
declare const ProvideAsyncStates: React.FC<ProvideAsyncStatesProps>;
export default ProvideAsyncStates;
