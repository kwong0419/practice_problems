# Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

# An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

# Example 1:

# Input: grid = [
#   ["1","1","1","1","0"],
#   ["1","1","0","1","0"],
#   ["1","1","0","0","0"],
#   ["0","0","0","0","0"]
# ]
# Output: 1

# Example 2:

# Input: grid = [
#   ["1","1","0","0","0"],
#   ["1","1","0","0","0"],
#   ["0","0","1","0","0"],
#   ["0","0","0","1","1"]
# ]
# Output: 3


# Constraints:

# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 300
# grid[i][j] is '0' or '1'.

def numIslands(grid):
    if not grid or len(grid) == 0:
        return 0

    rows = len(grid)
    cols = len(grid[0])
    islandCount = 0

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                islandCount += 1
                dfs(grid, r, c)
    return islandCount

def dfs(grid, r, c):
    rows = len(grid)
    cols = len(grid[0])

    if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0':
        return

    grid[r][c] = '0'

    dfs(grid, r + 1, c)
    dfs(grid, r - 1, c)
    dfs(grid, r, c + 1)
    dfs(grid, r, c - 1)

# Time Complexity: O(m * n)
# Space Complexity: O(m * n)

# Example Usage:
grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
print(numIslands(grid1)) # 1

grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
print(numIslands(grid2)) # 3
