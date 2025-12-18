# Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

# Example 1:


# Input: root = [1,2,2,3,4,4,3]
# Output: true

# Example 2:


# Input: root = [1,2,2,null,3,null,3]
# Output: false
 

# Constraints:

# The number of nodes in the tree is in the range [1, 1000].
# -100 <= Node.val <= 100
 

# Follow up: Could you solve it both recursively and iteratively?

def is_symmetric(root):
    if not root:
        return True
    if not root.left and not root.right:
        return True
    if not root.left or not root.right:
        return False
    
    stack = [[root.left, root.right]]
    
    while stack:
        left, right = stack.pop()
        
        if not left and not right:
            continue
        if not left or not right:
            return False
        if left.val != right.val:
            return False
        
        stack.append([left.left, right.right])
        stack.append([left.right, right.left])
    
    return True

# Time Complexity: O(n)
# Space Complexity: O(h)

# TreeNode class for Example
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Example 1: Symmetric tree [1,2,2,3,4,4,3]
tree1 = TreeNode(1,
    TreeNode(2,
        TreeNode(3),
        TreeNode(4)
    ),
    TreeNode(2,
        TreeNode(4),
        TreeNode(3)
    )
)

# Example 2: Not symmetric [1,2,2,null,3,null,3]
tree2 = TreeNode(1,
    TreeNode(2,
        None,
        TreeNode(3)
    ),
    TreeNode(2,
        None,
        TreeNode(3)
    )
)

print(is_symmetric(tree1))  # Output: True
print(is_symmetric(tree2))  # Output: False
