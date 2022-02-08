function hackerrankmerge2lists() {
  throw new Error("This solution has not been implemented yet.");
}
export { hackerrankmerge2lists };

function readLine(): string {
  return inputLines[currentLine++];
}

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

function mergeLists(head1: SinglyLinkedListNode, head2: SinglyLinkedListNode): SinglyLinkedListNode {
  return new SinglyLinkedListNode(0);
}

function main() {
  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llist1Count = parseInt(readLine(), 10);

    let llist1 = new SinglyLinkedList();

    for (let i = 0; i < llist1Count; i++) {
      const llist1Item = parseInt(readLine(), 10);
      llist1.insertNode(llist1Item);
    }

    const llist2Count = parseInt(readLine(), 10);

    let llist2 = new SinglyLinkedList();

    for (let i = 0; i < llist2Count; i++) {
      const llist2Item = parseInt(readLine(), 10);
      llist2.insertNode(llist2Item);
    }

    let llist3 = mergeLists(llist1.head, llist2.head);

    printSinglyLinkedList(llist3, " ");
  }
}
