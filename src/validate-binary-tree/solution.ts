export interface TreeNode {
  val: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
}

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true
  if(!root.left && !root.right) return true
  const {val} = root
  if(root.left && root.left.val >= val) return false
  if(root.right && root.right.val <= val) return false
  return isValidBST(root.left || null) && isValidBST(root.right || null)
}

export { isValidBST };
