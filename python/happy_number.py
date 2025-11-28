# Write an algorithm to determine if a number n is happy.

# A happy number is a number defined by the following process:

# Starting with any positive integer, replace the number by the sum of the squares of its digits.
# Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
# Those numbers for which this process ends in 1 are happy.
# Return true if n is a happy number, and false if not.

 

# Example 1:

# Input: n = 19
# Output: true
# Explanation:
# 1^2 + 9^2 = 82
# 8^2 + 2^2 = 68
# 6^2 + 8^2 = 100
# 1^2 + 0^2 + 0^2 = 1

# Example 2:

# Input: n = 2
# Output: false
 

# Constraints:

# 1 <= n <= 2^31 - 1

def is_happy(n):
    def get_next(number):
        total_sum = 0
        while number > 0:
            digit = number % 10
            total_sum += digit ** 2
            number //= 10
        return total_sum

    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = get_next(n)

    return n == 1

# Time Complexity: O(log n) for each transformation, and in the worst case we may have to do this multiple times until we find a cycle.
# Space Complexity: O(k) where k is the number of unique numbers encountered before finding a cycle or reaching 1.

# Example usage:
print(is_happy(19))  # Output: True
print(is_happy(2))   # Output: False
