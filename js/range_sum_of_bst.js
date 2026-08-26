// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

 

// Example 1:


// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// Example 2:


// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 10^4].
// 1 <= Node.val <= 10^5
// 1 <= low <= high <= 10^5
// All Node.val are unique.

/**
 * 
 * @param {TreeNode} root 
 * @param {number} low 
 * @param {number} high 
 * @returns 
 */
function rangeSumBST(root, low, high) {
    let sum = 0;
    
    if (!root) {
        return 0;
    }

    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }

    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high);
    }

    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }

    return sum;
}

// Time Complexity: O(n) where n is the number of nodes in the tree
// Space Complexity: O(h) where h is the height of the tree


// Example Usage:
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


const root1 = new TreeNode(10, 
    new TreeNode(5, new TreeNode(3), new TreeNode(7)), 
    new TreeNode(15, null, new TreeNode(18))
);
console.log(rangeSumBST(root1, 7, 15)); // 32

const root2 = new TreeNode(10, 
    new TreeNode(5, new TreeNode(3, new TreeNode(1), new TreeNode(4)), new TreeNode(7, new TreeNode(6))), 
    new TreeNode(15, new TreeNode(13), new TreeNode(18))
);
console.log(rangeSumBST(root2, 6, 10)); // 23

