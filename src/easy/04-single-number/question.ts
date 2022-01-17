function singleNumber(nums: number[]) {
  return nums.reduce((acc, curr) => acc ^ curr, 0);
}

export {singleNumber}