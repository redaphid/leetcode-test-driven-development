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

  constructor(values:number[]){   
    for (let v of values){
      this.insertNode(v)
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
  return output
}

function mergeLists(head1: SinglyLinkedListNode, head2: SinglyLinkedListNode): SinglyLinkedListNode {
  return head1
}

export { mergeLists, printSinglyLinkedList, SinglyLinkedList };
