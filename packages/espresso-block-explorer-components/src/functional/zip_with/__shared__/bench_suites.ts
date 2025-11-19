import {
  createBenchmarkCase,
  createBenchmarkSuite,
} from '@/functional/__shared__/bench';

function* simpleIterable(n: number) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

function* zipWithIterable<T, U, V>(
  iterableT: Iterable<T>,
  iterableU: Iterable<U>,
  f: (t: T, u: U) => V,
) {
  const it = iterableU[Symbol.iterator]();
  for (const t of iterableT) {
    const u = it.next();
    if (u.done) {
      return;
    }

    yield f(t, u.value);
  }
}

class SyntacticSugarZipWith<T, U, V> implements Iterable<V> {
  private iterableT: Iterable<T>;
  private iterableU: Iterable<U>;
  private zipper: (t: T, u: U) => V;

  constructor(
    iterableT: Iterable<T>,
    iterableU: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iterableT = iterableT;
    this.iterableU = iterableU;
    this.zipper = zipper;
  }

  *[Symbol.iterator]() {
    const itT = this.iterableT[Symbol.iterator]();
    const itU = this.iterableU[Symbol.iterator]();
    for (
      let t = itT.next(), u = itU.next();
      !t.done && !u.done;
      t = itT.next(), u = itU.next()
    ) {
      yield this.zipper(t.value, u.value);
    }
  }
}

class CombinedIterableIteratorZipWith<T, U, V> implements IterableIterator<V> {
  private iteratorT: Iterator<T>;
  private iteratorU: Iterator<U>;
  private zipper: (t: T, u: U) => V;
  constructor(
    iterableT: Iterable<T>,
    iterableU: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iteratorT = iterableT[Symbol.iterator]();
    this.iteratorU = iterableU[Symbol.iterator]();
    this.zipper = zipper;
  }

  [Symbol.iterator]() {
    return this;
  }

  next(): IteratorResult<V> {
    const { done: doneT, value: valueT } = this.iteratorT.next();
    const { done: doneU, value: valueU } = this.iteratorU.next();
    if (doneT || doneU) {
      return { done: true, value: undefined };
    }

    return { done: false, value: this.zipper(valueT, valueU) };
  }
}

class SeparateIterableZipWithMethodNextUnwrap<T, U, V> implements Iterable<V> {
  private iterableT: Iterable<T>;
  private iterableU: Iterable<U>;
  private zipper: (t: T, u: U) => V;

  constructor(
    iterableT: Iterable<T>,
    iterableU: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iterableT = iterableT;
    this.iterableU = iterableU;
    this.zipper = zipper;
  }

  [Symbol.iterator]() {
    return new SeparateIteratorMethodNextUnwrap(
      this.iterableT,
      this.iterableU,
      this.zipper,
    );
  }
}

class SeparateIteratorMethodNextUnwrap<T, U, V> implements Iterator<V> {
  private iteratorT: Iterator<T>;
  private iteratorU: Iterator<U>;
  private zipper: (t: T, u: U) => V;

  constructor(
    iterableT: Iterable<T>,
    iterableU: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iteratorT = iterableT[Symbol.iterator]();
    this.iteratorU = iterableU[Symbol.iterator]();
    this.zipper = zipper;
  }

  next(): IteratorResult<V> {
    const { done: doneT, value: valueT } = this.iteratorT.next();
    const { done: doneU, value: valueU } = this.iteratorU.next();
    if (doneT || doneU) {
      return { done: true, value: undefined };
    }

    return { done: false, value: this.zipper(valueT, valueU) };
  }
}

function mapNextUnwrap<T, U, V>(
  iteratorT: Iterator<T>,
  iteratorU: Iterator<U>,
  zipper: (t: T, u: U) => V,
): IteratorResult<V> {
  const { done: doneT, value: valueT } = iteratorT.next();
  const { done: doneU, value: valueU } = iteratorU.next();
  if (doneT || doneU) {
    return { done: true, value: undefined };
  }

  return { done: false, value: zipper(valueT, valueU) };
}

class SeparateIterableZipWithExternalNextUnwrap<T, U, V>
  implements Iterable<V>
{
  private iterableT: Iterable<T>;
  private iterableU: Iterable<U>;
  private zipper: (t: T, u: U) => V;

  constructor(
    iterableT: Iterable<T>,
    iterableU: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iterableT = iterableT;
    this.iterableU = iterableU;
    this.zipper = zipper;
  }

  [Symbol.iterator]() {
    return new SeparateIteratorExternalNextUnwrap(
      this.iterableT,
      this.iterableU,
      this.zipper,
    );
  }
}

class SeparateIteratorExternalNextUnwrap<T, U, V> implements Iterator<V> {
  private iteratorT: Iterator<T>;
  private iteratorU: Iterator<U>;
  private zipper: (t: T, u: U) => V;

  constructor(
    iterableT: Iterable<T>,
    iterableU: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iteratorT = iterableT[Symbol.iterator]();
    this.iteratorU = iterableU[Symbol.iterator]();
    this.zipper = zipper;
  }

  next(): IteratorResult<V> {
    return mapNextUnwrap(this.iteratorT, this.iteratorU, this.zipper);
  }
}

class SeparateIterableZipWithMethodNext<T, U, V> implements Iterable<V> {
  private iterableT: Iterable<T>;
  private iterableU: Iterable<U>;
  private zipper: (t: T, u: U) => V;

  constructor(
    iterableT: Iterable<T>,
    iterableU: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iterableT = iterableT;
    this.iterableU = iterableU;
    this.zipper = zipper;
  }

  [Symbol.iterator]() {
    return new SeparateIteratorMethodNext(
      this.iterableT,
      this.iterableU,
      this.zipper,
    );
  }
}

class SeparateIteratorMethodNext<T, U, V> implements Iterator<V> {
  private iteratorT: Iterator<T>;
  private iteratorU: Iterator<U>;
  private zipper: (t: T, u: U) => V;

  constructor(
    iterableT: Iterable<T>,
    iterableU: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iteratorT = iterableT[Symbol.iterator]();
    this.iteratorU = iterableU[Symbol.iterator]();
    this.zipper = zipper;
  }

  next(): IteratorResult<V> {
    const nextT = this.iteratorT.next();
    const nextU = this.iteratorU.next();
    if (nextT.done || nextU.done) {
      return { done: true, value: undefined };
    }
    return {
      done: false,
      value: this.zipper(nextT.value, nextU.value),
    };
  }
}

function mapNext<T, U, V>(
  iteratorT: Iterator<T>,
  iteratorU: Iterator<U>,
  zipper: (t: T, u: U) => V,
): IteratorResult<V> {
  const nextT = iteratorT.next();
  const nextU = iteratorU.next();
  if (nextT.done || nextU.done) {
    return { done: true, value: undefined };
  }

  return { done: false, value: zipper(nextT.value, nextU.value) };
}

class SeparateIterableZipWithExternalNext<T, U, V> implements Iterable<V> {
  private iterableT: Iterable<T>;
  private iterableU: Iterable<U>;
  private zipper: (t: T, u: U) => V;

  constructor(
    iterableT: Iterable<T>,
    iterableU: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iterableT = iterableT;
    this.iterableU = iterableU;
    this.zipper = zipper;
  }

  [Symbol.iterator]() {
    return new SeparateIteratorExternalNext(
      this.iterableT,
      this.iterableU,
      this.zipper,
    );
  }
}

class SeparateIteratorExternalNext<T, U, V> implements Iterator<V> {
  private iteratorT: Iterator<T>;
  private iteratorU: Iterator<U>;
  private zipper: (t: T, u: U) => V;

  constructor(
    iterableT: Iterable<T>,
    iterableU: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iteratorT = iterableT[Symbol.iterator]();
    this.iteratorU = iterableU[Symbol.iterator]();
    this.zipper = zipper;
  }

  next(): IteratorResult<V> {
    return mapNext(this.iteratorT, this.iteratorU, this.zipper);
  }
}

export const zipWithBenchSuites = [
  createBenchmarkSuite('iterable zipWith implementations', [
    createBenchmarkCase('zipWithIterable', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));

      for (const value of zipWithIterable(baseArray, baseArray, pair)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value === value;
      }
    }),

    createBenchmarkCase('SyntacticSugarZipWith', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));

      for (const value of new SyntacticSugarZipWith(
        baseArray,
        baseArray,
        pair,
      )) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value === value;
      }
    }),

    createBenchmarkCase(
      'CombinedIterableIteratorZipWith',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

        for (const value of new CombinedIterableIteratorZipWith(
          baseArray,
          baseArray,
          pair,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      },
    ),

    createBenchmarkCase(
      'SeparateIterableZipWithMethodNextUnwrap',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

        for (const value of new SeparateIterableZipWithMethodNextUnwrap(
          baseArray,
          baseArray,
          pair,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      },
    ),

    createBenchmarkCase(
      'SeparateIterableZipWithExternalNextUnwrap',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

        for (const value of new SeparateIterableZipWithExternalNextUnwrap(
          baseArray,
          baseArray,
          pair,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      },
    ),

    createBenchmarkCase(
      'SeparateIterableZipWithMethodNext',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

        for (const value of new SeparateIterableZipWithMethodNext(
          baseArray,
          baseArray,
          pair,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      },
    ),

    createBenchmarkCase(
      'SeparateIterableZipWithExternalNext',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

        for (const value of new SeparateIterableZipWithExternalNext(
          baseArray,
          baseArray,
          pair,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      },
    ),
  ]),
];
