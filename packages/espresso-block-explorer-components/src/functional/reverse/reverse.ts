import LinkedList, {
  pushLinkedList,
} from '@/data_structures/linked_list/LinkedList';

/**
 * ReverseIteratorNaive is an Iterator that reverses the given Iterator via a
 * naive implementation.  In order to do this effectively, it needs to iterator
 * through the entire iterator and store the values in a stack before it can
 * reverse them.
 */
class ReverseIteratorNaive<T> implements Iterator<T> {
  private readonly iterator: Iterator<T>;
  private stack: null | LinkedList<T> = null;
  private done: boolean = false;

  constructor(iterator: Iterator<T>) {
    this.iterator = iterator;
  }

  next(): IteratorResult<T> {
    if (this.done) {
      return { done: true, value: undefined };
    }

    if (this.stack === null) {
      for (
        let next = this.iterator.next();
        !next.done;
        next = this.iterator.next()
      ) {
        this.stack = pushLinkedList(this.stack, next.value);
      }

      this.done = true;
    }

    const node = this.stack;
    if (node === null) {
      return { done: true, value: undefined };
    }

    this.stack = node.next;
    this.done = this.stack === null;
    return { done: false, value: node.value };
  }
}

/**
 * ReverseIterableNaive is an Iterable that reverses the given Iterable via a
 * naive implementation.  In order to do this effectively, it needs to iterator
 * through the entire iterator and store the values in a stack before it can
 * reverse them.
 */
class ReverseIterableNaive<T> implements Iterable<T> {
  private readonly iterable: Iterable<T>;

  constructor(iterable: Iterable<T>) {
    this.iterable = iterable;
  }

  [Symbol.iterator](): Iterator<T> {
    return new ReverseIteratorNaive(this.iterable[Symbol.iterator]());
  }
}

/**
 * ReverseIteratorArrayLike is an Iterator that reverses the given ArrayLike
 * object.  This is a more efficient implementation than the naive one, as it
 * can take advantage of the random access nature of the underlying storage
 * structure.
 */
class ReverseIteratorArrayLike<T> implements Iterator<T> {
  private readonly array: ArrayLike<T>;
  private index: number;

  constructor(array: ArrayLike<T>) {
    this.array = array;
    this.index = array.length;
  }

  next(): IteratorResult<T> {
    if (this.index === 0) {
      return { done: true, value: undefined };
    }

    this.index--;
    return { done: false, value: this.array[this.index] };
  }
}

class ReverseIterableArrayLike<T> implements Iterable<T> {
  private readonly array: ArrayLike<T>;

  constructor(array: ArrayLike<T>) {
    this.array = array;
  }

  [Symbol.iterator](): Iterator<T> {
    return new ReverseIteratorArrayLike(this.array);
  }
}

/**
 * reverseIterator is a reverse function that operates on Iterators.
 *
 * @note This may result in a naive implementation which may be forced to
 *       consume the entire iterator before it can reverse it.  As such it
 *       is unwise to provide an unbounded Iterator to this function.
 *
 * @warning This function may consume a substantial amount of memory if the
 *          Iterator is quite large.
 */
export function reverseIterator<T>(iterator: Iterator<T>): Iterator<T> {
  return new ReverseIteratorNaive(iterator);
}

/**
 * isArrayLike attempts to determine if the given Iterable is an ArrayLike
 * object.  This allows for a potential optimization in the reverse
 * implementation.
 */
function isArrayLike<T>(
  iterable: Iterable<T>,
): iterable is ArrayLike<T> & Iterable<T> {
  return (
    'length' in iterable &&
    typeof iterable.length === 'number' &&
    0 in iterable &&
    typeof iterable[0] !== 'undefined' &&
    iterable.length - 1 in iterable &&
    typeof (iterable as Record<number, T>)[iterable.length - 1] !== 'undefined'
  );
}

/**
 * reverseIterable is a reverse function that operates on Iterables.
 *
 * @note This may result in a naive implementation which may be forced to
 *       consume the entire iterator before it can reverse it.  As such it
 *       is unwise to provide an unbounded Iterable to this function.
 *
 * @warning This function may consume a substantial amount of memory if the
 *          Iterable is quite large.
 */
export function reverseIterable<T>(iterable: Iterable<T>): Iterable<T> {
  if (iterable instanceof Array) {
    return new ReverseIterableArrayLike(iterable);
  }

  if (isArrayLike(iterable)) {
    return new ReverseIterableArrayLike(iterable as ArrayLike<T>);
  }

  return new ReverseIterableNaive(iterable);
}
