// Given the root of a binary tree, return the inorder traversal of its nodes' values.



// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,3,2]

// Explanation:
// 1
//  \ 
//   2
//  /
// 3

// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [4,2,6,5,7,1,3,9,8]

// Explanation:
//   1
// /   \
// 2     3
// / \    \
// 4  5     8
//   / \   / 
//  6   7 9

// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// Output: [1]


// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100


// Follow up: Recursive solution is trivial, could you do it iteratively?

// TreeNode class
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Example Usage:
// Example 1: [1,null,2,3]
const node3 = new TreeNode(3);
const node2 = new TreeNode(2, node3);
const root1 = new TreeNode(1, null, node2);
console.log(inorderTraversal(root1)); // [1,3,2]

// Example 2: [1,2,3,4,5,null,8,null,null,6,7,9]
const node9 = new TreeNode(9);
const node8 = new TreeNode(8, node9);
const node7 = new TreeNode(7);
const node6 = new TreeNode(6);
const node5 = new TreeNode(5, node6, node7);
const node4 = new TreeNode(4);
const node2b = new TreeNode(2, node4, node5);
const node3b = new TreeNode(3, null, node8);
const root2 = new TreeNode(1, node2b, node3b);
console.log(inorderTraversal(root2)); // [4,2,6,5,7,1,3,9,8]

// Example 3: []
console.log(inorderTraversal(null)); // []

// Example 4: [1]
const root4 = new TreeNode(1);
console.log(inorderTraversal(root4)); // [1]
