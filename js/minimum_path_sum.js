// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:


// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 200

function minPathSum(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[j] = grid[i][j];
            } else if (i === 0) {
                dp[j] = dp[j - 1] + grid[i][j];
            } else if (j === 0) {
                dp[j] = dp[j] + grid[i][j];
            } else {
                dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
            }
        }
    }

    return dp[n - 1];
}

// Time Complexity: O(m * n)
// Space Complexity: O(n)

// Example Usage:
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])); // 7
console.log(minPathSum([[1, 2, 3], [4, 5, 6]])); // 12
