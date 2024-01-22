import React from 'react';
import { AsyncSnapshot } from './AsyncSnapshot';
export type PromiseBuilderBuilderProps<T> = {
    snapshot: AsyncSnapshot<T>;
};
export interface PromiseBuilderProps<T> {
    promise: Promise<T>;
    builder: React.FC<PromiseBuilderBuilderProps<T>>;
}
declare const PromiseBuilder: React.FC<PromiseBuilderProps<unknown>>;
export default PromiseBuilder;
