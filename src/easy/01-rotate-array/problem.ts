/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], rotateBy: number): void {
  for(let i=0; i < rotateBy; i++) {
    nums.unshift(nums.pop()!);
    console.log("hi")
  }
};

export { rotate };
