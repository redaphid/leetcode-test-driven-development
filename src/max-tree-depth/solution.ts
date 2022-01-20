export interface TreeNode {
  val: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  
  const walk = (n)=>{
    if (!n.left && !n.right) return 1
    let left = 0
    let right = 0
    if (n.left) left = walk(n.left)
    if (n.right) right = walk(n.right)
    return Math.max(left, right) + 1
  }

  return walk(root)
}
export { maxDepth };
