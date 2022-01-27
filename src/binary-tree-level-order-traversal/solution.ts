import {TreeNode} from '../util/trees';

function nextLevel(left:TreeNode| null, right:TreeNode| null): number[][] {
  const thisLevel = []
  let levelAfter = []
  if(left?.val !== undefined  && left?.val !== null) {
    thisLevel.push(left.val)
  }
  if(right?.val !== undefined  && right?.val !== null) {
    thisLevel.push(right.val)
  }
  if(!right?.val && !left?.val){
    return [thisLevel]
  }
  if(right?.val) {
    levelAfter = [...levelAfter, ...nextLevel(right.left, right.right)]  
  }
  if(left?.val) {
    levelAfter = [...levelAfter, ...nextLevel(left.left, left.right)]
  }
  let betterLevelAfter = []
  for(let i = 0; i < levelAfter.length; i++){
    const level = levelAfter[i]
    if(level.length) {
      betterLevelAfter.push(level)
    }
  }
  return [thisLevel, ...betterLevelAfter]
}

 function levelOrder(root: TreeNode | null): number[][] {
   if(!root) return []
   return [[root.val], ...nextLevel(root.left, root.right)]

 }
  export {levelOrder}

  
