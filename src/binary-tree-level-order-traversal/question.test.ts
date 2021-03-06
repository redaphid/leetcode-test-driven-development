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
    const [first, second, third] = output;
    expect(first).toEqual([3]);
    expect(second).toEqual([9, 20]);
    expect(third).toEqual([15, 7]);
    expect(output).toHaveLength(3);
  });
  test("Example 2", () => {
    const input = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: {
            val: 5,
          },
          right: {
            val: 6,
          },
        },
        right: {
          val: 8,
        },
      },
      right: {
        val: 3,
      },
    };
    const output = levelOrder(input);
    const [first, second, third, fourth] = output;

    expect(first).toEqual([1]);
    expect(second).toEqual([2, 3]);
    expect(third).toEqual([4, 8]);
    expect(fourth).toEqual([5, 6]);
  });
  test("A tree with only the root should return the root, doubly-nested", () => {
    const input = { val: 1 };
    const output = levelOrder(input);
    const [first] = output;

    expect(first).toEqual([1]);
    expect(output.length).toBe(1)
  });

  test("Example 4", ()=>{
    const input = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
        },
      },
      right: {
        val: 3,
        right: {
          val: 5,
        },
      },
    }
    const output = levelOrder(input)
    const [first, second, third] = output
    expect(third).toEqual([4,5])
    expect(output).toHaveLength(3)
  });
});
