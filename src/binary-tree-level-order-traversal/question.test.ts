import { levelOrder } from "./solution";
describe("levelOrder", () => {
  test("Example 1", () => {
    const input = {
      val: 3,
      left: {
        val: 9,
      },
      right: {
        val: 20,
        left: {
          val: 15,
        },
        right: {
          val: 7,
        },
      },
    };
    const output = levelOrder(input);
    expect(output).toEqual([[3], [9, 20], [15, 7]]);
  });
});
