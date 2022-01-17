import {rotate} from './problem';

test("Example 1", () => {
  let nums = [1, 2, 3, 4, 5, 6, 7], k =3   
  rotate(nums, k);
  expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
})

test("Example 2", () => {
  let nums = [-1,-100,3,99], k = 2
  rotate(nums, k);
  expect(nums).toEqual([3,99,-1,-100]);
})