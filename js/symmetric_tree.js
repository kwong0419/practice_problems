// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false


// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100


// Follow up: Could you solve it both recursively and iteratively?


// RECURSIVE
function isSymmetricRecursive(root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;

    // Use a stack to simulate recursion without helper function
    // Stack stores pairs: [leftNode, rightNode, isComparison]
    const stack = [[root.left, root.right]];

    while (stack.length > 0) {
        const [left, right] = stack.pop();

        // Both null - continue
        if (!left && !right) continue;

        // One null, one not - not symmetric
        if (!left || !right) return false;

        // Values don't match - not symmetric
        if (left.val !== right.val) return false;

        // Push mirror pairs to check recursively
        stack.push([left.left, right.right]);
        stack.push([left.right, right.left]);
    }

    return true;
}

// Time Complexity: O(n) - visit each node once
// Space Complexity: O(h) - recursion stack where h is height
//                   O(log n) for balanced tree, O(n) for skewed tree


// ITERATIVE
function isSymmetricIterative(root) {
    if (!root) return true;

    // Use stack instead of queue - pop() is O(1) vs shift() which is O(n)
    const stack = [root.left, root.right];

    while (stack.length > 0) {
        const right = stack.pop();
        const left = stack.pop();

        // Both null - continue checking
        if (!left && !right) continue;

        // One null, one not - not symmetric
        if (!left || !right) return false;

        // Values don't match - not symmetric
        if (left.val !== right.val) return false;

        // Push pairs in mirror order
        // Compare outer nodes: left.left with right.right
        stack.push(left.left, right.right);
        // Compare inner nodes: left.right with right.left
        stack.push(left.right, right.left);
    }

    return true;
}

// Time Complexity: O(n) - visit each node once
// Space Complexity: O(w) - where w is max width of tree
//                   O(n) in worst case for complete binary tree

// TreeNode class for Example
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Example 1: Symmetric tree [1,2,2,3,4,4,3]
const tree1 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3),
        new TreeNode(4)
    ),
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(3)
    )
);

// Example 2: Not symmetric [1,2,2,null,3,null,3]
const tree2 = new TreeNode(1,
    new TreeNode(2,
        null,
        new TreeNode(3)
    ),
    new TreeNode(2,
        null,
        new TreeNode(3)
    )
);

console.log("Recursive Solution:");
console.log(isSymmetricRecursive(tree1)); // true
console.log(isSymmetricRecursive(tree2)); // false

console.log("\nIterative Solution:");
console.log(isSymmetricIterative(tree1)); // true
console.log(isSymmetricIterative(tree2)); // false
