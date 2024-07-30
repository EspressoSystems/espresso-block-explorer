import { default as React } from '../../../../../../node_modules/react';

export interface PromiseBuilderProps<T> {
    promise: Promise<T>;
    children?: React.ReactNode | React.ReactNode[];
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
declare const PromiseResolver: React.FC<PromiseBuilderProps<unknown>>;
export default PromiseResolver;
