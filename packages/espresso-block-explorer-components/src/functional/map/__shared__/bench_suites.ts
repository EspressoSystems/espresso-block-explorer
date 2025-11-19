import {
  createBenchmarkCase,
  createBenchmarkSuite,
} from '@/functional/__shared__/bench';

function* simpleIterable(n: number) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

function square(n: number) {
  return n * n;
}

function* mapIterable<T, U>(iterable: Iterable<T>, f: (t: T) => U) {
  for (const t of iterable) {
    yield f(t);
  }
}

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

function forOfIteration<T>(iterable: Iterable<T>) {
  for (const t of iterable) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    t === t;
  }
}

function forLoopIteration<T>(iterable: Iterable<T>) {
  const it = iterable[Symbol.iterator]();
  for (let next = it.next(); !next.done; next = it.next()) {
    const t = next.value;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    t === t;
  }
}

export const mapBenchSuites = [
  createBenchmarkSuite(
    'iterable map implementations',
    [],
    [
      createBenchmarkSuite('forOf iteration', [
        createBenchmarkCase('Array.map', async (n: number) => {
          const baseArray = Array.from(simpleIterable(n));
          forOfIteration(baseArray.map(square));
        }),

        createBenchmarkCase('mapIterable', async (n: number) => {
          const baseArray = Array.from(simpleIterable(n));
          forOfIteration(mapIterable(baseArray, square));
        }),

        createBenchmarkCase('SyntacticSugarMap', async (n: number) => {
          const baseArray = Array.from(simpleIterable(n));
          forOfIteration(new SyntacticSugarMap(baseArray, square));
        }),

        createBenchmarkCase(
          'CombinedIterableIteratorMap',
          async (n: number) => {
            const baseArray = Array.from(simpleIterable(n));
            forOfIteration(new CombinedIterableIteratorMap(baseArray, square));
          },
        ),

        createBenchmarkCase(
          'SeparateIterableMapMethodNextUnwrap',
          async (n: number) => {
            const baseArray = Array.from(simpleIterable(n));
            forOfIteration(
              new SeparateIterableMapMethodNextUnwrap(baseArray, square),
            );
          },
        ),

        createBenchmarkCase(
          'SeparateIterableMapExternalNextUnwrap',
          async (n: number) => {
            const baseArray = Array.from(simpleIterable(n));
            forOfIteration(
              new SeparateIterableMapExternalNextUnwrap(baseArray, square),
            );
          },
        ),

        createBenchmarkCase(
          'SeparateIterableMapMethodNext',
          async (n: number) => {
            const baseArray = Array.from(simpleIterable(n));
            forOfIteration(
              new SeparateIterableMapMethodNext(baseArray, square),
            );
          },
        ),

        createBenchmarkCase(
          'SeparateIterableMapExternalNext',
          async (n: number) => {
            const baseArray = Array.from(simpleIterable(n));
            forOfIteration(
              new SeparateIterableMapExternalNext(baseArray, square),
            );
          },
        ),
      ]),

      createBenchmarkSuite('forLoop iteration', [
        createBenchmarkCase('Array.map', async (n: number) => {
          const baseArray = Array.from(simpleIterable(n));
          forLoopIteration(baseArray.map(square));
        }),

        createBenchmarkCase('mapIterable', async (n: number) => {
          const baseArray = Array.from(simpleIterable(n));
          forLoopIteration(mapIterable(baseArray, square));
        }),

        createBenchmarkCase('SyntacticSugarMap', async (n: number) => {
          const baseArray = Array.from(simpleIterable(n));
          forLoopIteration(new SyntacticSugarMap(baseArray, square));
        }),

        createBenchmarkCase(
          'CombinedIterableIteratorMap',
          async (n: number) => {
            const baseArray = Array.from(simpleIterable(n));
            forLoopIteration(
              new CombinedIterableIteratorMap(baseArray, square),
            );
          },
        ),

        createBenchmarkCase(
          'SeparateIterableMapMethodNextUnwrap',
          async (n: number) => {
            const baseArray = Array.from(simpleIterable(n));
            forLoopIteration(
              new SeparateIterableMapMethodNextUnwrap(baseArray, square),
            );
          },
        ),

        createBenchmarkCase(
          'SeparateIterableMapExternalNextUnwrap',
          async (n: number) => {
            const baseArray = Array.from(simpleIterable(n));
            forLoopIteration(
              new SeparateIterableMapExternalNextUnwrap(baseArray, square),
            );
          },
        ),

        createBenchmarkCase(
          'SeparateIterableMapMethodNext',
          async (n: number) => {
            const baseArray = Array.from(simpleIterable(n));
            forLoopIteration(
              new SeparateIterableMapMethodNext(baseArray, square),
            );
          },
        ),

        createBenchmarkCase(
          'SeparateIterableMapExternalNext',
          async (n: number) => {
            const baseArray = Array.from(simpleIterable(n));
            forLoopIteration(
              new SeparateIterableMapExternalNext(baseArray, square),
            );
          },
        ),
      ]),
    ],
  ),
];
