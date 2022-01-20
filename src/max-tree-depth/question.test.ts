import { TreeNode, maxDepth } from "./solution";
describe("maxDepth", () => {
  test("Example 1", () => {
    // [3,9,20,null,null,15,7]
    const root: TreeNode = {
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
    const result = maxDepth(root);
    expect(result).toBe(3);
  });
});
