function singleNumber(nums: number[]): number {
  const seen = new Set<number>()
  let lookingFor = Infinity
  
  for(let i=0; i< nums.length; i++){
      const current = nums[i]
      if(!seen.has(current)) {
          lookingFor = current
          seen.add(lookingFor)
          console.table({seen, lookingFor,current})
          continue
      }
      lookingFor = Infinity
  }
  return lookingFor
};








export {singleNumber}