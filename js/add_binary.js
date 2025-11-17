// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 10^4
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

function addBinary(a, b) {
  let result = ''
  let carry = 0
  let i = a.length - 1
  let j = b.length - 1

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? parseInt(a[i], 10) : 0
    const bitB = j >= 0 ? parseInt(b[j], 10) : 0

    const sum = bitA + bitB + carry
    result = (sum % 2).toString() + result
    carry = Math.floor(sum / 2)

    i--
    j--
  }

  return result
}

// Time Complexity: O(max(m, n)) where m and n are the lengths of a and b
// Space Complexity: O(max(m, n)) for the result string
