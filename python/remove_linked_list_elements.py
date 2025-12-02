# Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

# Example 1:

# Input: head = [1,2,6,3,4,5,6], val = 6
# Output: [1,2,3,4,5]

# Example 2:

# Input: head = [], val = 1
# Output: []

# Example 3:

# Input: head = [7,7,7,7], val = 7
# Output: []

# Constraints:

# The number of nodes in the list is in the range [0, 10^4].
# 1 <= Node.val <= 50
# 0 <= val <= 50

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def removeElements(head, val):
    if not head:
        return None
    
    # Create a dummy node to handle edge cases (e.g., removing the head)
    dummy = ListNode(0)
    dummy.next = head
    current = dummy
    
    # Iterate through the list
    while current.next:
        if current.next.val == val:
            # Skip the node with matching value
            current.next = current.next.next
        else:
            # Move to the next node
            current = current.next
    
    # Return the new head (dummy.next)
    return dummy.next


# Time Complexity: O(n)
# Space Complexity: O(1)

# Helper function to convert list to linked list
def array_to_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for i in range(1, len(arr)):
        current.next = ListNode(arr[i])
        current = current.next
    return head


# Helper function to convert linked list to list
def list_to_array(head):
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result


# Example Usage:
print(list_to_array(removeElements(array_to_list([1, 2, 6, 3, 4, 5, 6]), 6)))  # [1,2,3,4,5]
print(list_to_array(removeElements(array_to_list([]), 1)))  # []
print(list_to_array(removeElements(array_to_list([7, 7, 7, 7]), 7)))  # []