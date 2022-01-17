function removeDuplicates(nums: number[]): number {
  let fast=-1, slow=-1, unique=0
  for(let i = 0; i < nums.length; i++) {
    let current = nums[i]
    if(current !== fast){
      fast = current
      unique++
      continue
    }
    nums[unique] = nums[i+1]
  }
  return unique
};

export { removeDuplicates };
