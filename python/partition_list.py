# Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

# You should preserve the original relative order of the nodes in each of the two partitions.

# Example 1:


# Input: head = [1,4,3,2,5,2], x = 3
# Output: [1,2,2,4,3,5]

# Example 2:

# Input: head = [2,1], x = 2
# Output: [1,2]


# Constraints:

# The number of nodes in the list is in the range [0, 200].
# -100 <= Node.val <= 100
# -200 <= x <= 200

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def partition_list(head, x):
    # Create two dummy nodes for the two partitions
    less_head = ListNode(0)
    greater_head = ListNode(0)
    
    # Pointers to build the two lists
    less = less_head
    greater = greater_head
    
    # Traverse the original list
    current = head
    while current:
        if current.val < x:
            less.next = current
            less = less.next
        else:
            greater.next = current
            greater = greater.next
        current = current.next
    
    # Connect the two lists
    greater.next = None  # Important: terminate the list
    less.next = greater_head.next
    
    return less_head.next

# Time Complexity: O(n)
# Space Complexity: O(1)

# Example Usage:
def list_to_array(head):
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result

def array_to_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

print(list_to_array(partition_list(array_to_list([1, 4, 3, 2, 5, 2]), 3)))  # [1, 2, 2, 4, 3, 5]
print(list_to_array(partition_list(array_to_list([2, 1]), 2)))  # [1, 2]
