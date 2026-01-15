// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Constraints:

// 0 <= s.length <= 5 * 10^4

// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLength = 0;
    let charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        // If character is already in the map and within the current window
        if (charMap.has(s[right]) && charMap.get(s[right]) >= left) {
            // Move left pointer to the right of the last occurrence
            left = charMap.get(s[right]) + 1;
        }

        // Update the last seen index of the current character
        charMap.set(s[right], right);

        // Update max length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Time Complexity: O(n)
// Space Complexity: O(min(n, m)) where m is the charset size

// Example Usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
