# Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 
# Example 1:

# Input: head = [1,2,2,1]
# Output: true

# Example 2:

# Input: head = [1,2]
# Output: false
 

# Constraints:

# The number of nodes in the list is in the range [1, 10^5].
# 0 <= Node.val <= 9

def isPalindrome(self, head):
    vals = []
    while head:
        vals.append(head.val)
        head = head.next
    return vals == vals[::-1]

# Time Complexity: O(n)
# Space Complexity: O(n)

# Example Usage:
print(isPalindrome([1,2,2,1])) # True
print(isPalindrome([1,2])) # False
