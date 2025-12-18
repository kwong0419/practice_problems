# Given the root of a binary tree, return the inorder traversal of its nodes' values.



# Example 1:

# Input: root = [1,null,2,3]

# Output: [1,3,2]

# Explanation:
# 1
#  \ 
#   2
#  /
# 3

# Example 2:

# Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

# Output: [4,2,6,5,7,1,3,9,8]

# Explanation:
#   1
# /   \
# 2     3
# / \    \
# 4  5     8
#   / \   / 
#  6   7 9

# Example 3:

# Input: root = []

# Output: []

# Example 4:

# Input: root = [1]

# Output: [1]


# Constraints:

# The number of nodes in the tree is in the range [0, 100].
# -100 <= Node.val <= 100


# Follow up: Recursive solution is trivial, could you do it iteratively?

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder_traversal(root):
    if not root:
        return []
    
    stack = []
    result = []
    
    while stack or root:
        if root:
            stack.append(root)
            root = root.left
        else:
            root = stack.pop()
            result.append(root.val)
            root = root.right
    
    return result

# Time Complexity: O(n)
# Space Complexity: O(n)

# Example Usage:
# Example 1: [1,null,2,3]
root1 = TreeNode(1, None, TreeNode(2, TreeNode(3)))
print(inorder_traversal(root1)) # [1,3,2]

# Example 2: [1,2,3,4,5,null,8,null,null,6,7,9]
root2 = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3, TreeNode(6), TreeNode(7)))
print(inorder_traversal(root2)) # [4,2,6,5,7,1,3,9,8]

# Example 3: []
root3 = None
print(inorder_traversal(root3)) # []

# Example 4: [1]
root4 = TreeNode(1)
print(inorder_traversal(root4)) # [1]
