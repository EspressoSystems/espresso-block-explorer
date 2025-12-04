import ChannelClosedError from '@/errors/ChannelClosedError';
import { describe, expect, it } from 'vitest';
import { createBufferedChannel } from '../BufferedChannel';

describe('BufferedChannel', () => {
  describe('Blocking Buffer', () => {
    it('should return the elements in order', async () => {
      const channel = createBufferedChannel<number>(2);

      Promise.resolve().then(async () => {
        for (let i = 0; i < 100; i++) {
          await channel.publish(i);
        }
      });

      for (let i = 0; i < 100; i++) {
        await expect(channel.poll()).resolves.toEqual(i);
      }
      // channel.close();
    });

    it('should async iterator without error, and in order', async () => {
      const channel = createBufferedChannel<number>(2);

      // let's schedule this on a different async context that can be
      // preempted.
      Promise.resolve().then(async () => {
        for (let i = 0; i < 100; i++) {
          await channel.publish(i);
        }
        await channel.close();
      });

      for await (const i of channel) {
        expect(i).toEqual(i);
      }
    });
  });

  describe('close', () => {
    it('should throw an error when trying to close after closing', async () => {
      const channel = createBufferedChannel<number>(2);
      await channel.close();
      await expect(() => channel.close()).toThrow(ChannelClosedError);
    });

    it('should throw an error when trying to publish after closing', async () => {
      const channel = createBufferedChannel<number>(2);
      await channel.close();
      await expect(channel.publish(1)).rejects.toThrow(ChannelClosedError);
    });

    it('should throw an error when trying to poll after closing', async () => {
      const channel = createBufferedChannel<number>(2);
      await channel.close();

      await expect(channel.poll()).rejects.toThrow(ChannelClosedError);
    });

    it('should return done after closing the channel', async () => {
      const channel = createBufferedChannel<number>(2);
      await channel.close();
      const it = channel[Symbol.asyncIterator]();

      await expect(it.next()).resolves.deep.equals({
        done: true,
        value: undefined,
      });
    });

    it('should allow pending publishes to be read before being closed', async () => {
      const channel = createBufferedChannel<number>(8);
      for (let i = 0; i < 7; i++) {
        await channel.publish(i);
      }

      // This shouldn't time out, as we should be under the buffer limit
      await channel.close();

      for (let i = 0; i < 7; i++) {
        await expect(channel.poll()).resolves.toEqual(i);
      }

      // The channel should now be out of buffered writes.
      await expect(channel.poll()).rejects.toThrow(ChannelClosedError);
    });

    it('should allow pending publishes to be read before being closed', async () => {
      const channel = createBufferedChannel<number>(8);
      for (let i = 0; i < 7; i++) {
        await channel.publish(i);
      }

      await channel.drain();
      // This should empty the buffer on the channel, explicitly losing the
      // data without handling or consuming it.

      await channel.publish(7);
      await channel.close();

      await expect(channel.poll()).resolves.toEqual(7);

      // The channel should now be out of buffered writes.
      await expect(channel.poll()).rejects.toThrow(ChannelClosedError);
    });
  });
});
