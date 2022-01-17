import {singleNumber} from './solution';
describe("find the single number", () => {
  test("Example 1", () => {
    const nums = [2,2,1]
    const result = singleNumber(nums);
    expect(result).toBe(1);
  })
  test("Example 2", () => {
    const nums = [4,1,2,1,2]
    const result = singleNumber(nums);
    expect(result).toBe(4);
  })
  test("Example 3", () => {
    const nums = [1]
    const result = singleNumber(nums);
    expect(result).toBe(1);
  })
})