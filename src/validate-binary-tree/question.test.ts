import { isValidBST } from "./solution";
describe("isValidBST", () => {
  test("Example 1", () => {
    const input = {
      val: 2,
      left: { val: 1 },
      right: { val: 3 },
    };
    const result = isValidBST(input);
    expect(result).toBe(true);
  });
  test("Example 2", () => {
    const input = {
      val: 5,
      left: { val: 1 },
      right: {
        val: 4,
        left: { val: 3 },
        right: { val: 6 },
      },
    };
    const result = isValidBST(input);
    expect(result).toBe(false);
  });
  test("Example 3", () => {
    //[5,4,6,null,null,3,7]
    const input = {
      val: 5,
      left: { val: 4 },
      right: {
        val: 6,
        left: { val: 3 },
        right: { val: 7 },
      },
    };
    const result = isValidBST(input);
    expect(result).toBe(false);
  });
});
