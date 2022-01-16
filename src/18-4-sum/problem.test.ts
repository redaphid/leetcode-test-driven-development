import { fourSum } from "./problem";
test("Example 1", () => {
   const nums = [1,0,-1,0,-2,2]
   const target = 0;
   const result = fourSum(nums, target);
    expect(result).toEqual(
        expect.arrayContaining([
            [-2, -1, 1, 2],
            [-2, 0, 0, 2],
            [-1, 0, 0, 1]
        ])
    );
})

test("Example 2", () => {
 const nums =[2,2,2,2,2,2]
  const target = 8;
  const result = fourSum(nums, target);
  expect(result).toEqual(
    expect.arrayContaining([
       [2,2,2,2]
    ])
  )
})

test("Example 3", () => {
  const nums = [0,0,0,0]
  const target = 0;
  const result = fourSum(nums, target);
  expect(result).toEqual(
    expect.arrayContaining([
       [0,0,0,0]
    ])
  )
})