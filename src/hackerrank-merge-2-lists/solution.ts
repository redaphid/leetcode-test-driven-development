class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | undefined;
  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
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
  constructor(values: number[] | undefined = undefined) {
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
  getListString() {
    return printSinglyLinkedList(this.head, " ");
  }
}

function printSinglyLinkedList(node: SinglyLinkedListNode, sep: string) {
  let output: string = "";
  while (node != null) {
    output += node.data;

    node = node.next;

    if (node != null) {
      output += sep;
    }
  }
  return output;
}

function mergeLists(
  head1: SinglyLinkedListNode, head2: SinglyLinkedListNode): SinglyLinkedListNode {
  if (!head1 && !head2) return new SinglyLinkedList();
  if (!head1) return head2;
  if (!head2) return head1;
}

export { mergeLists, printSinglyLinkedList, SinglyLinkedList };
