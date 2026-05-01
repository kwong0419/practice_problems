// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

function longestPalindrome(s) {
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    let length = 0;
    let hasOddCount = false;
    
    for (let count of Object.values(charCount)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1; // Use the even part of the count
            hasOddCount = true; // Mark that we have at least one odd count
        }
    }
    
    // If there's at least one character with an odd count, we can place one in the center
    if (hasOddCount) {
        length += 1;
    }
    
    return length;
}

// Time complexity: O(n), where n is the length of the input string s, because we need to iterate through the string to count characters and then iterate through the character counts.
// Space complexity: O(1), since the character count object will have at most 52 entries (26 lowercase + 26 uppercase letters).

// Example usage:
console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1