import React from 'react';
import { AsyncSnapshot } from './AsyncSnapshot';
export type AsyncIterableBuilderBuilderProps<T> = {
    snapshot: AsyncSnapshot<T>;
};
export interface AsyncIterableBuilderProps<T> {
    iterable: AsyncIterable<T>;
    builder: React.FC<AsyncIterableBuilderBuilderProps<T>>;
}
declare const AsyncIterableBuilder: React.FC<AsyncIterableBuilderProps<unknown>>;
export default AsyncIterableBuilder;
