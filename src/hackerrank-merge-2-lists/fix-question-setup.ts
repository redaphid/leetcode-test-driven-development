
function readLine(): string {
  return inputLines[currentLine++];
}

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
}
function mergeLists(head1: SinglyLinkedListNode, head2: SinglyLinkedListNode): SinglyLinkedListNode {
    return head1
}

function printSinglyLinkedList(node: SinglyLinkedListNode, sep: string) {
    let output:string = ''
  while (node != null) {
      output += node.data  

    node = node.next;

    if (node != null) {
      output+=sep
    }
  }
  console.log(output)
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});



function main() {
  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llist1Count = parseInt(readLine(), 10);

    let llist1 = new SinglyLinkedList([]);

    for (let i = 0; i < llist1Count; i++) {
      const llist1Item = parseInt(readLine(), 10);
      llist1.insertNode(llist1Item);
    }

    const llist2Count = parseInt(readLine(), 10);

    let llist2 = new SinglyLinkedList([]);

    for (let i = 0; i < llist2Count; i++) {
      const llist2Item = parseInt(readLine(), 10);
      llist2.insertNode(llist2Item);
    }

    let llist3 = mergeLists(llist1.head, llist2.head);

    printSinglyLinkedList(llist3, " ");
  }
}