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
  test("When the string has a decimal point", () => {
    const input = "3.14159";
    const expected = 3;
    const actual = myAtoi(input);
    expect(actual).toEqual(expected);
  })
  test("When we get mixed signals re: the sign", () => {
    const input = "-+42";
    const expected = 0
    const actual = myAtoi(input);
    expect(actual).toEqual(expected);
  })
  test("When the sign is in the middle of the string", () => {
    const input = "   4-2";
    const expected = 0;
    const actual = myAtoi(input);
    expect(actual).toEqual(expected);
  })
  test("when the string is a mess, with signs and letters", () => {
    const input = "00000-42a1234"
    const expected = 0;
    const actual = myAtoi(input);
    expect(actual).toEqual(expected);
  })
  test("I guess we ignore letters now?", () => {
    const input = "42a1378"
    const expected = 42;
    const actual = myAtoi(input);
    expect(actual).toEqual(expected); 
  })
});
