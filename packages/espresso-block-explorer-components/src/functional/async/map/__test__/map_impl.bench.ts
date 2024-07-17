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
  bench('Array.map', async () => {
    for await (const value of baseArray.map(square)) {
      value === value;
    }
  });

  async function* mapIterable<T, U>(
    iterable: Iterable<T> | AsyncIterable<T>,
    f: (t: T) => U | Promise<U>,
  ) {
    for await (const t of iterable) {
      yield await f(t);
    }
  }

  bench('mapIterable', async () => {
    for await (const value of mapIterable(baseArray, square)) {
      value === value;
    }
  });

  class SyntacticSugarMap<T, U> implements AsyncIterable<U> {
    private iterable: Iterable<T> | AsyncIterable<T>;
    private transformer: (t: T) => U;

    constructor(
      iterable: Iterable<T> | AsyncIterable<T>,
      transformer: (t: T) => U,
    ) {
      this.iterable = iterable;
      this.transformer = transformer;
    }

    async *[Symbol.asyncIterator]() {
      for await (const t of this.iterable) {
        yield this.transformer(t);
      }
    }
  }

  bench('SyntacticSugarMap', async () => {
    for await (const value of new SyntacticSugarMap(baseArray, square)) {
      value === value;
    }
  });

  class CombinedIterableIteratorMap<T, U> implements AsyncIterableIterator<U> {
    private iterator: Iterator<T> | AsyncIterator<T>;
    private transformer: (t: T) => U | Promise<U>;
    constructor(
      iterable: Iterable<T> | AsyncIterable<T>,
      transformer: (t: T) => U | Promise<U>,
    ) {
      if (Symbol.asyncIterator in iterable) {
        this.iterator = iterable[Symbol.asyncIterator]();
      } else {
        this.iterator = iterable[Symbol.iterator]();
      }
      this.transformer = transformer;
    }

    [Symbol.asyncIterator]() {
      return this;
    }

    async next(): Promise<IteratorResult<U>> {
      const { done, value } = await this.iterator.next();
      if (done) {
        return { done: true, value: undefined };
      }
      return { done: false, value: await this.transformer(value) };
    }
  }

  bench('CombinedIterableIteratorMap', async () => {
    for await (const value of new CombinedIterableIteratorMap(
      baseArray,
      square,
    )) {
      value === value;
    }
  });

  class SeparateIterableMapMethodNextUnwrap<T, U> implements AsyncIterable<U> {
    private iterable: Iterable<T> | AsyncIterable<T>;
    private transformer: (t: T) => U | Promise<U>;

    constructor(
      iterable: Iterable<T> | AsyncIterable<T>,
      transformer: (t: T) => U | Promise<U>,
    ) {
      this.iterable = iterable;
      this.transformer = transformer;
    }

    [Symbol.asyncIterator]() {
      return new SeparateIteratorMethodNextUnwrap(
        this.iterable,
        this.transformer,
      );
    }
  }

  class SeparateIteratorMethodNextUnwrap<T, U> implements AsyncIterator<U> {
    private iterator: Iterator<T> | AsyncIterator<T>;
    private transformer: (t: T) => U | Promise<U>;

    constructor(
      iterable: Iterable<T> | AsyncIterable<T>,
      transformer: (t: T) => U | Promise<U>,
    ) {
      if (Symbol.asyncIterator in iterable) {
        this.iterator = iterable[Symbol.asyncIterator]();
      } else {
        this.iterator = iterable[Symbol.iterator]();
      }
      this.transformer = transformer;
    }

    async next(): Promise<IteratorResult<U>> {
      const { done, value } = await this.iterator.next();
      if (done) {
        return { done: true, value: undefined };
      }
      return { done: false, value: await this.transformer(value) };
    }
  }

  bench('SeparateIterableMapMethodNextUnwrap', async () => {
    for await (const value of new SeparateIterableMapMethodNextUnwrap(
      baseArray,
      square,
    )) {
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
      value === value;
    }
  });
});
