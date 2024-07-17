import { dropIterable } from '../drop/drop';
import { zeroAndGreater } from '../zero_and_greater/zero_and_greater';

/**
 * inf represents a potentially infinite sequence of positive integers
 */
export function inf(): Iterable<number> {
  return dropIterable(zeroAndGreater(), 1);
}
