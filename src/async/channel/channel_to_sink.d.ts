import { Sink } from '../sink/sink';
import { Channel } from './Channel';

/**
 * createChannelToSink creates a Sink that uses a Channel to send data.
 */
export declare function createChannelToSink<T>(channel: Channel<T>): Sink<T>;
