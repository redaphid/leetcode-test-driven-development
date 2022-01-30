class Solution {
  nums: number[]
  constructor( private originals: number[]){
    this.nums = [...originals]
  }

  reset(): number[] {
    this.nums = [...this.originals]
    return this.nums
  }

  shuffle(): number[] {
    return this.nums.sort(() => Math.random() - 0.5)
  }
}

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/

export {Solution}