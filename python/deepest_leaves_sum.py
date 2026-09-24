# Given the root of a binary tree, return the sum of values of its deepest leaves.

# Example 1:

# Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
# Output: 15

# Example 2:

# Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
# Output: 19

# Constraints:

# The number of nodes in the tree is in the range [1, 10^4].
# 1 <= Node.val <= 100

from python.count_complete_tree_nodes import TreeNode


def deepestLeavesSum(root):
    if not root:
        return 0

    queue = [root]
    while queue:
        level_sum = 0
        next_level = []
        for node in queue:
            level_sum += node.val
            if node.left:
                next_level.append(node.left)
            if node.right:
                next_level.append(node.right)
        queue = next_level

    return level_sum

# Time Complexity: O(n), where n is the number of nodes in the tree. We visit each node once.
# Space Complexity: O(m), where m is the maximum number of nodes at any level in the tree -
# In the worst case, this could be O(n/2) for a complete binary tree, which simplifies to O(n).

# Example Usage:
root1 = TreeNode(1)
root1.left = TreeNode(2)
root1.right = TreeNode(3)
root1.left.left = TreeNode(4)
root1.left.right = TreeNode(5)
root1.right.right = TreeNode(6)
root1.left.left.left = TreeNode(7)
root1.right.right.right = TreeNode(8)
print(deepestLeavesSum(root1))  # 15

root2 = TreeNode(6)
root2.left = TreeNode(7)
root2.right = TreeNode(8)
root2.left.left = TreeNode(2)
root2.left.right = TreeNode(7)
root2.right.left = TreeNode(1)
root2.right.right = TreeNode(3)
root2.left.right.left = TreeNode(9)
root2.left.right.right = TreeNode(1)
root2.right.right.right = TreeNode(4)
root2.right.right.right.right = TreeNode(5)
print(deepestLeavesSum(root2))  # 19