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
    console.table(output)
    console.log(JSON.stringify(output, null, 2))
    const [first, second, third] = output
    expect(first).toEqual([3]);
    expect(second).toEqual([9, 20]);
    expect(third).toEqual([15, 7]); 
    expect(output).toHaveLength(3)
  });
  test("Example 2", () => {
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
      },
    };
    const output = levelOrder(input);
    const [first, second, third] = output
    console.table(output)
    console.log(JSON.stringify(output, null, 2))

    expect(first).toEqual([1]);
    expect(second).toEqual([2, 3]);
    expect(third).toEqual([4]);
  })
});
