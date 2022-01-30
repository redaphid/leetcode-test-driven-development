import { countPrimes } from "./solution";
describe("countPrimes", () => {
  test("Example 1", () => {
    const input = 10;
    const expected = 4;
    const actual = countPrimes(input);
    expect(actual).toBe(expected);
  });
  test("Example 2", () => {
    const input = 0;
    const expected = 0;
    const actual = countPrimes(input);
    expect(actual).toBe(expected);
  });
  test("Example 3", () => {
    const input = 2;
    const expected = 0;
    const actual = countPrimes(input);
    expect(actual).toBe(expected);
  });
  test("Example 3", () => {
    const input = 3;
    const expected = 1;
    const actual = countPrimes(input);
    expect(actual).toBe(expected);
  });
  test("Example 4", () => {
    const input = 5;
    const expected = 2;
    const actual = countPrimes(input);
    expect(actual).toBe(expected);
  });
  test("Example 5", () => {
    const input = 10;
    const expected = 4;
    const actual = countPrimes(input);
    expect(actual).toBe(expected);
  });
});
