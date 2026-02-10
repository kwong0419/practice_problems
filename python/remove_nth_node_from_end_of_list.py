# Given the head of a linked list, remove the nth node from the end of the list and return its head.



# Example 1:


# Input: head = [1,2,3,4,5], n = 2
# Output: [1,2,3,5]

# Example 2:

# Input: head = [1], n = 1
# Output: []

# Example 3:

# Input: head = [1,2], n = 1
# Output: [1]


# Constraints:

# The number of nodes in the list is sz.
# 1 <= sz <= 30
# 0 <= Node.val <= 100
# 1 <= n <= sz


# Follow up: Could you do this in one pass?

def removeNthFromEnd(head, n):
    dummy = ListNode(0, head)
    left = dummy
    right = dummy

    # Move right pointer n+1 steps ahead
    for i in range(n + 1):
        right = right.next

    # Move both pointers until right reaches the end
    while right is not None:
        left = left.next
        right = right.next

    # Remove the nth node from the end
    left.next = left.next.next

    return dummy.next

# Time Complexity: O(n)
# Space Complexity: O(1)

# Example Usage:
print(removeNthFromEnd([1, 2, 3, 4, 5], 2))  # [1,2,3,5]
print(removeNthFromEnd([1], 1))  # []
print(removeNthFromEnd([1, 2], 1))  # [1]
