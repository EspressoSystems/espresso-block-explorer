import { bench, describe } from 'vitest';

const N = 100000;

function* simpleIterable() {
  for (let i = 0; i < N; i++) {
    yield i;
  }
}

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

describe('iterable map implementations', () => {
  const baseArray = Array.from(simpleIterable());
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

  bench('zipWithIterable', () => {
    for (const value of zipWithIterable(baseArray, baseArray, pair)) {
      value === value;
    }
  });

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

  bench('SyntacticSugarZipWith', () => {
    for (const value of new SyntacticSugarZipWith(baseArray, baseArray, pair)) {
      value === value;
    }
  });

  class CombinedIterableIteratorZipWith<T, U, V>
    implements IterableIterator<V>
  {
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

  bench('CombinedIterableIteratorZipWith', () => {
    for (const value of new CombinedIterableIteratorZipWith(
      baseArray,
      baseArray,
      pair,
    )) {
      value === value;
    }
  });

  class SeparateIterableZipWithMethodNextUnwrap<T, U, V>
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

  bench('SeparateIterableZipWithMethodNextUnwrap', () => {
    for (const value of new SeparateIterableZipWithMethodNextUnwrap(
      baseArray,
      baseArray,
      pair,
    )) {
      value === value;
    }
  });

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

  bench('SeparateIterableZipWithExternalNextUnwrap', () => {
    for (const value of new SeparateIterableZipWithExternalNextUnwrap(
      baseArray,
      baseArray,
      pair,
    )) {
      value === value;
    }
  });

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
      return { done: false, value: this.zipper(nextT.value, nextU.value) };
    }
  }

  bench('SeparateIterableZipWithMethodNext', () => {
    for (const value of new SeparateIterableZipWithMethodNext(
      baseArray,
      baseArray,
      pair,
    )) {
      value === value;
    }
  });

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

  bench('SeparateIterableZipWithExternalNext', () => {
    for (const value of new SeparateIterableZipWithExternalNext(
      baseArray,
      baseArray,
      pair,
    )) {
      value === value;
    }
  });
});
