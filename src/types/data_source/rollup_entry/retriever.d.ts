import { RollUpEntry, RollUpEntryAsyncRetriever } from './types';
export declare class RollUpEntryRetriever implements RollUpEntryAsyncRetriever {
    retrieve(key: number): Promise<RollUpEntry>;
}
