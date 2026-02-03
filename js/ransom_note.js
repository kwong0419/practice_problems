// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// 1 <= ransomNote.length, magazine.length <= 10^5
// ransomNote and magazine consist of lowercase English letters.

function canConstruct(ransomNote, magazine) {
    const counts = new Array(26).fill(0);

    // Count characters in magazine
    for (const char of magazine) {
        counts[char.charCodeAt(0) - 97]++;
    }

    // Check if ransomNote can be constructed
    for (const char of ransomNote) {
        const index = char.charCodeAt(0) - 97;
        if (counts[index] === 0) {
            return false;
        }
        counts[index]--;
    }

    return true;
}

// Time Complexity: O(n + m)
// Space Complexity: O(1)

// Example Usage:
console.log(canConstruct("a", "b"));  // false
console.log(canConstruct("aa", "ab"));  // false
console.log(canConstruct("aa", "aab"));  // true

