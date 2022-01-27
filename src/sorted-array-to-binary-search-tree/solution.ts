import { TreeNode } from "../util/trees";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const numberOfLevels = Math.ceil(Math.log2(nums.length));
  console.log({ numberOfLevels });
  let levels = [];
  for (let i = 0; i < nums.length; i++) {
    const l = i % numberOfLevels;
    levels[l] = levels[l] || [];
    levels[l].push({ val: nums[i] });
  }
  console.log(JSON.stringify(levels, null, 2))
  let root = levels.pop()
  let l
  
  while(l = levels.pop()){
    const [left,right] = l
    root.left = left
    root.right = right
    console.log(JSON.stringify({root, left, right}))
  }

  return {
    val: 0,
    left: {
      val: -3,
      left: {
        val: -10,
      },
    },
    right: {
      val: 9,
      left: {
        val: 5,
      },
    },
  };
}
export { sortedArrayToBST };
