export interface TreeNode {
  val: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
}

let isSymmetric = function(root) {
  if (!root) return true; // An empty tree is symmetric
  return helper(root.left, root.right)
};
  
let helper = (l, r) => {
  if (!l && !r) return true; // If both are null, return true - we reached the end of tree.
  if (l?.val !== r?.val) return false; // Check left & right values. Question mark was added to take care of case that one of them is null.
  else return (helper(l.right, r.left) && helper(l.left, r.right)); // Call helper for their children, symmetrically (mirrored)
}

export { isSymmetric };
