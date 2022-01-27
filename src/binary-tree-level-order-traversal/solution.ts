import { TreeNode } from "../util/trees";

const isDefined = (val) => {
  return val !== undefined && val !== null;
};
function nextLevel(left: TreeNode | null, right: TreeNode | null): number[][] | null {
  const thisLevel = [];
  let levelAfter = [];

  if (!isDefined(left) && !isDefined(right)) return null;

  if (isDefined(left?.val)) {
    thisLevel.push(left.val);
    const next = nextLevel(left.left, left.right);
    if (isDefined(next)) {
      levelAfter = [...levelAfter, ...next];
    }
  }

  if (isDefined(right?.val)) {
    thisLevel.push(right.val);
    const next = nextLevel(right.left, right.right);
    if (isDefined(next)) {
      levelAfter = [...levelAfter, ...next];
    }
  }
  let betterLevelAfter = [];
  for (let i = 0; i < levelAfter.length; i++) {
    const level = levelAfter[i];
    if (level.length) {
      betterLevelAfter.push(level);
    }
  }
  return [thisLevel, ...betterLevelAfter];
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const next = nextLevel(root.left, root.right);
  console.log({ root, next });
  if (!isDefined(next) || next?.length === 0) return [[root.val]];
  return [[root.val], ...next];
}
export { levelOrder };
