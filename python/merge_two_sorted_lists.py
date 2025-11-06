# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.

 

# Example 1:


# Input: list1 = [1,2,4], list2 = [1,3,4]
# Output: [1,1,2,3,4,4]
# Example 2:

# Input: list1 = [], list2 = []
# Output: []
# Example 3:

# Input: list1 = [], list2 = [0]
# Output: [0]
 

# Constraints:

# The number of nodes in both lists is in the range [0, 50].
# -100 <= Node.val <= 100
# Both list1 and list2 are sorted in non-decreasing order.

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_two_lists(list1, list2):
    # Create a dummy node to simplify the merging process
    dummy = ListNode(0)
    current = dummy

    # Traverse both lists and append the smaller value to the merged list
    while list1 and list2:
        if list1.val < list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next

    # If there are remaining nodes in either list, append them
    if list1:
        current.next = list1
    elif list2:
        current.next = list2

    return dummy.next  # The head of the merged linked list

# Time Complexity: O(n + m) where n and m are the lengths of list1 and list2
# Space Complexity: O(1) since we are reusing the existing nodes

# Example usage:
list1 = ListNode(1, ListNode(2, ListNode(4)))
list2 = ListNode(1, ListNode(3, ListNode(4)))   
mergedList = merge_two_lists(list1, list2)
# Function to print the linked list
def print_list(head):
    current = head
    result = []
    while current:
        result.append(current.val)
        current = current.next
    print(result)

print_list(mergedList)  # Output: [1, 1, 2, 3, 4, 4]
print_list(merge_two_lists(None, None))  # Output: []
print_list(merge_two_lists(None, ListNode(0)))  # Output: [0]