// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.


// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// Constraints:

// 1 <= s.length <= 10^5
// s[i] is a printable ascii character.

function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Example Usage:
console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // ["h","a","n","n","a","H"]
