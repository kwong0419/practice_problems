# Given a triangle array, return the minimum path sum from top to bottom.

# For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

# Example 1:

# Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
# Output: 11
# Explanation: The triangle looks like:
#    2
#   3 4
#  6 5 7
# 4 1 8 3
# The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

# Example 2:

# Input: triangle = [[-10]]
# Output: -10


# Constraints:

# 1 <= triangle.length <= 200
# triangle[0].length == 1
# triangle[i].length == triangle[i - 1].length + 1
# -10^4 <= triangle[i][j] <= 10^4

def minimumTotal(triangle):
    # Start from the second-to-last row and work upward
    for i in range(len(triangle) - 2, -1, -1):
        for j in range(len(triangle[i])):
            # For each element, add the minimum of the two adjacent elements below
            triangle[i][j] += min(triangle[i + 1][j], triangle[i + 1][j + 1])
    
    # The top element now contains the minimum path sum
    return triangle[0][0]

# Time Complexity: O(n^2) where n is the number of rows
# Space Complexity: O(1) - modifies input in-place

# Example Usage:
print(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))  # 11
print(minimumTotal([[-10]]))  # -10
