// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

function partition(s) {
    let result = [];
    let currentPartition = [];

    function backtrack(startIndex) {
        if (startIndex === s.length) {
            result.push([...currentPartition]);
            return;
        }

        for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
            const substring = s.substring(startIndex, endIndex + 1);

            if (isPalindrome(substring)) {
                currentPartition.push(substring);
                backtrack(endIndex + 1);
                currentPartition.pop();
            }
        }
    }

    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    backtrack(0);
    return result;
}

// Time Complexity: O(n * 2^n)
// Space Complexity: O(n)

// Example Usage:
console.log(partition("aab")); // [["a","a","b"],["aa","b"]]
console.log(partition("a")); // [["a"]]