interface ListNode {
  data: number | undefined
  next: ListNode | undefined
  values: number[] | undefined
}
class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | undefined;
  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
  }
  get values() {
    let output = []
    output.push(this.data)
    let node = this as ListNode
    while (node != null) {
      output.push(node.data)
      node = node.next;
    }
    return output;
  }
}

class SinglyLinkedList {
  head: SinglyLinkedListNode;
  tail: SinglyLinkedListNode;
  get data() {
    return this.head.data
  }
  get next() {
    return this.head.next
  }
  constructor(values: number[]) {
    for (let v of values) {
      this.insertNode(v);
    }
  }

  insertNode(nodeData: number) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
  get values() {
    let output = []
    let node = this.head
    while (node != null) {
      output.push(node.data)
      node = node.next;
    }
    return output;
  }
  toString(){
    return this.values.join(' ')
  }
}

function mergeLists(
  head1: ListNode, head2: ListNode): ListNode {
  if (!head1 && !head2) return new SinglyLinkedList([]);
  if (!head1) return head2;
  if (!head2) return head1;
  const values = [
    ...head1.values,
   ...head2.values
  ].sort((a,b)=>a-b)

  return new SinglyLinkedList(values)
}
export { mergeLists, SinglyLinkedList };
