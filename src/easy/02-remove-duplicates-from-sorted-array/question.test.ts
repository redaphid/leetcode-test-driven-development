import { removeDuplicates } from "./question";

describe("Remove Duplicates from Sorted Array", () => {
  test("Example 1", () => {
    const nums = [1, 1, 2];
    const result = removeDuplicates(nums);
    expect(result).toBe(2);
    expect([...nums.slice(0, result)]).toEqual([1, 2]);
  });
  test("Example 2", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result = removeDuplicates(nums);
    expect(result).toBe(5);
    expect([...nums.slice(0, result)]).toEqual([0, 1, 2, 3, 4]);
  });
});

test("Example 3", () => {
  const nums =[1,1,2,3]
  const result = removeDuplicates(nums);
  expect(result).toBe(3);
  expect([...nums.slice(0, result)]).toEqual([1,2,3]);
})

