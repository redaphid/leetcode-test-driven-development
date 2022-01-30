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
    let array = [...this.nums]
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.nums = array
    return this.nums
  }
}

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/

export {Solution}