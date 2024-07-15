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
class BufferedChannel<T> implements Channel<T> {
  private readonly publishQueue: CircularBuffer<T>;
  private pollBlocked: Completer<void>;
  private publishBlocked: Completer<void>;
  private readonly capacity: number;
  private closed: boolean = false;

  constructor(size: number) {
    this.publishQueue = createCircularBuffer(
      Math.max(2, size),
      CircularBufferGetFromEmptyBehaviors.throwMissingElement,
      CircularBufferPutIntoFullBehaviors.throw,
    );
    const completer = createCompleter<void>();
    this.pollBlocked = completer;
    this.publishBlocked = completer;
    completer.complete();

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
      throw new ChannelClosedError();
    }

    this.closed = true;
  }

  /**
   * drain is an explicit call that will drain the BufferedChannel from any
   * outstanding read requests. This will complete all of the requests with
   * a ChannelClosedError.
   */
  async drain(): Promise<void> {
    while (this.publishQueue.length > 0) {
      const request = this.publishQueue.get();
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

    if (this.publishQueue.length >= this.capacity) {
      if (this.publishBlocked.isCompleted) {
        // Create a new write lock.
        const nextWriteLock = createCompleter<void>();
        this.publishBlocked = nextWriteLock;
        await nextWriteLock.promise;
      }

      await this.publishBlocked.promise;
      return this.publish(data);
    }

    this.publishQueue.put(data);

    if (!this.pollBlocked.isCompleted) {
      this.pollBlocked.complete();
    }
  }

  /**
   * poll will return the next available data from the channel.  If there is no
   * data available, it will wait until data is available.
   */
  async poll(): Promise<T> {
    if (this.publishQueue.length <= 0) {
      if (this.isClosed) {
        throw new ChannelClosedError();
      }
      // We don't have any requests to fulfill.  So we need to wait for the
      // data to be come available.

      if (this.pollBlocked.isCompleted) {
        const nextReadLock = createCompleter<void>();
        this.pollBlocked = nextReadLock;
      }

      await this.pollBlocked.promise;
      return this.poll();
    }

    const value = this.publishQueue.get();
    if (!this.publishBlocked.isCompleted) {
      this.publishBlocked.complete();
    }

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
export function createBufferedChannel<T>(size: number): Channel<T> {
  return new BufferedChannel<T>(size);
}
