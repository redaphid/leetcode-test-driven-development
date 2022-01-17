import {containsDuplicates} from './question';
describe("Detect duplicates", () => {
  test("Example 1", () => {
    const nums = [1, 2, 3, 1];
    const result = containsDuplicates(nums);
    expect(result).toBe(true);
  });
});
