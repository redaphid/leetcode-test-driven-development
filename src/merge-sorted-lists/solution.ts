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

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if(!list1) return list2
  if(!list2) return list1

  const flatNodes:ListNode[] = []
  let h1 = list1 as (ListNode | null)
  while(h1){
    flatNodes.push(h1)
    h1 = h1.next
  }

  let h2 = list2 as (ListNode | null)
  while(h2){
    flatNodes.push(h2)
    h2 = h2.next
  }

  const sortedFlatNodes = flatNodes.sort((a,b) => a.val - b.val)
  let sortedList = sortedFlatNodes.pop()!
  sortedFlatNodes.reduce((prev, curr) => {
    prev.next = curr
    prev.val = curr.val
    return curr

  }, sortedList)
  
  const lastNode = sortedFlatNodes.pop()
  lastNode!.next = null
  return sortedList
};

export { mergeTwoLists };