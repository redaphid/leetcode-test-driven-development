import { ListNode } from "../util/linked-lists";
function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  let l3 = new ListNode();
  let h1 = l1
  let h2 = l2
  let h3 = l3

  let carry = 0
  while (  h1 || h2 ) {
    h3.next = new ListNode()
    h3 = h3.next
    
    let sum = (h1?.val || 0) + (h2?.val || 0) + carry
    carry = 0  
    h3.val = sum % 10
    if(h3.val < sum) {
      carry = 1
    }
    
    h1 = h1?.next
    h2 = h2?.next   
  }
  if(carry) {
    h3.next = new ListNode(carry)
  }
  return l3.next;
}
export { addTwoNumbers };
