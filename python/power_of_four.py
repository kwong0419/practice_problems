# Given an integer n, return true if it is a power of four. Otherwise, return false.

# An integer n is a power of four, if there exists an integer x such that n == 4x.

 

# Example 1:

# Input: n = 16
# Output: true

# Example 2:

# Input: n = 5
# Output: false

# Example 3:

# Input: n = 1
# Output: true
 

# Constraints:

# -2^31 <= n <= 2^31 - 1

def isPowerOfFour(n):
    if n <= 0:
        return False
    
    while n % 4 == 0:
        n /= 4
    
    return n == 1

# Time Complexity: O(log4(n))
# Space Complexity: O(1)

# Example Usage:
print(isPowerOfFour(16)) # True
print(isPowerOfFour(5))  # False
print(isPowerOfFour(1))  # True