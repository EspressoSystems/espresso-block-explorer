/**
 * Channel is an interface that represents a communication channel that can be
 * used to send and receive data.
 */
export interface Channel<T> extends AsyncIterable<T> {
  publish(data: T): Promise<void>;
  poll(): Promise<T>;
}
