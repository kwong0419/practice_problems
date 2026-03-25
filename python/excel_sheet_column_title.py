# Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

# For example:

# A -> 1
# B -> 2
# C -> 3
# ...
# Z -> 26
# AA -> 27
# AB -> 28 
# ...


# Example 1:

# Input: columnNumber = 1
# Output: "A"

# Example 2:

# Input: columnNumber = 28
# Output: "AB"

# Example 3:

# Input: columnNumber = 701
# Output: "ZY"


# Constraints:

# 1 <= columnNumber <= 2^31 - 1

def convertToTitle(columnNumber):
    result = ""
    while columnNumber > 0:
        columnNumber -= 1
        remainder = columnNumber % 26
        result = chr(65 + remainder) + result
        columnNumber = columnNumber // 26
    return result

# Time Complexity: O(log26(n))
# Space Complexity: O(1)

# Example Usage:
print(convertToTitle(1)) # "A"
print(convertToTitle(28)) # "AB"
print(convertToTitle(701)) # "ZY"
