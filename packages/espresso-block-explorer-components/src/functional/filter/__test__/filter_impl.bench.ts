import { bench, describe } from 'vitest';

const N = 100000;

function* simpleIterable() {
  for (let i = 0; i < N; i++) {
    yield i;
  }
}

function isEven(n: number): n is number {
  return (n & 0x01) === 0x00;
}

describe('iterable map implementations', () => {
  const baseArray = Array.from(simpleIterable());
  bench('Array.filter', () => {
    for (const value of baseArray.filter(isEven)) {
      value === value;
    }
  });

  function* filterIterable<T, U extends T>(
    iterable: Iterable<T>,
    predicate: (t: T) => t is U,
  ) {
    for (const t of iterable) {
      if (predicate(t)) {
        yield t;
      }
    }
  }

  bench('filterIterable', () => {
    for (const value of filterIterable(baseArray, isEven)) {
      value === value;
    }
  });

  class SyntacticSugarFilter<T, U extends T> implements Iterable<U> {
    private iterable: Iterable<T>;
    private predicate: (t: T) => t is U;

    constructor(iterable: Iterable<T>, predicate: (t: T) => t is U) {
      this.iterable = iterable;
      this.predicate = predicate;
    }

    *[Symbol.iterator]() {
      for (const t of this.iterable) {
        if (this.predicate(t)) {
          yield t;
        }
      }
    }
  }

  bench('SyntacticSugarFilter', () => {
    for (const value of new SyntacticSugarFilter(baseArray, isEven)) {
      value === value;
    }
  });

  class CombinedIterableIteratorFilter<T, U extends T>
    implements IterableIterator<U>
  {
    private iterator: Iterator<T>;
    private predicate: (t: T) => t is U;
    constructor(iterable: Iterable<T>, predicate: (t: T) => t is U) {
      this.iterator = iterable[Symbol.iterator]();
      this.predicate = predicate;
    }

    [Symbol.iterator]() {
      return this;
    }

    next(): IteratorResult<U> {
      const { done, value } = this.iterator.next();
      if (done) {
        return { done: true, value: undefined };
      }

      if (!this.predicate(value)) {
        return this.next();
      }

      return { done: false, value: value };
    }
  }

  bench('CombinedIterableIteratorFilter', () => {
    for (const value of new CombinedIterableIteratorFilter(baseArray, isEven)) {
      value === value;
    }
  });

  class SeparateIterableFilterMethodNextUnwrap<T, U extends T>
    implements Iterable<U>
  {
    private iterable: Iterable<T>;
    private predicate: (t: T) => t is U;

    constructor(iterable: Iterable<T>, predicate: (t: T) => t is U) {
      this.iterable = iterable;
      this.predicate = predicate;
    }

    [Symbol.iterator]() {
      return new SeparateIteratorMethodNextUnwrap(
        this.iterable,
        this.predicate,
      );
    }
  }

  class SeparateIteratorMethodNextUnwrap<T, U extends T>
    implements Iterator<U>
  {
    private iterator: Iterator<T>;
    private predicate: (t: T) => t is U;

    constructor(iterable: Iterable<T>, predicate: (t: T) => t is U) {
      this.iterator = iterable[Symbol.iterator]();
      this.predicate = predicate;
    }

    next(): IteratorResult<U> {
      const { done, value } = this.iterator.next();
      if (done) {
        return { done: true, value: undefined };
      }

      if (!this.predicate(value)) {
        return this.next();
      }

      return { done: false, value: value };
    }
  }

  bench('SeparateIterableFilterMethodNextUnwrap', () => {
    for (const value of new SeparateIterableFilterMethodNextUnwrap(
      baseArray,
      isEven,
    )) {
      value === value;
    }
  });

  function filterNextUnwrap<T, U extends T>(
    iterator: Iterator<T>,
    predicate: (t: T) => t is U,
  ): IteratorResult<U> {
    for (let next = iterator.next(); !next.done; next = iterator.next()) {
      const { value } = next;
      if (!predicate(value)) {
        continue;
      }

      return { done: false, value: value };
    }

    return { done: true, value: undefined };
  }

  class SeparateIterableFilterExternalNextUnwrap<T, U extends T>
    implements Iterable<U>
  {
    private iterable: Iterable<T>;
    private predicate: (t: T) => t is U;

    constructor(iterable: Iterable<T>, predicate: (t: T) => t is U) {
      this.iterable = iterable;
      this.predicate = predicate;
    }

    [Symbol.iterator]() {
      return new SeparateIteratorExternalNextUnwrap(
        this.iterable,
        this.predicate,
      );
    }
  }

  class SeparateIteratorExternalNextUnwrap<T, U extends T>
    implements Iterator<U>
  {
    private iterator: Iterator<T>;
    private predicate: (t: T) => t is U;

    constructor(iterable: Iterable<T>, predicate: (t: T) => t is U) {
      this.iterator = iterable[Symbol.iterator]();
      this.predicate = predicate;
    }

    next(): IteratorResult<U> {
      return filterNextUnwrap(this.iterator, this.predicate);
    }
  }

  bench('SeparateIterableFilterExternalNextUnwrap', () => {
    for (const value of new SeparateIterableFilterExternalNextUnwrap(
      baseArray,
      isEven,
    )) {
      value === value;
    }
  });

  class SeparateIterableFilterMethodNext<T, U extends T>
    implements Iterable<U>
  {
    private iterable: Iterable<T>;
    private predicate: (t: T) => t is U;

    constructor(iterable: Iterable<T>, predicate: (t: T) => t is U) {
      this.iterable = iterable;
      this.predicate = predicate;
    }

    [Symbol.iterator]() {
      return new SeparateIteratorMethodNext(this.iterable, this.predicate);
    }
  }

  class SeparateIteratorMethodNext<T, U extends T> implements Iterator<U> {
    private iterator: Iterator<T>;
    private predicate: (t: T) => t is U;

    constructor(iterable: Iterable<T>, predicate: (t: T) => t is U) {
      this.iterator = iterable[Symbol.iterator]();
      this.predicate = predicate;
    }

    next(): IteratorResult<U> {
      const next = this.iterator.next();
      if (next.done) {
        return { done: true, value: undefined };
      }

      if (!this.predicate(next.value)) {
        return this.next();
      }

      return { done: false, value: next.value };
    }
  }

  bench('SeparateIterableFilterMethodNext', () => {
    for (const value of new SeparateIterableFilterMethodNext(
      baseArray,
      isEven,
    )) {
      value === value;
    }
  });

  function filterNext<T, U extends T>(
    iterator: Iterator<T>,
    predicate: (t: T) => t is U,
  ): IteratorResult<U> {
    for (let next = iterator.next(); !next.done; next = iterator.next()) {
      if (!predicate(next.value)) {
        continue;
      }

      return { done: false, value: next.value };
    }

    return { done: true, value: undefined };
  }

  class SeparateIterableFilterExternalNext<T, U extends T>
    implements Iterable<U>
  {
    private iterable: Iterable<T>;
    private predicate: (t: T) => t is U;

    constructor(iterable: Iterable<T>, predicate: (t: T) => t is U) {
      this.iterable = iterable;
      this.predicate = predicate;
    }

    [Symbol.iterator]() {
      return new SeparateIteratorExternalNext(this.iterable, this.predicate);
    }
  }

  class SeparateIteratorExternalNext<T, U extends T> implements Iterator<U> {
    private iterator: Iterator<T>;
    private predicate: (t: T) => t is U;

    constructor(iterable: Iterable<T>, predicate: (t: T) => t is U) {
      this.iterator = iterable[Symbol.iterator]();
      this.predicate = predicate;
    }

    next(): IteratorResult<U> {
      return filterNext(this.iterator, this.predicate);
    }
  }

  bench('SeparateIterableFilterExternalNext', () => {
    for (const value of new SeparateIterableFilterExternalNext(
      baseArray,
      isEven,
    )) {
      value === value;
    }
  });
});
