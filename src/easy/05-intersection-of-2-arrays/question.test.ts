import {intersect} from './solution'
describe("Intersection of 2 Arrays", () => {
  test("Example 1", () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    expect(intersect(nums1, nums2)).toEqual([2, 2]);
  })
  test("Example 2", () => {
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    expect(intersect(nums1, nums2)).toEqual([4, 9]);
  })
  test("Example 3", () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2];
    expect(intersect(nums1, nums2)).toEqual([2]);
  })
})