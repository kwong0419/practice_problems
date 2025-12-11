# Given an integer n, return true if it is a power of two. Otherwise, return false.

# An integer n is a power of two, if there exists an integer x such that n == 2x.

 

# Example 1:

# Input: n = 1
# Output: true
# Explanation: 2^0 = 1

# Example 2:

# Input: n = 16
# Output: true
# Explanation: 2^4 = 16

# Example 3:

# Input: n = 3
# Output: false
 

# Constraints:

# -2^31 <= n <= 2^31 - 1
 

# Follow up: Could you solve it without loops/recursion?

def is_power_of_two(n: int) -> bool:
    if n <= 0:
        return False
    
    while n > 1:
        n = n // 2
    
    return n == 1

# Time Complexity: O(log n)
# Space Complexity: O(1)

# Example Usage:
print(is_power_of_two(1))  # True
print(is_power_of_two(16))  # True
print(is_power_of_two(3))  # False