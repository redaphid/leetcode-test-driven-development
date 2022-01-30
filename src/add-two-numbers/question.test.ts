import { addTwoNumbers } from "./solution";
import { listToArray, arrayToList } from "../util/linked-lists";

describe("addTwoNumbers", () => {
  test("Example 1", () => {
    const l1 = arrayToList([2, 4, 3]);
    const l2 = arrayToList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(result.val).toEqual(7);
    expect(result.next.val).toEqual(0);
    expect(result.next.next.val).toEqual(8);
  });
});
