// # Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// # Example 1:

// # Input: haystack = "sadbutsad", needle = "sad"
// # Output: 0
// # Explanation: "sad" occurs at index 0 and 6.
// # The first occurrence is at index 0, so we return 0.

// # Example 2:

// # Input: haystack = "leetcode", needle = "leeto"
// # Output: -1
// # Explanation: "leeto" did not occur in "leetcode", so we return -1.

// # Constraints:

// # 1 <= haystack.length, needle.length <= 10^4
// # haystack and needle consist of only lowercase English characters.

function indexOfFirstOccurrence(haystack, needle) {
  // Edge case: if needle is an empty string, return 0
  if (needle.length === 0) return 0
  // Loop through the haystack string
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // Check if the substring from haystack matches needle
    if (haystack.substring(i, i + needle.length) === needle) {
      return i // Return the starting index of the first occurrence
    }
  }
  return -1 // If needle is not found, return -1
}

// Example usage:
console.log(indexOfFirstOccurrence('sadbutsad', 'sad')) // Output: 0
console.log(indexOfFirstOccurrence('leetcode', 'leeto')) // Output: -1

// Time Complexity: O((n - m) * m) where n is the length of haystack and m is the length of needle
// Space Complexity: O(1) since we are using only a constant amount of extra space

//*** In practice, JavaScript's built-in indexOf method can be used for this purpose with O(n) time complexity. ***/
function indexOfFirstOccurrenceBuiltIn(haystack, needle) {
  return haystack.indexOf(needle)
}
// Example usage of built-in method:
console.log(indexOfFirstOccurrenceBuiltIn('sadbutsad', 'sad')) // Output: 0
console.log(indexOfFirstOccurrenceBuiltIn('leetcode', 'leeto')) // Output: -1
// Time Complexity: O(n) where n is the length of haystack
// Space Complexity: O(1) since we are using only a constant amount of extra space
