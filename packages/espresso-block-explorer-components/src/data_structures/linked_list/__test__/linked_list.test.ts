import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import LinkedList, { iterateLinkedList, pushLinkedList } from '../linked_list';

describe('LinkedList', () => {
  describe('iotaAsync', () => {
    it('standard linked list tests', async () => {
      let ls: null | LinkedList<number> = null;

      expect(Array.from(iterateLinkedList(ls))).deep.equals([]);
      ls = pushLinkedList(ls, 1);
      expect(Array.from(iterateLinkedList(ls))).deep.equals([1]);
      ls = pushLinkedList(ls, 2);
      expect(Array.from(iterateLinkedList(ls))).deep.equals([2, 1]);
      ls = pushLinkedList(ls, 3);
      expect(Array.from(iterateLinkedList(ls))).deep.equals([3, 2, 1]);
      ls = pushLinkedList(ls, 4);
      expect(Array.from(iterateLinkedList(ls))).deep.equals([4, 3, 2, 1]);
      ls = pushLinkedList(ls, 5);
      expect(Array.from(iterateLinkedList(ls))).deep.equals([5, 4, 3, 2, 1]);
      expect(Array.from(iterateLinkedList(ls.next))).deep.equals([4, 3, 2, 1]);
      expect(Array.from(iterateLinkedList(ls.next?.next ?? null))).deep.equals([
        3, 2, 1,
      ]);
      expect(
        Array.from(iterateLinkedList(ls.next?.next?.next ?? null)),
      ).deep.equals([2, 1]);
      expect(
        Array.from(iterateLinkedList(ls.next?.next?.next?.next ?? null)),
      ).deep.equals([1]);
      expect(
        Array.from(iterateLinkedList(ls.next?.next?.next?.next?.next ?? null)),
      ).deep.equals([]);

      expect(Array.from(ls)).deep.equals([5, 4, 3, 2, 1]);
    });
  });
});
