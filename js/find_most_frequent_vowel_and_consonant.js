// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.
 

// Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.

// Example 2:

// Input: s = "aeiaeia"

// Output: 3

// Explanation:

// The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
// There are no consonants in s. Hence, maximum consonant frequency = 0.
// The output is 3 + 0 = 3.
 

// Constraints:

// 1 <= s.length <= 100
// s consists of lowercase English letters only.


function findMostFrequentVowelAndConsonant(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const vowelCounts = {};
    const consonantCounts = {};
    let maxVowel = 0;
    let maxConsonant = 0;
    
    for (const char of s) {
        if (vowels.has(char)) {
            vowelCounts[char] = (vowelCounts[char] || 0) + 1;
            if (vowelCounts[char] > maxVowel) {
                maxVowel = vowelCounts[char];
            }
        } else {
            consonantCounts[char] = (consonantCounts[char] || 0) + 1;
            if (consonantCounts[char] > maxConsonant) {
                maxConsonant = consonantCounts[char];
            }
        }
    }
    
    return maxVowel + maxConsonant;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Example Usage: 
console.log(findMostFrequentVowelAndConsonant("successes")); // 6
console.log(findMostFrequentVowelAndConsonant("aeiaeia")); // 3