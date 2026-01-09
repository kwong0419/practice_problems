# Given the root of a complete binary tree, return the number of the nodes in the tree.

# According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

# Design an algorithm that runs in less than O(n) time complexity.


# Example 1:


# Input: root = [1,2,3,4,5,6]
# Output: 6

# Example 2:

# Input: root = []
# Output: 0

# Example 3:

# Input: root = [1]
# Output: 1


# Constraints:

# The number of nodes in the tree is in the range [0, 5 * 10^4].
# 0 <= Node.val <= 5 * 10^4
# The tree is guaranteed to be complete.

def count_nodes(root):
    if not root:
        return 0

    left = root.left
    right = root.right

    left_height = 0
    right_height = 0

    while left:
        left = left.left
        left_height += 1

    while right:
        right = right.right
        right_height += 1

    if left_height == right_height:
        return 2 ** (left_height + 1) - 1

    return count_nodes(root.left) + count_nodes(root.right) + 1

# Time Complexity: O((logn)^2)
# Space Complexity: O(logn)

# TreeNode class definition
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Helper function to build tree from array (level-order)
def build_tree(arr):
    if not arr or len(arr) == 0:
        return None
    
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    
    while queue and i < len(arr):
        node = queue.pop(0)
        
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    
    return root

# Example Usage:
print(count_nodes(build_tree([1, 2, 3, 4, 5, 6])))  # 6
print(count_nodes(build_tree([])))  # 0
print(count_nodes(build_tree([1])))  # 1
