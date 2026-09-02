# You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

# Example 1:


# Input: l1 = [7,2,4,3], l2 = [5,6,4]
# Output: [7,8,0,7]
# Example 2:

# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [8,0,7]
# Example 3:

# Input: l1 = [0], l2 = [0]
# Output: [0]
 

# Constraints:

# The number of nodes in each linked list is in the range [1, 100].
# 0 <= Node.val <= 9
# It is guaranteed that the list represents a number that does not have leading zeros.
 

# Follow up: Could you solve it without reversing the input lists?

def add_two_numbers (l1, l2): 
    stack1, stack2 = [], []
    
    while l1:
        stack1.append(l1.val)
        l1 = l1.next
        
    while l2:
        stack2.append(l2.val)
        l2 = l2.next
        
    carry = 0
    result = None
    
    while stack1 or stack2 or carry:
        sum_val = carry
        
        if stack1:
            sum_val += stack1.pop()
            
        if stack2:
            sum_val += stack2.pop()
            
        carry, digit = divmod(sum_val, 10)
        
        new_node = ListNode(digit)
        new_node.next = result
        result = new_node
        
    return result

# Time Complexity: O(max(m, n)), where m and n are the lengths of the two linked lists. We traverse both lists once to push their values onto stacks, and then we pop from the stacks to create the result list.
# Space Complexity: O(m + n), where m and n are the lengths of the two linked lists. We use two stacks to store the values from the linked lists.  
