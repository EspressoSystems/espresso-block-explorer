import { Sink } from '../sink/sink';
import { Channel } from './channel';

/**
 * ChannelToSink is an implementation of Sink using a Channel.
 */
class ChannelToSink<T> {
  private channel: Channel<T>;
  constructor(channel: Channel<T>) {
    this.channel = channel;
  }
  async send(data: T): Promise<void> {
    await this.channel.publish(data);
  }
}

/**
 * createChannelToSink creates a Sink that uses a Channel to send data.
 */
export function createChannelToSink<T>(channel: Channel<T>): Sink<T> {
  return new ChannelToSink(channel);
}
