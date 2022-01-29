function maxSubArray(nums: number[]): number {
  let max = nums[0];
  for(let start = 0; start < nums.length; start++) {

    for(let end = start; end < nums.length; end++){
      const subArray = nums.slice(start, end + 1);
      const sum = subArray.reduce((a, b) => a + b, 0);
      max = Math.max(max, sum);
    }
  }
  return max

};

  export {maxSubArray}

  
