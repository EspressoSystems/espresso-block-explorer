import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import {
  dropAsyncIterable,
  expandAsyncIterable,
  filterAsyncIterable,
  firstAsyncIterator,
  firstWhereAsyncIterable,
  foldRAsyncIterator,
  iotaAsync,
  mapAsyncIterable,
  takeAsyncIterable,
} from '../functional_async';

async function arrayFromAsync<T>(iterable: AsyncIterable<T>): Promise<T[]> {
  return foldRAsyncIterator(
    (acc, next) => {
      acc.push(next);
      return Promise.resolve(acc);
    },
    Promise.resolve([] as T[]),
    iterable[Symbol.asyncIterator](),
  );
}

describe('functional async', () => {
  describe('iotaAsync', () => {
    it('should contain the element sequence expected', async () => {
      await expect(arrayFromAsync(iotaAsync(1))).resolves.deep.equal([0]);
      await expect(arrayFromAsync(iotaAsync(2))).resolves.deep.equal([0, 1]);
      await expect(arrayFromAsync(iotaAsync(3))).resolves.deep.equal([0, 1, 2]);
      await expect(arrayFromAsync(iotaAsync(4))).resolves.deep.equal([
        0, 1, 2, 3,
      ]);
      await expect(arrayFromAsync(iotaAsync(10))).resolves.deep.equal([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
    });
  });

  describe('filterAsyncIterable', () => {
    it('should contain the element sequence expected', async () => {
      await expect(
        arrayFromAsync(
          filterAsyncIterable(iotaAsync(10), (n) => (n & 0x01) === 0),
        ),
      ).resolves.deep.equal([0, 2, 4, 6, 8]);
      await expect(
        arrayFromAsync(
          filterAsyncIterable(iotaAsync(10), (n) => (n & 0x01) === 1),
        ),
      ).resolves.deep.equal([1, 3, 5, 7, 9]);
      await expect(
        arrayFromAsync(filterAsyncIterable(iotaAsync(10), () => false)),
      ).resolves.deep.equal([]);
    });
  });

  describe('mapAsyncIterable', () => {
    it('should contain the element sequence expected', async () => {
      await expect(
        arrayFromAsync(
          mapAsyncIterable(iotaAsync(10), (n) => Promise.resolve(n * n)),
        ),
      ).resolves.deep.equal([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]);
    });
  });

  describe('takeAsyncIterable', () => {
    it('should contain the element sequence expected', async () => {
      await expect(
        arrayFromAsync(takeAsyncIterable(iotaAsync(10), 3)),
      ).resolves.deep.equal([0, 1, 2]);
      await expect(
        arrayFromAsync(takeAsyncIterable(iotaAsync(3), 10)),
      ).resolves.deep.equal([0, 1, 2]);
    });
  });

  describe('dropAsyncIterable', () => {
    it('should contain the element sequence expected', async () => {
      await expect(
        arrayFromAsync(dropAsyncIterable(iotaAsync(10), 7)),
      ).resolves.deep.equal([7, 8, 9]);
      await expect(
        arrayFromAsync(dropAsyncIterable(iotaAsync(3), 7)),
      ).resolves.deep.equal([]);
    });
  });

  describe('first', () => {
    it('should not throw when there is an element', async () => {
      await expect(firstAsyncIterator(iotaAsync(1))).resolves.not.toThrow();
    });

    it('should throw when there is not an element', async () => {
      await expect(firstAsyncIterator(iotaAsync(0))).rejects.toThrow();
    });
  });

  describe('firstWhereAsyncIterable', () => {
    it('should find the element expected', async () => {
      await expect(
        firstWhereAsyncIterable(iotaAsync(10), (n) => n === 2),
      ).resolves.toEqual(2);
      await expect(
        firstWhereAsyncIterable(iotaAsync(10), (n) => n === 4),
      ).resolves.toEqual(4);
      await expect(
        firstWhereAsyncIterable(iotaAsync(10), (n) => n === 9),
      ).resolves.toEqual(9);
    });

    it('should not find the element expected', async () => {
      await expect(
        firstWhereAsyncIterable(iotaAsync(10), (n) => n === 100),
      ).resolves.toEqual(undefined);
      await expect(
        firstWhereAsyncIterable(iotaAsync(10), (n) => n === 10),
      ).resolves.toEqual(undefined);
      await expect(
        firstWhereAsyncIterable(iotaAsync(10), (n) => n === 32),
      ).resolves.toEqual(undefined);
    });
  });

  describe('expandAsyncIterable', () => {
    it('should contain the element sequence expected', async () => {
      await expect(
        arrayFromAsync(expandAsyncIterable(iotaAsync(4), (n) => iotaAsync(n))),
      ).resolves.deep.equal([
        // 0

        // 1
        0,

        // 2
        0, 1,

        // 3
        0, 1, 2,
      ]);
    });
  });
});
