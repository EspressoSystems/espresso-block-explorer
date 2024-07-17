import { bench, describe } from 'vitest';

const N = 100000;

function* simpleIterable() {
  for (let i = 0; i < N; i++) {
    yield i;
  }
}

function square(n: number) {
  return n * n;
}

describe('iterable map implementations', () => {
  const baseArray = Array.from(simpleIterable());
  bench('Array.map', () => {
    for (const value of baseArray.map(square)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      value === value;
    }
  });

  function* mapIterable<T, U>(iterable: Iterable<T>, f: (t: T) => U) {
    for (const t of iterable) {
      yield f(t);
    }
  }

  bench('mapIterable', () => {
    for (const value of mapIterable(baseArray, square)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      value === value;
    }
  });

  class SyntacticSugarMap<T, U> implements Iterable<U> {
    private iterable: Iterable<T>;
    private transformer: (t: T) => U;

    constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
      this.iterable = iterable;
      this.transformer = transformer;
    }

    *[Symbol.iterator]() {
      for (const t of this.iterable) {
        yield this.transformer(t);
      }
    }
  }

  bench('SyntacticSugarMap', () => {
    for (const value of new SyntacticSugarMap(baseArray, square)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      value === value;
    }
  });

  class CombinedIterableIteratorMap<T, U> implements IterableIterator<U> {
    private iterator: Iterator<T>;
    private transformer: (t: T) => U;
    constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
      this.iterator = iterable[Symbol.iterator]();
      this.transformer = transformer;
    }

    [Symbol.iterator]() {
      return this;
    }

    next(): IteratorResult<U> {
      const { done, value } = this.iterator.next();
      if (done) {
        return { done: true, value: undefined };
      }
      return { done: false, value: this.transformer(value) };
    }
  }

  bench('CombinedIterableIteratorMap', () => {
    for (const value of new CombinedIterableIteratorMap(baseArray, square)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      value === value;
    }
  });

  class SeparateIterableMapMethodNextUnwrap<T, U> implements Iterable<U> {
    private iterable: Iterable<T>;
    private transformer: (t: T) => U;

    constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
      this.iterable = iterable;
      this.transformer = transformer;
    }

    [Symbol.iterator]() {
      return new SeparateIteratorMethodNextUnwrap(
        this.iterable,
        this.transformer,
      );
    }
  }

  class SeparateIteratorMethodNextUnwrap<T, U> implements Iterator<U> {
    private iterator: Iterator<T>;
    private transformer: (t: T) => U;

    constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
      this.iterator = iterable[Symbol.iterator]();
      this.transformer = transformer;
    }

    next(): IteratorResult<U> {
      const { done, value } = this.iterator.next();
      if (done) {
        return { done: true, value: undefined };
      }
      return { done: false, value: this.transformer(value) };
    }
  }

  bench('SeparateIterableMapMethodNextUnwrap', () => {
    for (const value of new SeparateIterableMapMethodNextUnwrap(
      baseArray,
      square,
    )) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      value === value;
    }
  });

  function mapNextUnwrap<T, U>(
    iterator: Iterator<T>,
    transformer: (t: T) => U,
  ): IteratorResult<U> {
    const { done, value } = iterator.next();
    if (done) {
      return { done: true, value: undefined };
    }
    return { done: false, value: transformer(value) };
  }

  class SeparateIterableMapExternalNextUnwrap<T, U> implements Iterable<U> {
    private iterable: Iterable<T>;
    private transformer: (t: T) => U;

    constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
      this.iterable = iterable;
      this.transformer = transformer;
    }

    [Symbol.iterator]() {
      return new SeparateIteratorExternalNextUnwrap(
        this.iterable,
        this.transformer,
      );
    }
  }

  class SeparateIteratorExternalNextUnwrap<T, U> implements Iterator<U> {
    private iterator: Iterator<T>;
    private transformer: (t: T) => U;

    constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
      this.iterator = iterable[Symbol.iterator]();
      this.transformer = transformer;
    }

    next(): IteratorResult<U> {
      return mapNextUnwrap(this.iterator, this.transformer);
    }
  }

  bench('SeparateIterableMapExternalNextUnwrap', () => {
    for (const value of new SeparateIterableMapExternalNextUnwrap(
      baseArray,
      square,
    )) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      value === value;
    }
  });

  class SeparateIterableMapMethodNext<T, U> implements Iterable<U> {
    private iterable: Iterable<T>;
    private transformer: (t: T) => U;

    constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
      this.iterable = iterable;
      this.transformer = transformer;
    }

    [Symbol.iterator]() {
      return new SeparateIteratorMethodNext(this.iterable, this.transformer);
    }
  }

  class SeparateIteratorMethodNext<T, U> implements Iterator<U> {
    private iterator: Iterator<T>;
    private transformer: (t: T) => U;

    constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
      this.iterator = iterable[Symbol.iterator]();
      this.transformer = transformer;
    }

    next(): IteratorResult<U> {
      const next = this.iterator.next();
      if (next.done) {
        return { done: true, value: undefined };
      }
      return { done: false, value: this.transformer(next.value) };
    }
  }

  bench('SeparateIterableMapMethodNext', () => {
    for (const value of new SeparateIterableMapMethodNext(baseArray, square)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      value === value;
    }
  });

  function mapNext<T, U>(
    iterator: Iterator<T>,
    transformer: (t: T) => U,
  ): IteratorResult<U> {
    const next = iterator.next();
    if (next.done) {
      return { done: true, value: undefined };
    }
    return { done: false, value: transformer(next.value) };
  }

  class SeparateIterableMapExternalNext<T, U> implements Iterable<U> {
    private iterable: Iterable<T>;
    private transformer: (t: T) => U;

    constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
      this.iterable = iterable;
      this.transformer = transformer;
    }

    [Symbol.iterator]() {
      return new SeparateIteratorExternalNext(this.iterable, this.transformer);
    }
  }

  class SeparateIteratorExternalNext<T, U> implements Iterator<U> {
    private iterator: Iterator<T>;
    private transformer: (t: T) => U;

    constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
      this.iterator = iterable[Symbol.iterator]();
      this.transformer = transformer;
    }

    next(): IteratorResult<U> {
      return mapNext(this.iterator, this.transformer);
    }
  }

  bench('SeparateIterableMapExternalNext', () => {
    for (const value of new SeparateIterableMapExternalNext(
      baseArray,
      square,
    )) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      value === value;
    }
  });
});
