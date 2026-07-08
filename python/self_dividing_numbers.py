# A self-dividing number is a number that is divisible by every digit it contains.

# For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
# A self-dividing number is not allowed to contain the digit zero.

# Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).

 

# Example 1:

# Input: left = 1, right = 22
# Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

# Example 2:

# Input: left = 47, right = 85
# Output: [48,55,66,77]
 

# Constraints:

# 1 <= left <= right <= 10^4

def is_self_dividing(n):
    current = n
    while current > 0:
        digit = current % 10
        if digit == 0 or n % digit != 0:
            return False
        current = current // 10
    return True

def self_dividing_numbers(left, right):
    result = []
    for i in range(left, right + 1):
        if is_self_dividing(i):
            result.append(i)
    return result

# Time Complexity: O((right - left) * log10(right)) where n is (right - left +1)
# Space Complexity: O(1)

print(self_dividing_numbers(1, 22)) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
print(self_dividing_numbers(47, 85)) # [48, 55, 66, 77]
