import {
  mergeLists,
  SinglyLinkedList,
} from "./solution";
describe("mergeLists", () => {
  test("Example 1", () => {
    const l1 = new SinglyLinkedList([1, 2, 3]);
    const l2 = new SinglyLinkedList([3, 4]);
    const rl = mergeLists(l1, l2);
    const result = rl.values
    expect(result).toEqual([1,2,3,3,4]);
  });
  describe("Given 2 lists", () => {
    let l1, l2, result;
    describe("When both lists are null", () => {
      beforeEach(() => {
        result = mergeLists(l1, l2);
      });
      it("should return an empty string", () => {
        expect(result.values).toEqual([])
      });
    });
    describe("When the first list is null", () => {
      beforeEach(() => {
        l2 = new SinglyLinkedList([1]);
        result = mergeLists(l1, l2);
      });
      it("should return 1 element", () => {

        expect(result.values).toEqual([1]);
      });
    });
  });
});
