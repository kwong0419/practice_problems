// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Example 1:
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

// Example 2:
// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There are two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.

// Example 3:
// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

function hasPathSum(root, targetSum) {
  if (root === null) return false

  // If it's a leaf node, check if the remaining targetSum equals the node's value
  if (root.left === null && root.right === null) {
    return targetSum === root.val
  }

  // Recursively check the left and right subtrees with the updated targetSum
  const newTargetSum = targetSum - root.val
  return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum)
}

// Time Complexity: O(n) where n is the number of nodes in the tree
// Space Complexity: O(h) where h is the height of the tree (due to recursion stack)

// Example usage:
// Define a simple binary tree node structure for testing
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// Tree for Example 1
let root1 = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))),
)

// Tree for Example 2
let root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))

// Tree for Example 3
let root3 = null

let root4 = new TreeNode(1)
console.log('Example 1:')
console.log(`Output: ${hasPathSum(root1, 22)}`) // Expected: true

console.log('Example 2:')
console.log(`Output: ${hasPathSum(root2, 5)}`) // Expected: false

console.log('Example 3:')
console.log(`Output: ${hasPathSum(root3, 0)}`) // Expected: false
