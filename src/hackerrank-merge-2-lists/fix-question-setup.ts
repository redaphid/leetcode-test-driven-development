
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

function readLine(): string {
  return inputLines[currentLine++];
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
    const l1count = parseInt(readLine(), 10);

    let l1 = new SinglyLinkedList([]);

    for (let i = 0; i < l1count; i++) {
      const val = parseInt(readLine(), 10);
      l1.insertNode(val);
    }

    const l2Count = parseInt(readLine(), 10);

    let l2 = new SinglyLinkedList([]);

    for (let i = 0; i < l2Count; i++) {
      const val = parseInt(readLine(), 10);
      l2.insertNode(val);
    }

    let l3 = mergeLists(l1.head, l2.head);

    console.log(l3.values.join(' '))
  }
}