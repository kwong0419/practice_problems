// Given a binary tree, determine if it is height-balanced.

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:

// Input: root = []
// Output: true


// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -10^4 <= Node.val <= 10^4

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isBalanced(root) {
    // DFS function defined within the scope of isBalanced
    // Returns height if balanced, -1 if not balanced
    const dfs = (node) => {
        if (!node) return 0;

        const left = dfs(node.left);
        if (left === -1) return -1;

        const right = dfs(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    };

    return dfs(root) !== -1;
}

// Time Complexity: O(n) - each node visited once
// Space Complexity: O(h) - recursion stack where h is height

// Helper function to build tree from array (level-order)
function buildTree(arr) {
    if (!arr || arr.length === 0) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();

        // Add left child
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        // Add right child
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

// Example Usage:
console.log(isBalanced(buildTree([3, 9, 20, null, null, 15, 7]))); // true
console.log(isBalanced(buildTree([1, 2, 2, 3, 3, null, null, 4, 4]))); // false
console.log(isBalanced(buildTree([]))); // true

