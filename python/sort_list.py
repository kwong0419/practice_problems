# Given the head of a linked list, return the list after sorting it in ascending order.

 

# Example 1:

# Input: head = [4,2,1,3]
# Output: [1,2,3,4]

# Example 2:

# Input: head = [-1,5,3,4,0]
# Output: [-1,0,3,4,5]

# Example 3:

# Input: head = []
# Output: []
 

# Constraints:

# The number of nodes in the list is in the range [0, 5 * 10^4].
# -10^5 <= Node.val <= 10^5
 

# Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
    def __str__(self):
        result = []
        current = self
        while current:
            result.append(current.val)
            current = current.next
        return str(result)

def sortList(head):
    if not head or not head.next:
        return head

    # Split the list into two halves using the slow and fast pointer technique
    slow = head
    fast = head
    prev = None

    while fast and fast.next:
        prev = slow
        slow = slow.next
        fast = fast.next.next

    # Split the list into two halves
    prev.next = None

    # Recursively sort the two halves
    left = sortList(head)
    right = sortList(slow)

    # Merge the two sorted halves
    return merge(left, right)

def merge(left, right):
    dummy = ListNode(0)
    current = dummy

    while left and right:
        if left.val < right.val:
            current.next = left
            left = left.next
        else:
            current.next = right
            right = right.next
        current = current.next

    current.next = left or right
    return dummy.next

# Time Complexity: O(n logn)
# Space Complexity: O(1)

# Example Usage:
print(sortList(ListNode(4, ListNode(2, ListNode(1, ListNode(3)))))) # [1,2,3,4]
print(sortList(ListNode(-1, ListNode(5, ListNode(3, ListNode(4, ListNode(0))))))) # [-1,0,3,4,5]
print(sortList(None) or "[]") # []