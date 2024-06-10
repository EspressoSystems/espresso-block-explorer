import {
  Completer,
  createCompleter,
} from '@/data_structures/async/completer/Completer';
import {
  CircularBuffer,
  CircularBufferGetFromEmptyBehaviors,
  CircularBufferPutIntoFullBehaviors,
  createCircularBuffer,
} from '@/data_structures/circular_buffer/CircularBuffer';
import ChannelClosedError from '@/errors/ChannelClosedError';
import { Channel } from './Channel';

/**
 * A BufferedChannel is an AsyncIterable that can be published to in a "hot"
 * manner, but can be consumed in a "cold" manner.
 *
 * The idea is that this will be capable of bridging the gap between a passive
 * listener to and active listener.  Another way of putting it is to convert
 * a callback based handler into a poll-able iterable.
 *
 * Additionally, there should be a buffer of requests that are waiting to be
 * consumed.  This should allow for better performance when the buffer size
 * is larger.
 *
 * Ideally, any overflow of the buffer should trigger a blocking mechanism that
 * prevents further requests from being added to the buffer until the buffer
 * is empty enough to accept more requests.
 */
export class BufferedChannel<T> implements Channel<T> {
  private readonly requestQueue: CircularBuffer<T>;
  private dataAvailable: Completer<void>;
  private readonly capacity: number;
  private closed: boolean = false;

  constructor(size: number = 256) {
    this.requestQueue = createCircularBuffer(
      Math.max(2, size),
      CircularBufferGetFromEmptyBehaviors.throwMissingElement,
      CircularBufferPutIntoFullBehaviors.throw,
    );
    this.dataAvailable = createCompleter();
    this.capacity = size - 1;
  }

  get isClosed(): boolean {
    return this.closed;
  }

  /**
   * close marks the BufferedChannel as closed. This will prevent any further
   * poll requests from being added to the buffer.  Any requests that are
   * currently in the buffer will still wait for completion, unless explicitly
   * drained.
   */
  close() {
    if (this.closed) {
      return;
    }

    this.closed = true;
  }

  /**
   * drain is an explicit call that will drain the BufferedChannel from any
   * outstanding read requests. This will complete all of the requests with
   * a ChannelClosedError.
   */
  drain() {
    while (this.requestQueue.length > 0) {
      const request = this.requestQueue.get();
      if (!request) {
        continue;
      }
    }
  }

  /**
   * publish will send data to the next available poll request.  If there are
   * no requests available, it will wait until a request is available.
   */
  async publish(data: T): Promise<void> {
    if (this.closed) {
      throw new ChannelClosedError();
    }

    if (this.requestQueue.length >= this.capacity) {
      await this.dataAvailable.promise;
      return this.publish(data);
    }

    const previousDataAvailable = this.dataAvailable;
    this.dataAvailable = createCompleter();
    this.requestQueue.put(data);
    previousDataAvailable.complete();
  }

  /**
   * poll will return the next available data from the channel.  If there is no
   * data available, it will wait until data is available.
   */
  async poll(): Promise<T> {
    if (this.requestQueue.length <= 0) {
      if (this.isClosed) {
        throw new ChannelClosedError();
      }
      // We don't have any requests to fulfill.  So we need to wait for the
      // data to be come available.
      await this.dataAvailable.promise;
      return this.poll();
    }

    const previousDataAvailable = this.dataAvailable;
    this.dataAvailable = createCompleter();
    const value = this.requestQueue.get();
    previousDataAvailable.complete();
    return value!;
  }

  [Symbol.asyncIterator](): AsyncIterator<T> {
    return new BufferedChannelAsyncIterator(this);
  }
}

/**
 * BufferedChannelAsyncIterator is an AsyncIterator that will poll the
 * BufferedChannel for the next available value.
 */
class BufferedChannelAsyncIterator<T> implements AsyncIterator<T> {
  private readonly channel: BufferedChannel<T>;

  constructor(channel: BufferedChannel<T>) {
    this.channel = channel;
  }

  async next(): Promise<IteratorResult<T>> {
    try {
      const value = await this.channel.poll();
      return {
        done: false,
        value,
      };
    } catch (err) {
      if (err instanceof ChannelClosedError) {
        return {
          done: true,
          value: undefined,
        };
      }

      throw err;
    }
  }
}

/**
 * createBufferedChannel creates a new BufferedChannel that has a capacity of
 * the specified size.
 */
export function createBufferedChannel<T>(size: number = 256): Channel<T> {
  return new BufferedChannel(size);
}
