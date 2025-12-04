/**
 * An AsyncRetriever is an object that has a single known method called
 * `retrieve` that takes a key and return a promise of a value.
 */
export interface AsyncRetriever<Key, Value> {
  retrieve(key: Key): Promise<Value>;
}

/**
 * An AsyncRetrieverBase is a base class that implements the AsyncRetriever
 * in order to serve as a potential base class for all AsyncRetrievers.
 */
export abstract class AsyncRetrieverBase<Key, Value> implements AsyncRetriever<
  Key,
  Value
> {
  abstract retrieve(key: Key): Promise<Value>;
}
