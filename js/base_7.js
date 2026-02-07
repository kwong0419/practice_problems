// Given an integer num, return a string of its base 7 representation.



// Example 1:

// Input: num = 100
// Output: "202"

// Example 2:

// Input: num = -7
// Output: "-10"


// Constraints:

// -10^7 <= num <= 10^7

function convertToBase7(num) {
    if (num === 0) {
        return "0";
    }

    let isNegative = num < 0;
    if (isNegative) {
        num = -num;
    }

    let result = "";
    while (num > 0) {
        result = (num % 7) + result;
        num = Math.floor(num / 7);
    }

    return isNegative ? "-" + result : result;
}

// Time Complexity: O(log7(n))
// Space Complexity: O(log7(n))

// Example Usage:
console.log(convertToBase7(100));  // "202"
console.log(convertToBase7(-7));   // "-10"

