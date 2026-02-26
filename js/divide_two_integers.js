// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.



// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.


// Constraints:

// -2^31 <= dividend, divisor <= 2^31 - 1
// divisor != 0

function divide(dividend, divisor) {
    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);

    if (dividend === 0) return 0;
    if (divisor === 1) return dividend;
    if (divisor === -1) return dividend === MIN ? MAX : -dividend;

    let sign = (dividend > 0) === (divisor > 0) ? 1 : -1;
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let quotient = 0;

    while (a >= b) {
        let temp = b;
        let multiple = 1;
        while (a >= temp + temp) {
            temp += temp;
            multiple += multiple;
        }
        a -= temp;
        quotient += multiple;
    }

    return sign * quotient;
}

// Time Complexity: O(log^2 n)
// Space Complexity: O(1)

// Example Usage:
console.log(divide(10, 3)); // 3
console.log(divide(7, -3)); // -2
