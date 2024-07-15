import { bench, describe, expect } from 'vitest';
import { createBufferedChannel } from '../BufferedChannel';

const SAMPLES: number = 100000;
function runWithBufferedSize(bufferedSize: number) {
  return async () => {
    const channel = createBufferedChannel<number>(bufferedSize);
    // let's schedule this on a different async context that can be
    // preempted.
    Promise.resolve().then(async () => {
      for (let i = 0; i < SAMPLES; i++) {
        await channel.publish(i);
      }

      await channel.close();
    });

    for await (const i of channel) {
      expect(i).toEqual(i);
    }
  };
}
describe('BufferedChannel benches', () => {
  bench('buffered size of 2', runWithBufferedSize(2));
  bench('buffered size of 4', runWithBufferedSize(4));
  bench('buffered size of 8', runWithBufferedSize(8));
  bench('buffered size of 16', runWithBufferedSize(16));
  bench('buffered size of 32', runWithBufferedSize(32));
  bench('buffered size of 64', runWithBufferedSize(64));
  bench('buffered size of 128', runWithBufferedSize(128));
  bench('buffered size of 256', runWithBufferedSize(256));
  bench('buffered size of 512', runWithBufferedSize(512));
  bench('buffered size of 1024', runWithBufferedSize(1024));
  bench('buffered size of 2048', runWithBufferedSize(2048));
});
