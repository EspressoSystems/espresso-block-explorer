/**
 * foldRIterator is a foldR function that can be applied to an Iterator.
 */
export function foldRIterator<T, U>(
  combiner: (acc: U, element: T) => U,
  seed: U,
  iterator: Iterator<T>,
): U {
  const it = iterator;

  const next = it.next();
  if (next.done) {
    return seed;
  }

  return combiner(foldRIterator(combiner, seed, it), next.value);
}

/**
 * foldRIterable is a foldR function that can be applied to an Iterable.
 */
export function foldRIterable<T, U>(
  combiner: (acc: U, element: T) => U,
  seed: U,
  iterable: Iterable<T>,
): U {
  return foldRIterator(combiner, seed, iterable[Symbol.iterator]());
}

/**
 * foldLIterator is a foldL function that can be applied to an Iterator.
 */
export function foldLIterator<T, U>(
  combiner: (element: T, acc: U) => U,
  seed: U,
  iterator: Iterator<T>,
): U {
  const it = iterator;
  let result = seed;
  for (let next = it.next(); !next.done; next = it.next()) {
    result = combiner(next.value, result);
  }

  return result;
}
