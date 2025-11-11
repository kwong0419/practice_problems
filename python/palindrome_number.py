# Given an integer x, return true if x is a palindrome, and false otherwise.

 

# Example 1:
# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.

# Example 2:
# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

# Example 3:
# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

# Constraints:

# -2^31 <= x <= 2^31 - 1
 

# Follow up: Could you solve it without converting the integer to a string?

def is_palindrome(x):
    # Negative numbers are not palindromes
    # Numbers ending in 0 (except 0 itself) are not palindromes
    if x < 0 or (x % 10 == 0 and x != 0):
        return False

    reversed_half = 0

    # Only reverse half the number
    while x > reversed_half:
        reversed_half = reversed_half * 10 + (x % 10)
        x //= 10

    # For even number of digits: x == reversed_half
    # For odd number of digits: x == reversed_half // 10
    return x == reversed_half or x == reversed_half // 10

# Time Complexity: O(log10(n)/2) - only processes half the number of digits
# Space Complexity: O(1)
# Example usage:
print(is_palindrome(121))   # Output: True
print(is_palindrome(-121))  # Output: False
print(is_palindrome(10))    # Output: False