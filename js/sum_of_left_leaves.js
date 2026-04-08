// Given the root of a binary tree, return the sum of all left leaves.

// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

// Example 2:

// Input: root = [1]
// Output: 0


// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -1000 <= Node.val <= 1000

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function sumOfLeftLeaves(root) {
    if (!root) {
        return 0
    }

    let totalSum = 0
    if (root.left && !root.left.left && !root.left.right) {
        totalSum += root.left.val
    }

    totalSum += sumOfLeftLeaves(root.left)
    totalSum += sumOfLeftLeaves(root.right)

    return totalSum
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Helper to build tree from array (from leetcode)
function buildTree(arr) {
    if (!arr || arr.length === 0) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const node = queue.shift();
        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Example Usage:
console.log(sumOfLeftLeaves(buildTree([3, 9, 20, null, null, 15, 7]))); // 24
console.log(sumOfLeftLeaves(buildTree([1]))); // 0
