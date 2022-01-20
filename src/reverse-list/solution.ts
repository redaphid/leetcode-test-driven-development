import {ListNode} from '../util/linked-lists';
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import {arrayToList, listToArray} from '../util/linked-lists';
 function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  const original = listToArray(head);
  const reversed = original.reverse();
  return arrayToList(reversed);
};
export {reverseList}