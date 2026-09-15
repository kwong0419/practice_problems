# You are given an integer n. Your task is to compute the GCD (greatest common divisor) of two values:

# sumOdd: the sum of the smallest n positive odd numbers.

# sumEven: the sum of the smallest n positive even numbers.

# Return the GCD of sumOdd and sumEven.

 

# Example 1:

# Input: n = 4

# Output: 4

# Explanation:

# Sum of the first 4 odd numbers sumOdd = 1 + 3 + 5 + 7 = 16
# Sum of the first 4 even numbers sumEven = 2 + 4 + 6 + 8 = 20
# Hence, GCD(sumOdd, sumEven) = GCD(16, 20) = 4.

# Example 2:

# Input: n = 5

# Output: 5

# Explanation:

# Sum of the first 5 odd numbers sumOdd = 1 + 3 + 5 + 7 + 9 = 25
# Sum of the first 5 even numbers sumEven = 2 + 4 + 6 + 8 + 10 = 30
# Hence, GCD(sumOdd, sumEven) = GCD(25, 30) = 5.

 

# Constraints:

# 1 <= n <= 10​​​​​​​00
def gcdOfOddEvenSums(n: int) -> int:
    # sumOdd = n * n
    # sumEven = n * (n + 1)
    # The GCD of n^2 and n(n+1) is always exactly n.
    return n


# Time Complexity: O(1)
# Space Complexity: O(1)

# Example Usage:
print(gcdOfOddEvenSums(4)) # 4
print(gcdOfOddEvenSums(5)) # 5
