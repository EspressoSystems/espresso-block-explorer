import { describe, expect, it } from 'vitest';
import {
  CircularBuffer,
  CircularBufferGetFromEmptyBehaviors,
  CircularBufferPutIntoFullBehaviors,
  CircularBufferPutResult,
  createCircularBuffer,
} from '../CircularBuffer';

function basicOperations(buffer: CircularBuffer<number>) {
  const numberOfIterations = 10;
  const countOperations = buffer.maxSize - 1;

  expect(buffer.length).toBe(0);
  for (let j = 0; j < numberOfIterations; j++) {
    for (let i = 0; i < countOperations; i++) {
      buffer.put(i);
      expect(buffer.length).toBe(i + 1);
    }

    expect(buffer.length).toBe(countOperations);

    for (let i = 0; i < countOperations; i++) {
      expect(buffer.get()).toBe(i);
    }

    expect(buffer.length).toBe(0);
  }
}

describe('CircularBuffer', () => {
  describe('Size not Power of 2', () => {
    describe('basic operations', () => {
      it('should perform basic operations', () => {
        basicOperations(createCircularBuffer<number>(6));
      });
    });
  });

  describe('Size is Power of 2', () => {
    describe('basic operations', () => {
      it('should perform basic operations', () => {
        basicOperations(createCircularBuffer<number>(8));
      });
    });
  });

  describe('Read from Empty Buffer', () => {
    describe('returns undefined', () => {
      it('should return undefined', () => {
        const buffer = createCircularBuffer<number>(
          8,
          CircularBufferGetFromEmptyBehaviors.returnUndefined,
        );

        expect(buffer.get()).equals(undefined);
      });
    });

    describe('returns null', () => {
      it('should return undefined', () => {
        const buffer = createCircularBuffer<number>(
          8,
          CircularBufferGetFromEmptyBehaviors.returnNull,
        );

        expect(buffer.get()).equals(null);
      });
    });

    describe('throws error', () => {
      it('should throw an error', () => {
        const buffer = createCircularBuffer<number>(
          8,
          CircularBufferGetFromEmptyBehaviors.throwMissingElement,
        );

        expect(() => buffer.get()).toThrow();
      });
    });
  });

  describe('Use as an Iterable', () => {
    it('should be iterable', () => {
      const buffer = createCircularBuffer(5);

      buffer.put(1);
      buffer.put(2);
      buffer.put(3);
      buffer.put(4);

      expect(Array.from(buffer)).to.deep.equal([1, 2, 3, 4]);

      buffer.put(4);
      buffer.put(3);
      buffer.put(2);
      buffer.put(1);

      expect(Array.from(buffer)).to.deep.equal([4, 3, 2, 1]);
    });
  });

  describe('Write to a Full Buffer', () => {
    describe('overwrite oldest', () => {
      it('should overwrite the oldest value', () => {
        const buffer = createCircularBuffer(
          2,
          undefined,
          CircularBufferPutIntoFullBehaviors.overwriteOldest,
        );
        buffer.put(1);
        expect(buffer.put(2)).toBe(CircularBufferPutResult.success);
        expect(buffer.get()).toBe(2);
      });
    });

    describe('return full', () => {
      it('should not write, and return full', () => {
        const buffer = createCircularBuffer(
          2,
          undefined,
          CircularBufferPutIntoFullBehaviors.returnFull,
        );
        buffer.put(1);
        expect(buffer.put(2)).toBe(CircularBufferPutResult.full);
        expect(buffer.get()).toBe(1);
      });
    });

    describe('throw error', () => {
      it('should throw an error', () => {
        const buffer = createCircularBuffer(
          2,
          undefined,
          CircularBufferPutIntoFullBehaviors.throw,
        );
        buffer.put(1);
        expect(() => buffer.put(2)).throws();
        expect(buffer.get()).toBe(1);
      });
    });
  });
});
