import { firstbadversion } from "./solution";
describe("firstbadversion", () => {
  test("Example 1", () => {
    const n = 5
    const solution = firstbadversion(jest.fn().mockReturnValue(true));

    expect(solution(n)).toEqual(1);
  });
});
