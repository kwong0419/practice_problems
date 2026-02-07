# Given an integer num, return a string of its base 7 representation.



# Example 1:

# Input: num = 100
# Output: "202"

# Example 2:

# Input: num = -7
# Output: "-10"


# Constraints:

# -10^7 <= num <= 10^7

def convertToBase7(num):
    if num == 0:
        return "0"

    isNegative = num < 0
    if isNegative:
        num = -num

    result = ""
    while num > 0:
        result = str(num % 7) + result
        num = num // 7

    return "-" + result if isNegative else result

# Time Complexity: O(log7(n))
# Space Complexity: O(log7(n))

# Example Usage:
print(convertToBase7(100))  # "202"
print(convertToBase7(-7))   # "-10"
