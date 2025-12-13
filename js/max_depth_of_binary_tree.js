// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2


// Constraints:

// The number of nodes in the tree is in the range [0, 10^4].
// -100 <= Node.val <= 100

function maxDepth(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// Time Complexity: O(n)
// Space Complexity: O(h)

// Worse case are very deep trees since we are using recursion

// Example Usage:
console.log(maxDepth([3, 9, 20, null, null, 15, 7])); // Output: 3
console.log(maxDepth([1, null, 2])); // Output: 2

