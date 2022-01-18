import { myAtoi } from "./solution";
describe("myAtoi", () => {
  test("Example 1", () => {
    const input = "42";
    const expected = 42;
    const actual = myAtoi(input);
    expect(actual).toEqual(expected);
  });
  test("Example 2", () => {
    const input = "   -42";
    const expected = -42;
    const actual = myAtoi(input);
    expect(actual).toEqual(expected);
  });
  test("Example 3", () => {
    const input = "4193 with words";
    const expected = 4193;
    const actual = myAtoi(input);
    expect(actual).toEqual(expected);
  });
  test("Example 4", () => {
    const input = "words and 987";
    const expected = 0;
    const actual = myAtoi(input);
    expect(actual).toEqual(expected);
  });
  test("When the resulting # is too large", () => {
    const input = "2147483699948";
    const expected = 2147483647;
    const actual = myAtoi(input);
    expect(actual).toEqual(expected);
  })
  test("When the resulting # is too small", () => {
    const input = "-21474836948";
    const expected = -2147483648;
    const actual = myAtoi(input);
    expect(actual).toEqual(expected);
  })
});
