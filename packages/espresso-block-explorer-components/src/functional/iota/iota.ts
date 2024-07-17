import { takeIterable } from '../take/take';
import { zeroAndGreater } from '../zero_and_greater/zero_and_greater';
/**
 * iota represents a sequence of integers that adhere to the sequence
 * {0, 1, ..., n-2, n-1}
 * @param count the number to bound the ending of the sequence.
 */
export function iota(count: number): Iterable<number> {
  return takeIterable(zeroAndGreater(), Math.ceil(count));
}
