import {TreeNode} from '../util/trees';

function nextLevel(left:TreeNode| null, right:TreeNode| null): number[][] {
  if(!left && !right) return []
  return [[left?.val || 0, right?.val || 0], ...nextLevel(left?.left, left?.right), ...nextLevel(right?.left, right?.right)]
}

 function levelOrder(root: TreeNode | null): number[][] {
   if(!root) return []
   return [[root.val], ...nextLevel(root.left, root.right)]

 }
  export {levelOrder}

  
