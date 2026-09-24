// Given the root of a binary tree, return the sum of values of its deepest leaves.

// Example 1:

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19

// Constraints:

// The number of nodes in the tree is in the range [1, 10^4].
// 1 <= Node.val <= 100

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function deepestLeavesSum(root) {
  if (!root) return 0

  let queue = [root]
  let sum = 0
  while (queue.length > 0) {
    sum = 0
    let levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return sum
}

// Time Complexity: O(n), where n is the number of nodes in the tree. We visit each node once
// Space Complexity: O(m), where m is the maximum number of nodes at any level in the tree -
// In the worst case, this could be O(n/2) for a complete binary tree, which simplifies to O(n)

// Example Usage:
let root1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, new TreeNode(7)), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6, null, new TreeNode(8))),
)
console.log(deepestLeavesSum(root1)) // 15

let root2 = new TreeNode(
  6,
  new TreeNode(7, new TreeNode(2, new TreeNode(9)), new TreeNode(7, new TreeNode(1), new TreeNode(4))),
  new TreeNode(8, new TreeNode(1), new TreeNode(3, null, new TreeNode(5))),
)
console.log(deepestLeavesSum(root2)) // 19
