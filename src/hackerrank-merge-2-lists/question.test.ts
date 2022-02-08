import { mergeLists, SinglyLinkedList, printSinglyLinkedList } from "./solution";
describe("mergeLists", () => {
  test("Example 1", () => {
    const l1 = new SinglyLinkedList([1, 2, 3,]);
    const l2 = new SinglyLinkedList([3,4,]);
    const rl = mergeLists(l1.head, l2.head)
    const result = printSinglyLinkedList(rl, ' ')
    expect(result).toEqual("1 2 3 3 4")
  });
});
