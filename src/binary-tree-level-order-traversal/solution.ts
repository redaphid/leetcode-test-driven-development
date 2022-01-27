import { TreeNode } from "../util/trees";

const isDefined = (val) => {
  return val !== undefined && val !== null;
};

function nextLevel(depth:number, node: TreeNode | null, output:number[][]) {
  if(!isDefined(node?.val)) return null

  output[depth] = output[depth] || []
  output[depth].push(node.val)
  nextLevel(depth + 1, node.left, output)
  nextLevel(depth + 1, node.right, output)  
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let output = []
  nextLevel(0, root, output);
  return output
}
export { levelOrder };
