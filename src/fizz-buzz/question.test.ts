import { fizzBuzz } from "./solution";

describe("fizzBuzz", () => {
  test("Example 1", () => {
    const input = 3;
    const result = fizzBuzz(input);
    expect(result).toEqual(["1", "2", "Fizz"]);
  });
  test("Example 2", () => {
    const input = 5;
    const result = fizzBuzz(input);
    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });
  test("Example 3", () => {
    const input = 15;
    const expected = [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ];
    const result = fizzBuzz(15);
    expect(result).toEqual(expected);
  });
});
