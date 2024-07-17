import {
  compareArrayBuffer,
  compareIterables,
  compareNumberArray,
  dropIterable,
  dropIterator,
  expandIterable,
  firstIterator,
  firstWhereIterable,
  inf,
  iota,
} from '@/functional';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';

describe('functional', () => {
  describe('iota', () => {
    it('should contain the element sequence expected', () => {
      expect(Array.from(iota(1))).deep.equal([0]);
      expect(Array.from(iota(2))).deep.equal([0, 1]);
      expect(Array.from(iota(3))).deep.equal([0, 1, 2]);
      expect(Array.from(iota(4))).deep.equal([0, 1, 2, 3]);
      expect(Array.from(iota(10))).deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('dropIterable', () => {
    it('should contain the element sequence expected', () => {
      expect(Array.from(dropIterable(iota(10), 7))).deep.equal([7, 8, 9]);
      expect(Array.from(dropIterable(iota(3), 7))).deep.equal([]);
    });
  });

  describe('first', () => {
    it('should not throw when there is an element', () => {
      const it = [1][Symbol.iterator]();
      expect(() => firstIterator(it)).not.toThrow();
    });

    it('should throw when there is not an element', () => {
      const it = [][Symbol.iterator]();
      expect(() => firstIterator(it)).toThrow();
    });
  });

  describe('firstWhereIterable', () => {
    it('should find the element expected', () => {
      expect(firstWhereIterable(iota(10), (n) => n === 2)).equal(2);
      expect(firstWhereIterable(iota(10), (n) => n === 4)).equal(4);
      expect(firstWhereIterable(iota(10), (n) => n === 9)).equal(9);
    });

    it('should not find the element expected', () => {
      expect(firstWhereIterable(iota(10), (n) => n === 100)).equal(undefined);
      expect(firstWhereIterable(iota(10), (n) => n === 10)).equal(undefined);
      expect(firstWhereIterable(iota(10), (n) => n === 32)).equal(undefined);
    });
  });

  describe('expandIterable', () => {
    it('should contain the element sequence expected', () => {
      expect(Array.from(expandIterable(iota(4), (n) => iota(n)))).deep.equal([
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

  describe('compareArrayBuffer', () => {
    it('should return the expected value', () => {
      expect(
        compareArrayBuffer(
          new Uint8Array([0, 1]).buffer,
          new Uint8Array([1, 2]).buffer,
        ),
      ).lessThan(0);

      expect(
        compareArrayBuffer(
          new Uint8Array([1, 2]).buffer,
          new Uint8Array([1, 2]).buffer,
        ),
      ).equals(0);

      expect(
        compareArrayBuffer(
          new Uint8Array([2, 3]).buffer,
          new Uint8Array([1, 2]).buffer,
        ),
      ).greaterThan(0);

      expect(
        compareArrayBuffer(
          new Uint8Array([1]).buffer,
          new Uint8Array([1, 2]).buffer,
        ),
      ).greaterThan(0);

      expect(
        compareArrayBuffer(
          new Uint8Array([1, 2]).buffer,
          new Uint8Array([1]).buffer,
        ),
      ).lessThan(0);
    });
  });

  describe('compareNumberArray', () => {
    it('should return the expected value', () => {
      expect(compareNumberArray([0, 1], [1, 2])).lessThan(0);
      expect(compareNumberArray([1, 2], [1, 2])).equals(0);
      expect(compareNumberArray([2, 3], [1, 2])).greaterThan(0);
      expect(compareNumberArray([1], [1, 2])).greaterThan(0);
      expect(compareNumberArray([1, 2], [1])).lessThan(0);

      expect(compareIterables([0, 1], [1, 2])).lessThan(0);
      expect(compareIterables([1, 2], [1, 2])).equals(0);
      expect(compareIterables([2, 3], [1, 2])).greaterThan(0);
      expect(compareIterables([1], [1, 2])).greaterThan(0);
      expect(compareIterables([1, 2], [1])).lessThan(0);
    });
  });

  describe('inf', () => {
    it('should not return', () => {
      // There's no good way to test something that goes on forever.  So instead
      // we'll just step an arbitrarily large number over iterators.

      let it = inf()[Symbol.iterator]();
      // This should be one.
      expect(firstIterator(it)).equals(1);

      it = dropIterator(it, 98);
      expect(firstIterator(it)).equals(100);

      it = dropIterator(it, 899);
      expect(firstIterator(it)).equals(1000);
    });
  });
});
