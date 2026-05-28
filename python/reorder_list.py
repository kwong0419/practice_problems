# You are given the head of a singly linked-list. The list can be represented as:

# L0 → L1 → … → Ln - 1 → Ln
# Reorder the list to be on the following form:

# L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
# You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

# Example 1:


# Input: head = [1,2,3,4]
# Output: [1,4,2,3]

# Example 2:


# Input: head = [1,2,3,4,5]
# Output: [1,5,2,4,3]
 

# Constraints:

# The number of nodes in the list is in the range [1, 5 * 10^4].
# 1 <= Node.val <= 1000

def reorder_list(head):
    if not head or not head.next: return head
    slow = head
    fast = head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    second = slow.next
    slow.next = None
    prev = None
    curr = second
    while curr:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    left = head
    right = prev
    while right:
        left_next = left.next
        right_next = right.next
        left.next = right
        right.next = left_next
        left = left_next
        right = right_next
    return head

# Time Complexity: O(n)
# Space Complexity: O(1)

# Example Usage:
print(reorder_list([1,2,3,4])) # [1,4,2,3]
print(reorder_list([1,2,3,4,5])) # [1,5,2,4,3]
