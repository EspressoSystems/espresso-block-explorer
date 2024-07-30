import { default as React } from '../../../../../../node_modules/react';
import { AsyncSnapshot } from './AsyncSnapshot';

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
/**
 * PromiseBuilder is a component that can resolve the Async nature of promise
 * for components.
 */
declare const PromiseBuilder: React.FC<PromiseBuilderProps<unknown>>;
export default PromiseBuilder;
