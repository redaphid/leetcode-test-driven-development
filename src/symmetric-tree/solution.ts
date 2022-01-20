export interface TreeNode {
  val: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
}

const valsMatch = (a: TreeNode | null | undefined, b: TreeNode | null | undefined) => {
  console.log({a, b});  
  if(a && !b) return false;
  if(!a && b) return false;
  return a?.val === b?.val;
}

function isSymmetric(root: TreeNode | null): boolean {
  if(root === null) return true;
  if(!valsMatch(root.left, root.right)) false;

  return isSymmetric(root.left || null) && isSymmetric(root.right || null);
}
export { isSymmetric };
