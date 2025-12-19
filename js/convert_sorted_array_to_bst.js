// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.


// Constraints:

// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums is sorted in a strictly increasing order.

// Index pointers
function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    function buildBST(left, right) {
        // Base case: invalid range
        if (left > right) return null;

        // Choose middle element as root for balanced tree
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);

        // Recursively build left and right subtrees
        root.left = buildBST(left, mid - 1);
        root.right = buildBST(mid + 1, right);

        return root;
    }

    return buildBST(0, nums.length - 1);
}

// Time Complexity: O(n) - visit each element once
// Space Complexity: O(log n) - recursion stack for balanced tree

// TreeNode class for Examples
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Example Usage:
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
console.log(sortedArrayToBST([1, 3]));
