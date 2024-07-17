/**
 * ZipWithIterator is an Iterator that combines two Iterators into a single
 * Iterator by applying the given zipper function to both arguments. The order
 * of the arguments of the zipper function corresponds to the order of the given
 * Iterators.
 *
 * We opted to use a class implementation instead of a function based
 * implementation as it provides benefits in terms of type inference, and
 * prevents extended scopes from being created.
 *
 * Additionally, benchmarks have shown that a separate class implementation for
 * the Iterator and Iterable is faster than combined, or syntactic sugar
 * implementations.
 */
class ZipWithIterator<T, U, V> implements Iterator<V> {
  private readonly iterator1: Iterator<T>;
  private readonly iterator2: Iterator<U>;
  private readonly zipper: (t: T, u: U) => V;

  constructor(
    iterator1: Iterator<T>,
    iterator2: Iterator<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iterator1 = iterator1;
    this.iterator2 = iterator2;
    this.zipper = zipper;
  }

  next(): IteratorResult<V> {
    const value1 = this.iterator1.next();
    const value2 = this.iterator2.next();

    if (value1.done || value2.done) {
      return { done: true, value: undefined };
    }

    return { done: false, value: this.zipper(value1.value, value2.value) };
  }
}

/**
 * ZipWithIterable is an Iterable that combines two Iterables into a single
 * Iterable by applying the given zipper function to both arguments. The order
 * of the arguments of the zipper function corresponds to the order of the given
 * Iterables.
 *
 * We opted to use a class implementation instead of a function based
 * implementation as it provides benefits in terms of type inference, and
 * prevents extended scopes from being created.
 *
 * Additionally, benchmarks have shown that a separate class implementation for
 * the Iterator and Iterable is faster than combined, or syntactic sugar
 * implementations.
 */
class ZipWithIterable<T, U, V> implements Iterable<V> {
  private readonly iterable1: Iterable<T>;
  private readonly iterable2: Iterable<U>;
  private readonly zipper: (t: T, u: U) => V;

  constructor(
    iterable1: Iterable<T>,
    iterable2: Iterable<U>,
    zipper: (t: T, u: U) => V,
  ) {
    this.iterable1 = iterable1;
    this.iterable2 = iterable2;
    this.zipper = zipper;
  }

  [Symbol.iterator](): Iterator<V> {
    return new ZipWithIterator(
      this.iterable1[Symbol.iterator](),
      this.iterable2[Symbol.iterator](),
      this.zipper,
    );
  }
}

/**
 * zipWithIterator is a function that combines two Iterators into a single
 * Iterator by applying the given zipper function to both arguments. The order
 * of the arguments of the zipper function corresponds to the order of the given
 * Iterators.
 */
export function zipWithIterator<T, U, V>(
  iterator1: Iterator<T>,
  iterator2: Iterator<U>,
  zipper: (t: T, u: U) => V,
): Iterator<V> {
  return new ZipWithIterator(iterator1, iterator2, zipper);
}

/**
 * zipWithIterable is a function that combines two Iterables into a single
 * Iterable by applying the given zipper function to both arguments. The order
 * of the arguments of the zipper function corresponds to the order of the given
 * Iterables.
 */
export function zipWithIterable<T, U, V>(
  iterable1: Iterable<T>,
  iterable2: Iterable<U>,
  zipper: (t: T, u: U) => V,
): Iterable<V> {
  return new ZipWithIterable(iterable1, iterable2, zipper);
}
