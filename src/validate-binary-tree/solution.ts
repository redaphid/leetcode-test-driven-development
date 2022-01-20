export interface TreeNode {
  val: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
}

function isValidBST(root?: TreeNode | null): boolean {
  if(!root) return true;
  const check = (min:number, max:number, node?: TreeNode | null): boolean => {
    if(!node) return true
    if(node.val <= min) return false
    if(node.val >= max) return false
    return check(min, node.val, node.left) && check(node.val, max, node.right)
  }
  return check(-Infinity, Infinity, root)
}

export { isValidBST };
