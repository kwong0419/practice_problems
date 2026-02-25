# Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)



# Example 1:

# Input: head = [1,2,3,4]

# Output: [2,1,4,3]

# Explanation:



# Example 2:

# Input: head = []

# Output: []

# Example 3:

# Input: head = [1]

# Output: [1]

# Example 4:

# Input: head = [1,2,3]

# Output: [2,1,3]



# Constraints:

# The number of nodes in the list is in the range [0, 100].
# 0 <= Node.val <= 100

def swapPairs(head):
    if not head or not head.next:
        return head
    newHead = head.next
    head.next = self.swapPairs(head.next.next)
    newHead.next = head
    return newHead

# Time Complexity: O(n)
# Space Complexity: O(n)

# Example Usage:
print(swapPairs([1, 2, 3, 4])) # [2, 1, 4, 3]
print(swapPairs([])) # []
print(swapPairs([1])) # [1]
print(swapPairs([1, 2, 3])) # [2, 1, 3]
