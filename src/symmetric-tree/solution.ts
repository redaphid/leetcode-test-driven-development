export interface TreeNode {
  val: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
}

const LSHIFT = 100000
const RSHIFT = Math.pow(LSHIFT, 10)

const getTreeVal = (depth: number, node?: TreeNode | null): number => {
  if (!node) return 0;
  if(!branchesBalanced(node.left, node.right)) throw new Error("Branches not balanced");
  return node.val + getTreeVal(depth * LSHIFT, node.left) + getTreeVal(depth *RSHIFT, node.right);
}

const branchesBalanced = (a: TreeNode | null | undefined, b: TreeNode | null | undefined) => {
  if (a && !b) return false;
  if (!a && b) return false;
  return true
}

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  try {
  return getTreeVal(1,root.left) === getTreeVal(1,root.right)
  } catch(e) {
    return false
  }
}
export { isSymmetric };
