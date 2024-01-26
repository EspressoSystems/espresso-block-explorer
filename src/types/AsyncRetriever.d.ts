export interface AsyncRetriever<Key, Value> {
    retrieve(key: Key): Promise<Value>;
}
