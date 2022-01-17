import { maxProfit } from "./solution";
describe("maxProfit", () => {
  test("Example 1", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const bestPrice = 7;
    const result = maxProfit(prices);
    expect(result).toEqual(bestPrice);
  });
  test("Example 2", () => {
    const prices = [1, 2, 3, 4, 5];
    const bestPrice = 4;
    const result = maxProfit(prices);
    expect(result).toEqual(bestPrice);
  });
  test("Example 3", () => {
    const prices = [7, 6, 4, 3, 1];
    const bestPrice = 0;
    const result = maxProfit(prices);
    expect(result).toEqual(bestPrice);
  });
});
