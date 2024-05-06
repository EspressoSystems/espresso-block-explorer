import '@testing-library/jest-dom';
import { describe, bench } from 'vitest';
import {
  createCircularBuffer,
  CircularBuffer,
  CircularBufferGetFromEmptyBehavior,
  CircularBufferPutIntoFullBehaviors,
  CircularBufferGetFromEmptyBehaviors,
} from '../CircularBuffer';

const SAMPLES = 10000;
function runPuts(buffer: CircularBuffer<number>) {
  return () => {
    for (let i = 0; i < SAMPLES; i++) {
      try {
        buffer.put(i);
      } catch (err) {
        // Ignore errors for this benchmark
      }
    }
  };
}

function runBenches(name: string, buffer: CircularBuffer<number>) {
  bench(`${name} - put`, runPuts(buffer));
}

function runSizes(name: string, next: (name: string, size: number) => void) {
  describe('buffer size: 30', () => {
    next(`${name} - buffer size: 30`, 30);
    next(`${name} - buffer size: 32`, 32);
  });
  describe('buffer size: 60', () => {
    next(`${name} - buffer size: 60`, 60);
    next(`${name} - buffer size: 64`, 64);
  });
  describe('buffer size: 100', () => {
    next(`${name} - buffer size: 100`, 100);
    next(`${name} - buffer size: 128`, 128);
  });
  describe('buffer size: 250', () => {
    next(`${name} - buffer size: 250`, 250);
    next(`${name} - buffer size: 256`, 256);
  });
  describe('buffer size: 1000', () => {
    next(`${name} - buffer size: 1000`, 1000);
    next(`${name} - buffer size: 1024`, 1024);
  });
}

function runPutFulls(
  next: (names: string, buffer: CircularBuffer<number>) => void,
) {
  return (
    name: string,
    size: number,
    getFromEmpty: CircularBufferGetFromEmptyBehavior<number | unknown>,
  ) => {
    next(
      `${name} - put full: drop oldest`,
      createCircularBuffer(
        size,
        getFromEmpty,
        CircularBufferPutIntoFullBehaviors.overwriteOldest,
      ),
    );
    next(
      `${name} - put full: return full`,
      createCircularBuffer(
        size,
        getFromEmpty,
        CircularBufferPutIntoFullBehaviors.returnFull,
      ),
    );
    next(
      `${name} - put full: throw error`,
      createCircularBuffer(
        size,
        getFromEmpty,
        CircularBufferPutIntoFullBehaviors.throw,
      ),
    );
  };
}

function runGetEmpties(
  next: (
    name: string,
    size: number,
    behavior: CircularBufferGetFromEmptyBehavior<number | unknown>,
  ) => void,
) {
  return (name: string, size: number) => {
    next(
      `${name} - get empty: return undefined`,
      size,
      CircularBufferGetFromEmptyBehaviors.returnUndefined,
    );
    next(
      `${name} - get empty: throw error`,
      size,
      CircularBufferGetFromEmptyBehaviors.throwMissingElement,
    );
  };
}

describe('CircularBuffer', () => {
  describe('put', () => {
    runSizes('put', runGetEmpties(runPutFulls(runBenches)));
  });
});
