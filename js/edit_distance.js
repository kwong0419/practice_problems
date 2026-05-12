// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
 

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
 

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.


function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // dp[i][j] = min distance between first i chars of word1 and first j chars of word2
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Base cases: empty strings
    for (let i = 0; i <= m; i++) dp[i][0] = i; // delete i chars from word1
    for (let j = 0; j <= n; j++) dp[0][j] = j; // insert j chars into word1

    // Fill DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // No operation needed if chars match
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],    // delete
                    dp[i][j - 1],    // insert
                    dp[i - 1][j - 1] // replace
                );
            }
        }
    }

    return dp[m][n];
}

// Time Complexity: O(m * n)
// Space Complexity: O(m * n) - can be optimized to O(min(m,n))

// Example Usage:
console.log(minDistance("horse", "ros")); // 3
console.log(minDistance("intention", "execution")); // 5