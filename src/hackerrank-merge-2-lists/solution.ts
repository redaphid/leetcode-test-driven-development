class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode;
  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SinglyLinkedListNode;
  tail: SinglyLinkedListNode;
  constructor() {
    this.head = null;
    this.tail = null;
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
}

function printSinglyLinkedList(node: SinglyLinkedListNode, sep: string) {
  while (node != null) {
    console.log(String(node.data));

    node = node.next;

    if (node != null) {
      console.log(sep);
    }
  }
}

function hackerrankmerge2lists() {
  throw new Error("This solution has not been implemented yet.");
}
export { hackerrankmerge2lists };

