import '@testing-library/jest-dom';
import { bench, describe } from 'vitest';
import {
  CircularBuffer,
  CircularBufferGetFromEmptyBehaviors as GetEmpty,
  CircularBufferPutIntoFullBehaviors as PutFull,
  createCircularBuffer as create,
} from '../circular_buffer';

const SAMPLES = 10000;
function run(buffer: CircularBuffer<number>) {
  return () => {
    for (let i = 0; i < SAMPLES; i++) {
      try {
        buffer.put(i);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        // Ignore errors for this benchmark
      }
    }
  };
}

describe('CircularBuffer put', () => {
  bench(
    'size: 30 - GetEmpty.returnUndefined - PutFull.overwriteOldest',
    run(create(30, GetEmpty.returnUndefined, PutFull.overwriteOldest)),
  );
  bench(
    'size: 30 - GetEmpty.returnUndefined - PutFull.returnFull',
    run(create(30, GetEmpty.returnUndefined, PutFull.returnFull)),
  );
  bench(
    'size: 30 - GetEmpty.returnUndefined - PutFull.throw',
    run(create(30, GetEmpty.returnUndefined, PutFull.throw)),
  );
  bench(
    'size: 30 - GetEmpty.throw - PutFull.overwriteOldest',
    run(create(30, GetEmpty.throwMissingElement, PutFull.overwriteOldest)),
  );
  bench(
    'size: 30 - GetEmpty.throw - PutFull.returnFull',
    run(create(30, GetEmpty.throwMissingElement, PutFull.returnFull)),
  );
  bench(
    'size: 30 - GetEmpty.throw - PutFull.throw',
    run(create(30, GetEmpty.throwMissingElement, PutFull.throw)),
  );

  bench(
    'size: 32 - GetEmpty.returnUndefined - PutFull.overwriteOldest',
    run(create(32, GetEmpty.returnUndefined, PutFull.overwriteOldest)),
  );
  bench(
    'size: 32 - GetEmpty.returnUndefined - PutFull.returnFull',
    run(create(32, GetEmpty.returnUndefined, PutFull.returnFull)),
  );
  bench(
    'size: 32 - GetEmpty.returnUndefined - PutFull.throw',
    run(create(32, GetEmpty.returnUndefined, PutFull.throw)),
  );
  bench(
    'size: 32 - GetEmpty.throw - PutFull.overwriteOldest',
    run(create(32, GetEmpty.throwMissingElement, PutFull.overwriteOldest)),
  );
  bench(
    'size: 32 - GetEmpty.throw - PutFull.returnFull',
    run(create(32, GetEmpty.throwMissingElement, PutFull.returnFull)),
  );
  bench(
    'size: 32 - GetEmpty.throw - PutFull.throw',
    run(create(32, GetEmpty.throwMissingElement, PutFull.throw)),
  );

  bench(
    'size: 60 - GetEmpty.returnUndefined - PutFull.overwriteOldest',
    run(create(60, GetEmpty.returnUndefined, PutFull.overwriteOldest)),
  );
  bench(
    'size: 60 - GetEmpty.returnUndefined - PutFull.returnFull',
    run(create(60, GetEmpty.returnUndefined, PutFull.returnFull)),
  );
  bench(
    'size: 60 - GetEmpty.returnUndefined - PutFull.throw',
    run(create(60, GetEmpty.returnUndefined, PutFull.throw)),
  );
  bench(
    'size: 60 - GetEmpty.throw - PutFull.overwriteOldest',
    run(create(60, GetEmpty.throwMissingElement, PutFull.overwriteOldest)),
  );
  bench(
    'size: 60 - GetEmpty.throw - PutFull.returnFull',
    run(create(60, GetEmpty.throwMissingElement, PutFull.returnFull)),
  );
  bench(
    'size: 60 - GetEmpty.throw - PutFull.throw',
    run(create(60, GetEmpty.throwMissingElement, PutFull.throw)),
  );

  bench(
    'size: 64 - GetEmpty.returnUndefined - PutFull.overwriteOldest',
    run(create(64, GetEmpty.returnUndefined, PutFull.overwriteOldest)),
  );
  bench(
    'size: 64 - GetEmpty.returnUndefined - PutFull.returnFull',
    run(create(64, GetEmpty.returnUndefined, PutFull.returnFull)),
  );
  bench(
    'size: 64 - GetEmpty.returnUndefined - PutFull.throw',
    run(create(64, GetEmpty.returnUndefined, PutFull.throw)),
  );
  bench(
    'size: 64 - GetEmpty.throw - PutFull.overwriteOldest',
    run(create(64, GetEmpty.throwMissingElement, PutFull.overwriteOldest)),
  );
  bench(
    'size: 64 - GetEmpty.throw - PutFull.returnFull',
    run(create(64, GetEmpty.throwMissingElement, PutFull.returnFull)),
  );
  bench(
    'size: 64 - GetEmpty.throw - PutFull.throw',
    run(create(64, GetEmpty.throwMissingElement, PutFull.throw)),
  );

  bench(
    'size: 100 - GetEmpty.returnUndefined - PutFull.overwriteOldest',
    run(create(100, GetEmpty.returnUndefined, PutFull.overwriteOldest)),
  );
  bench(
    'size: 100 - GetEmpty.returnUndefined - PutFull.returnFull',
    run(create(100, GetEmpty.returnUndefined, PutFull.returnFull)),
  );
  bench(
    'size: 100 - GetEmpty.returnUndefined - PutFull.throw',
    run(create(100, GetEmpty.returnUndefined, PutFull.throw)),
  );
  bench(
    'size: 100 - GetEmpty.throw - PutFull.overwriteOldest',
    run(create(100, GetEmpty.throwMissingElement, PutFull.overwriteOldest)),
  );
  bench(
    'size: 100 - GetEmpty.throw - PutFull.returnFull',
    run(create(100, GetEmpty.throwMissingElement, PutFull.returnFull)),
  );
  bench(
    'size: 100 - GetEmpty.throw - PutFull.throw',
    run(create(100, GetEmpty.throwMissingElement, PutFull.throw)),
  );

  bench(
    'size: 128 - GetEmpty.returnUndefined - PutFull.overwriteOldest',
    run(create(128, GetEmpty.returnUndefined, PutFull.overwriteOldest)),
  );
  bench(
    'size: 128 - GetEmpty.returnUndefined - PutFull.returnFull',
    run(create(128, GetEmpty.returnUndefined, PutFull.returnFull)),
  );
  bench(
    'size: 128 - GetEmpty.returnUndefined - PutFull.throw',
    run(create(128, GetEmpty.returnUndefined, PutFull.throw)),
  );
  bench(
    'size: 128 - GetEmpty.throw - PutFull.overwriteOldest',
    run(create(128, GetEmpty.throwMissingElement, PutFull.overwriteOldest)),
  );
  bench(
    'size: 128 - GetEmpty.throw - PutFull.returnFull',
    run(create(128, GetEmpty.throwMissingElement, PutFull.returnFull)),
  );
  bench(
    'size: 128 - GetEmpty.throw - PutFull.throw',
    run(create(128, GetEmpty.throwMissingElement, PutFull.throw)),
  );

  bench(
    'size: 250 - GetEmpty.returnUndefined - PutFull.overwriteOldest',
    run(create(250, GetEmpty.returnUndefined, PutFull.overwriteOldest)),
  );
  bench(
    'size: 250 - GetEmpty.returnUndefined - PutFull.returnFull',
    run(create(250, GetEmpty.returnUndefined, PutFull.returnFull)),
  );
  bench(
    'size: 250 - GetEmpty.returnUndefined - PutFull.throw',
    run(create(250, GetEmpty.returnUndefined, PutFull.throw)),
  );
  bench(
    'size: 250 - GetEmpty.throw - PutFull.overwriteOldest',
    run(create(250, GetEmpty.throwMissingElement, PutFull.overwriteOldest)),
  );
  bench(
    'size: 250 - GetEmpty.throw - PutFull.returnFull',
    run(create(250, GetEmpty.throwMissingElement, PutFull.returnFull)),
  );
  bench(
    'size: 250 - GetEmpty.throw - PutFull.throw',
    run(create(250, GetEmpty.throwMissingElement, PutFull.throw)),
  );

  bench(
    'size: 256 - GetEmpty.returnUndefined - PutFull.overwriteOldest',
    run(create(256, GetEmpty.returnUndefined, PutFull.overwriteOldest)),
  );
  bench(
    'size: 256 - GetEmpty.returnUndefined - PutFull.returnFull',
    run(create(256, GetEmpty.returnUndefined, PutFull.returnFull)),
  );
  bench(
    'size: 256 - GetEmpty.returnUndefined - PutFull.throw',
    run(create(256, GetEmpty.returnUndefined, PutFull.throw)),
  );
  bench(
    'size: 256 - GetEmpty.throw - PutFull.overwriteOldest',
    run(create(256, GetEmpty.throwMissingElement, PutFull.overwriteOldest)),
  );
  bench(
    'size: 256 - GetEmpty.throw - PutFull.returnFull',
    run(create(256, GetEmpty.throwMissingElement, PutFull.returnFull)),
  );
  bench(
    'size: 256 - GetEmpty.throw - PutFull.throw',
    run(create(256, GetEmpty.throwMissingElement, PutFull.throw)),
  );

  bench(
    'size: 1024 - GetEmpty.returnUndefined - PutFull.overwriteOldest',
    run(create(1024, GetEmpty.returnUndefined, PutFull.overwriteOldest)),
  );
  bench(
    'size: 1024 - GetEmpty.returnUndefined - PutFull.returnFull',
    run(create(1024, GetEmpty.returnUndefined, PutFull.returnFull)),
  );
  bench(
    'size: 1024 - GetEmpty.returnUndefined - PutFull.throw',
    run(create(1024, GetEmpty.returnUndefined, PutFull.throw)),
  );
  bench(
    'size: 1024 - GetEmpty.throw - PutFull.overwriteOldest',
    run(create(1024, GetEmpty.throwMissingElement, PutFull.overwriteOldest)),
  );
  bench(
    'size: 1024 - GetEmpty.throw - PutFull.returnFull',
    run(create(1024, GetEmpty.throwMissingElement, PutFull.returnFull)),
  );
  bench(
    'size: 1024 - GetEmpty.throw - PutFull.throw',
    run(create(1024, GetEmpty.throwMissingElement, PutFull.throw)),
  );
});
