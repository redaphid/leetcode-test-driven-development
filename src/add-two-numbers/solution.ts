import { ListNode } from "../util/linked-lists";
function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  let carry = 0;
  let h1 = l1
  let h2 = l2
  let l3 = new ListNode()
  while (  h1 !== null || h2 !== null) {
    l3.val = h1.val + h2.val
    l3.next = new ListNode()
    h1 = h1.next
    h2 = h2.next    
  }
  return l3;
}
export { addTwoNumbers };
