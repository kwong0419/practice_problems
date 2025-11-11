// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

function longestPalindromicSubstring(s) {
  if (s.length === 0) return ''

  let start = 0
  let end = 0

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    return right - left - 1 // Length of the palindrome
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(i, i) // Odd length palindromes
    let len2 = expandAroundCenter(i, i + 1) // Even length palindromes
    let len = Math.max(len1, len2)

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }

  return s.substring(start, end + 1)
}

// Time Complexity: O(n^2) where n is the length of the string
// Space Complexity: O(1) since we are using only a constant amount of extra space

// Example usage:
console.log(longestPalindromicSubstring('babad')) // Output: "bab" or "aba"
console.log(longestPalindromicSubstring('cbbd')) // Output: "bb"
