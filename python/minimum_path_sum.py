# Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

# Note: You can only move either down or right at any point in time.

# Example 1:


# Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
# Output: 7
# Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

# Example 2:

# Input: grid = [[1,2,3],[4,5,6]]
# Output: 12
 

# Constraints:

# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 200
# 0 <= grid[i][j] <= 200

def min_path_sum(grid):
    m = len(grid)
    n = len(grid[0])
    dp = [0] * n
    dp[0] = grid[0][0]
    for i in range(1, n):
        dp[i] = dp[i - 1] + grid[0][i]
    for i in range(1, m):
        dp[0] += grid[i][0]
        for j in range(1, n):
            dp[j] = min(dp[j - 1], dp[j]) + grid[i][j]
    return dp[n - 1]

# Time Complexity: O(m * n)
# Space Complexity: O(n)

# Example Usage:
print(min_path_sum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))  # 7
print(min_path_sum([[1, 2, 3], [4, 5, 6]]))  # 12

    