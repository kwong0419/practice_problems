// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 3^3

// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3^x = 0.

// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3^x = (-1).


// Constraints:

// -2^31 <= n <= 2^31 - 1


// Follow up: Could you solve it without loops/recursion?

function isPowerOfThree(n) {
    if (n <= 0) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
}

// Time Complexity: O(log3(n))
// Space Complexity: O(1)

// Example Usage:
console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(-1)); // false

// Follow up:
function isPowerOfThreeWithoutLoop(n) {
    // 3^19 = 1162261467 is the largest power of 3 within 32-bit signed integer range
    return n > 0 && 1162261467 % n === 0;
}

// Time Complexity: O(1)
// Space Complexity: O(1)

// Example Usage:
console.log(isPowerOfThreeWithoutLoop(27)); // true
console.log(isPowerOfThreeWithoutLoop(0)); // false
console.log(isPowerOfThreeWithoutLoop(-1)); // false
