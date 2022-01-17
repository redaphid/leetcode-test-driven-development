function removeDuplicates(nums: number[]): number {
  let last=-1, cell=0, unique=0

  for(let i = 0; i < nums.length; i++) {
    let current = nums[i]
    if(current !== last){ //This is a new number
      last = current
      nums[cell] = current
      cell++
      unique++
    }
    //[1,1,2,3]
    //[^ X X X] //New Number. current=1. last=0; unique++
    //[1 ^ X X] // Same number This'll be the cell we overwrite w/next value
  }

  return unique
};

export { removeDuplicates };
