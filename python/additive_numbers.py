# An additive number is a string whose digits can form an additive sequence.

# A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

# Given a string containing only digits, return true if it is an additive number or false otherwise.

# Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

 

# Example 1:

# Input: "112358"
# Output: true
# Explanation: 
# The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
# 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

# Example 2:

# Input: "199100199"
# Output: true
# Explanation: 
# The additive sequence is: 1, 99, 100, 199. 
# 1 + 99 = 100, 99 + 100 = 199
 

# Constraints:

# 1 <= num.length <= 35
# num consists only of digits.
 

# Follow up: How would you handle overflow for very large input integers?

def isValid(num1: int, num2: int, rest: str) -> bool:
    while rest:
        total = num1 + num2
        totalStr = str(total)
        if not rest.startswith(totalStr):
            return False
        rest = rest[len(totalStr):]
        num1 = num2
        num2 = total
    return True

def isAdditiveNumber(num: str) -> bool:
    n = len(num)
    for i in range(1, n // 2 + 1):
        if num[0] == '0' and i > 1:
            break
        for j in range(i + 1, n):
            if num[i] == '0' and j - i > 1:
                break
            num1 = int(num[:i])
            num2 = int(num[i:j])
            rest = num[j:]
            if isValid(num1, num2, rest):
                return True
    return False

# Time Complexity: O(n^3)
# Space Complexity: O(n)

# Example Usage:
print(isAdditiveNumber("112358")) # True
print(isAdditiveNumber("199100199")) # True
