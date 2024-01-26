/**
 * LinkedListNode represents an individual Node within a Linked List.
 */
export default class LinkedList<T> {
    readonly value: T;
    readonly next: null | LinkedList<T>;
    constructor(value: T, next: null | LinkedList<T>);
    [Symbol.iterator](): Generator<T, void, unknown>;
}
/**
 * pushLinkedList is a convenience function for adding to the head of a
 * linked list. It likely isn't necessary in normal use, but it does prevent
 * the user from having to invoke a constructor directly.
 */
export declare function pushLinkedList<T>(list: null | LinkedList<T>, value: T): LinkedList<T>;
/**
 * iterateLinkedList is a convenience function for iterating over the elements
 * of a LinkedList.  The benefit of this over just using the [Symbol.iterator]
 * is that this *can* also accept null, preventing the need of the user having
 * to do this.
 */
export declare function iterateLinkedList<T>(list: null | LinkedList<T>): Generator<T, void, unknown>;
