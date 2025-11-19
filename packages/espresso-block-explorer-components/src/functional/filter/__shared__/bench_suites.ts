import {
  createBenchmarkCase,
  createBenchmarkSuite,
} from '@/functional/__shared__/bench';

function* simpleIterable(n: number) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

function isEven(n: number): n is number {
  return (n & 0x01) === 0x00;
}

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
    return new SeparateIteratorMethodNextUnwrap(this.iterable, this.predicate);
  }
}

class SeparateIteratorMethodNextUnwrap<T, U extends T> implements Iterator<U> {
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
    return {
      done: false,
      value: this.predicate(value) ? value : this.next().value,
    };
  }
}

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

class SeparateIterableFilterMethodNext<T, U extends T> implements Iterable<U> {
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

export const filterBenchSuites = [
  createBenchmarkSuite('iterable filter implementations', [
    createBenchmarkCase('Array.filter', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));
      for (const value of baseArray.filter(isEven)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value === value;
      }
    }),

    createBenchmarkCase('filterIterable', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));

      for (const value of filterIterable(baseArray, isEven)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value === value;
      }
    }),

    createBenchmarkCase('SyntacticSugarFilter', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));

      for (const value of new SyntacticSugarFilter(baseArray, isEven)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value === value;
      }
    }),

    createBenchmarkCase('CombinedIterableIteratorFilter', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));

      for (const value of new CombinedIterableIteratorFilter(
        baseArray,
        isEven,
      )) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value === value;
      }
    }),

    createBenchmarkCase(
      'SeparateIterableFilterMethodNextUnwrap',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

        for (const value of new SeparateIterableFilterMethodNextUnwrap(
          baseArray,
          isEven,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      },
    ),

    createBenchmarkCase(
      'SeparateIterableFilterExternalNextUnwrap',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

        for (const value of new SeparateIterableFilterExternalNextUnwrap(
          baseArray,
          isEven,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      },
    ),

    createBenchmarkCase(
      'SeparateIterableFilterMethodNext',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

        for (const value of new SeparateIterableFilterMethodNext(
          baseArray,
          isEven,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      },
    ),

    createBenchmarkCase(
      'SeparateIterableFilterExternalNext',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

        for (const value of new SeparateIterableFilterExternalNext(
          baseArray,
          isEven,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      },
    ),
  ]),
];
