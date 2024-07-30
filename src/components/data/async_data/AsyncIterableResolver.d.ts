import { default as React } from '../../../../../../node_modules/react';

/**
 * AsyncIterableResolverProps represents the props that can be passed to the
 * AsyncIterableResolver.
 */
export interface AsyncIterableResolverProps<T> {
    asyncIterable: AsyncIterable<T>;
    children?: React.ReactNode | React.ReactNode[];
}
/**
 * AsyncIterableResolver is a component that resolves an AsyncIterable into a series of AsyncSnapshots.
 * This component is useful for consuming an AsyncIterable in a React component.
 */
declare const AsyncIterableResolver: React.FC<AsyncIterableResolverProps<unknown>>;
export default AsyncIterableResolver;
