export interface AsyncRetriever<Key, Value> {
    retrieve(key: Key): Promise<Value>;
}
export declare abstract class AsyncRetrieverBase<Key, Value> implements AsyncRetriever<Key, Value> {
    abstract retrieve(key: Key): Promise<Value>;
}
