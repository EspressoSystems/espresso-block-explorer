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

export const mapBenchSuites = [
  createBenchmarkSuite('iterable map implementations', [
    createBenchmarkCase('Array.map', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));
      for (let iter = 0; iter < n; iter++) {
        for (const value of baseArray.map(square)) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      }
    }),

    createBenchmarkCase('mapIterable', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));

      function* mapIterable<T, U>(iterable: Iterable<T>, f: (t: T) => U) {
        for (const t of iterable) {
          yield f(t);
        }
      }

      for (let iter = 0; iter < n; iter++) {
        for (const value of mapIterable(baseArray, square)) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      }
    }),

    createBenchmarkCase('SyntacticSugarMap', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));

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

      for (let iter = 0; iter < n; iter++) {
        for (const value of new SyntacticSugarMap(baseArray, square)) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      }
    }),

    createBenchmarkCase('CombinedIterableIteratorMap', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));

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

      for (let iter = 0; iter < n; iter++) {
        for (const value of new CombinedIterableIteratorMap(
          baseArray,
          square,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      }
    }),

    createBenchmarkCase(
      'SeparateIterableMapMethodNextUnwrap',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

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

        for (let iter = 0; iter < n; iter++) {
          for (const value of new SeparateIterableMapMethodNextUnwrap(
            baseArray,
            square,
          )) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            value === value;
          }
        }
      },
    ),

    createBenchmarkCase(
      'SeparateIterableMapExternalNextUnwrap',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

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

        class SeparateIterableMapExternalNextUnwrap<T, U>
          implements Iterable<U>
        {
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

        for (let iter = 0; iter < n; iter++) {
          for (const value of new SeparateIterableMapExternalNextUnwrap(
            baseArray,
            square,
          )) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            value === value;
          }
        }
      },
    ),

    createBenchmarkCase('SeparateIterableMapMethodNext', async (n: number) => {
      const baseArray = Array.from(simpleIterable(n));

      class SeparateIterableMapMethodNext<T, U> implements Iterable<U> {
        private iterable: Iterable<T>;
        private transformer: (t: T) => U;

        constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
          this.iterable = iterable;
          this.transformer = transformer;
        }

        [Symbol.iterator]() {
          return new SeparateIteratorMethodNext(
            this.iterable,
            this.transformer,
          );
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

      for (let iter = 0; iter < n; iter++) {
        for (const value of new SeparateIterableMapMethodNext(
          baseArray,
          square,
        )) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          value === value;
        }
      }
    }),

    createBenchmarkCase(
      'SeparateIterableMapExternalNext',
      async (n: number) => {
        const baseArray = Array.from(simpleIterable(n));

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
            return new SeparateIteratorExternalNext(
              this.iterable,
              this.transformer,
            );
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

        for (let iter = 0; iter < n; iter++) {
          for (const value of new SeparateIterableMapExternalNext(
            baseArray,
            square,
          )) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            value === value;
          }
        }
      },
    ),
  ]),
];
