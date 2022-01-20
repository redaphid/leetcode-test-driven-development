
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export const listToArray  = (list: ListNode | null): number[] => {
  const arr: number[] = [];
  while (list !== null) {
    console.log({list})
    arr.push(list.val);
    list = list.next;
  }
  console.log({arr})
  return arr;
}
export const arrayToList = (arr: number[]): ListNode | null => {  
  if (arr.length === 0) {
    return null;
  }
  const head = new ListNode(arr[0]);
  let node = head;
  for (let i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }
  return head;
}