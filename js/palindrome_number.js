// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -2^31 <= x <= 2^31 - 1

// Follow up: Could you solve it without converting the integer to a string?

function isPalindrome(x) {
  // Negative numbers are not palindromes
  // Numbers ending in 0 (except 0 itself) are not palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false

  let reversedHalf = 0

  // Only reverse half the number
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  // For even number of digits: x === reversedHalf
  // For odd number of digits: x === Math.floor(reversedHalf / 10)
  return x === reversedHalf || x === Math.floor(reversedHalf / 10)
}

// Optimized version - only processes half the digits!
// Time Complexity: O(log10(n)/2) - roughly half the operations
// Space Complexity: O(1)

// Example usage:
console.log(isPalindrome(121)) // Output: true
console.log(isPalindrome(-121)) // Output: false
console.log(isPalindrome(10)) // Output: false
