import {
  collectAsyncIterable,
  dropAsyncIterable,
  expandAsyncIterable,
  filterAsyncIterable,
  firstAsyncIterator,
  firstWhereAsyncIterable,
  iotaAsync,
  mapAsyncIterable,
  takeAsyncIterable,
} from '@/functional/functional_async';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';

describe('functional async', () => {
  describe('iotaAsync', () => {
    it('should contain the element sequence expected', async () => {
      await expect(collectAsyncIterable(iotaAsync(1))).resolves.deep.equal([0]);
      await expect(collectAsyncIterable(iotaAsync(2))).resolves.deep.equal([
        0, 1,
      ]);
      await expect(collectAsyncIterable(iotaAsync(3))).resolves.deep.equal([
        0, 1, 2,
      ]);
      await expect(collectAsyncIterable(iotaAsync(4))).resolves.deep.equal([
        0, 1, 2, 3,
      ]);
      await expect(collectAsyncIterable(iotaAsync(10))).resolves.deep.equal([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
    });
  });

  describe('filterAsyncIterable', () => {
    it('should contain the element sequence expected', async () => {
      await expect(
        collectAsyncIterable(
          filterAsyncIterable(iotaAsync(10), (n) => (n & 0x01) === 0),
        ),
      ).resolves.deep.equal([0, 2, 4, 6, 8]);
      await expect(
        collectAsyncIterable(
          filterAsyncIterable(iotaAsync(10), (n) => (n & 0x01) === 1),
        ),
      ).resolves.deep.equal([1, 3, 5, 7, 9]);
      await expect(
        collectAsyncIterable(filterAsyncIterable(iotaAsync(10), () => false)),
      ).resolves.deep.equal([]);
    });
  });

  describe('mapAsyncIterable', () => {
    it('should contain the element sequence expected', async () => {
      await expect(
        collectAsyncIterable(
          mapAsyncIterable(iotaAsync(10), (n) => Promise.resolve(n * n)),
        ),
      ).resolves.deep.equal([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]);
    });
  });

  describe('takeAsyncIterable', () => {
    it('should contain the element sequence expected', async () => {
      await expect(
        collectAsyncIterable(takeAsyncIterable(iotaAsync(10), 3)),
      ).resolves.deep.equal([0, 1, 2]);
      await expect(
        collectAsyncIterable(takeAsyncIterable(iotaAsync(3), 10)),
      ).resolves.deep.equal([0, 1, 2]);
    });
  });

  describe('dropAsyncIterable', () => {
    it('should contain the element sequence expected', async () => {
      await expect(
        collectAsyncIterable(dropAsyncIterable(iotaAsync(10), 7)),
      ).resolves.deep.equal([7, 8, 9]);
      await expect(
        collectAsyncIterable(dropAsyncIterable(iotaAsync(3), 7)),
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
        collectAsyncIterable(
          expandAsyncIterable(iotaAsync(4), (n) => iotaAsync(n)),
        ),
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
