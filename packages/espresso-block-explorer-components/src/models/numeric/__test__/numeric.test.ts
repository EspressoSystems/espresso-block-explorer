import { describe, expect, it } from 'vitest';
import {
  BaseNumeric,
  equalTo,
  greaterThan,
  greaterThanOrEqualTo,
  lessThan,
  lessThanOrEqualTo,
  max,
  min,
} from '../numeric';

class Foo extends BaseNumeric<number> {}
class Bar extends BaseNumeric<number> {}
class Baz extends BaseNumeric<Bar> {}

describe('numeric', () => {
  describe('valueOf()', () => {
    it('should return the value of the underlying number', () => {
      const oneF = new Foo(1);
      expect(oneF.valueOf()).to.equals(1);
      expect(Number(oneF)).to.equals(1);
      expect(oneF).not.equals(1);

      const oneB = new Bar(1);
      expect(oneB.valueOf()).to.equals(1);
      expect(Number(oneB)).to.equals(1);
      expect(oneB).not.equals(1);

      expect(oneF.valueOf()).to.equals(oneB.valueOf());
      expect(Number(oneF)).to.equals(Number(oneB));
      expect(oneF).not.equals(oneB);

      const oneZ = new Baz(new Bar(1));

      expect(oneZ.valueOf()).to.equals(1);
      expect(Number(oneZ)).to.equals(1);
      expect(oneZ).not.equals(1);

      expect(oneB.valueOf()).to.equals(oneZ.valueOf());
      expect(Number(oneB)).to.equals(Number(oneZ));
      expect(oneB).not.equals(oneZ);
    });
  });

  describe('lessThan', () => {
    it('should behave like the < operator', () => {
      const one = new Foo(1);
      const two = new Bar(2);

      expect(lessThan(one, two)).to.equals(true);
      expect(lessThan(one, one)).to.equals(false);
      expect(lessThan(two, one)).to.equals(false);
    });
  });

  describe('lessThanOrEqualTo', () => {
    it('should behave like the <= operator', () => {
      const one = new Foo(1);
      const two = new Bar(2);

      expect(lessThanOrEqualTo(one, two)).to.equals(true);
      expect(lessThanOrEqualTo(one, one)).to.equals(true);
      expect(lessThanOrEqualTo(two, one)).to.equals(false);
    });
  });

  describe('equalTo', () => {
    it('should behave like the === operator (as if acted upon the underlying values)', () => {
      const one = new Foo(1);
      const two = new Bar(2);

      expect(equalTo(one, two)).to.equals(false);
      expect(equalTo(one, one)).to.equals(true);
      expect(equalTo(two, one)).to.equals(false);
    });
  });

  describe('greaterThanOrEqualTo', () => {
    it('should behave like the >= operator', () => {
      const one = new Foo(1);
      const two = new Bar(2);

      expect(greaterThanOrEqualTo(one, two)).to.equals(false);
      expect(greaterThanOrEqualTo(one, one)).to.equals(true);
      expect(greaterThanOrEqualTo(two, one)).to.equals(true);
    });
  });

  describe('greaterThan', () => {
    it('should behave like the > operator', () => {
      const one = new Foo(1);
      const two = new Bar(2);

      expect(greaterThan(one, two)).to.equals(false);
      expect(greaterThan(one, one)).to.equals(false);
      expect(greaterThan(two, one)).to.equals(true);
    });
  });

  describe('min', () => {
    it('should return the lesser value of the two given', () => {
      const one = new Foo(1);
      const two = new Bar(2);

      expect(min(one, two)).to.equals(one);
    });
  });

  describe('max', () => {
    it('should return the greater value of the two given', () => {
      const one = new Foo(1);
      const two = new Bar(2);

      expect(max(one, two)).to.equals(two);
    });
  });
});
