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

import { ListNode } from "../util/linked-lists";

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let n = head as any
  while(n) {
    if(n.seen) return true
    n.seen = true
    n = n.next
  }
  return false
}

export { hasCycle };
