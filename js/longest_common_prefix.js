// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

function longestCommonPrefix(strs) {
  if (strs.length === 0) return ''

  // Start with the first string as the initial prefix
  let prefix = strs[0]

  // Compare the prefix with each string in the array
  for (let i = 1; i < strs.length; i++) {
    let j = 0
    // Find the common prefix between the current prefix and strs[i]
    while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
      j++
    }
    // Update the prefix to the common part found
    prefix = prefix.substring(0, j)
    // If at any point the prefix becomes empty, return ""
    if (prefix === '') return ''
  }

  return prefix
}

// Time Complexity: O(n) where n is the length of the shortest string
// Space Complexity: O(1) since we are using only a constant amount of extra space

// Example usage:
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // Output: "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // Output: ""
