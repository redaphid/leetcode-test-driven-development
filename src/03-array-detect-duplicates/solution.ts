function containsDuplicate(nums: number[]): boolean {
  let seen:any[] = [];
  
  for(let i=0; i< nums.length; i++){
      const n = nums[i]
      if(!seen[n]){
          seen[n] = 1
          continue
      }
      return true 
  }
  return false
};

export { containsDuplicate };