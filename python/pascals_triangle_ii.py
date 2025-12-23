# Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

# In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


# Example 1:

# Input: rowIndex = 3
# Output: [1,3,3,1]

# Example 2:

# Input: rowIndex = 0
# Output: [1]

# Example 3:

# Input: rowIndex = 1
# Output: [1,1]
 

# Constraints:

# 0 <= rowIndex <= 33
 
# Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

def getRow(rowIndex):
    row = []
    for i in range(rowIndex + 1):
        row.append(1)
    for i in range(1, rowIndex):
        row[i] = row[i - 1] * (rowIndex - i + 1) / i
    return row

# Time Complexity: O(rowIndex)
# Space Complexity: O(rowIndex)

# Example Usage:
print(getRow(3)) # [1,3,3,1]
print(getRow(0)) # [1]
print(getRow(1)) # [1,1]
