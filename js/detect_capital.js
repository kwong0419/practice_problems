// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true

// Example 2:

// Input: word = "FlaG"
// Output: false


// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

function detectCapitalUse(word) {
    let small = word.toLowerCase();
    let big = word.toUpperCase();
    if (word === small || word === big) return true;
    for (let i = 1; i < word.length; i++) {
        if (word[i] !== small[i]) return false;
    }
    return true;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Example Usage:
console.log(detectCapitalUse("USA")); // Output: true
console.log(detectCapitalUse("FlaG")); // Output: false
