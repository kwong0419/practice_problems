// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.



// Example 1:


// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.

// Example 2:


// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.


// Constraints:

// 1 <= n <= 2^31 - 1

function arrangeCoins(n) {
    let left = 0;
    let right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * (mid + 1) / 2 <= n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)

// Example Usage:
console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3