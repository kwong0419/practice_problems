// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 10^5
// s consist of printable ASCII characters.

function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const sArray = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer until we find a vowel
        while (left < right && !vowels.has(sArray[left])) {
            left++;
        }
        // Move right pointer until we find a vowel
        while (left < right && !vowels.has(sArray[right])) {
            right--;
        }
        // Swap the vowels
        if (left < right) {
            [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
            left++;
            right--;
        }
    }

    return sArray.join('');
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Example Usage:
console.log(reverseVowels("IceCreAm")); // Output: "AceCreIm"
console.log(reverseVowels("leetcode")); // Output: "leotcede"
