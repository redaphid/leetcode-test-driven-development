import {containsDuplicate} from './solution';
describe("Detect duplicates", () => {
  test("Example 1", () => {
    const nums = [1, 2, 3, 1];
    const result = containsDuplicate(nums);
    expect(result).toBe(true);
  });
});
