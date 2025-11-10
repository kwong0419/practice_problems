// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -2^31 <= x <= 2^31 - 1

function reverse(x) {
  const INT_MIN = -Math.pow(2, 31)
  const INT_MAX = Math.pow(2, 31) - 1

  let sign = x < 0 ? -1 : 1
  let reversed = 0
  let num = Math.abs(x)

  while (num > 0) {
    let digit = num % 10
    num = Math.floor(num / 10)

    // Check for overflow before actually adding the digit
    if (reversed > Math.floor((INT_MAX - digit) / 10)) {
      return 0 // Overflow will occur
    }

    reversed = reversed * 10 + digit
  }

  reversed *= sign

  // Final check to ensure it's within the 32-bit signed integer range
  if (reversed < INT_MIN || reversed > INT_MAX) {
    return 0
  }

  return reversed
}

// Time Complexity: O(log10(n)) where n is the absolute value of x
// Space Complexity: O(1) since we are using only a constant amount of extra space

// Example usage:
console.log(reverse(123)) // Output: 321
console.log(reverse(-123)) // Output: -321
console.log(reverse(120)) // Output: 21
