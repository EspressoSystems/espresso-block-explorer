/**
 * LinkedListNode represents an individual Node within a Linked List.
 */
export default class LinkedList<T> {
  public readonly value: T;
  public readonly next: null | LinkedList<T>;

  constructor(value: T, next: null | LinkedList<T>) {
    this.value = value;
    this.next = next;
  }

  [Symbol.iterator]() {
    return iterateLinkedList(this);
  }
}

/**
 * pushLinkedList is a convenience function for adding to the head of a
 * linked list. It likely isn't necessary in normal use, but it does prevent
 * the user from having to invoke a constructor directly.
 */
export function pushLinkedList<T>(
  list: null | LinkedList<T>,
  value: T,
): LinkedList<T> {
  return new LinkedList(value, list);
}

/**
 * iterateLinkedList is a convenience function for iterating over the elements
 * of a LinkedList.  The benefit of this over just using the [Symbol.iterator]
 * is that this *can* also accept null, preventing the need of the user having
 * to do this.
 */
export function* iterateLinkedList<T>(list: null | LinkedList<T>) {
  if (list === null) {
    return;
  }

  for (let next: null | LinkedList<T> = list; next !== null; next = next.next) {
    yield next.value;
  }
}
