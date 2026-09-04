// You are given an integer array nums and an integer digit.

// Return the total number of times digit appears in the decimal representation of all elements in nums.

 
// Example 1:

// Input: nums = [12,54,32,22], digit = 2

// Output: 4

// Explanation:

// The digit 2 appears once in 12 and 32, and twice in 22. Thus, the total number of times digit 2 appears is 4.

// Example 2:

// Input: nums = [1,34,7], digit = 9

// Output: 0

// Explanation:

// The digit 9 does not appear in the decimal representation of any element in nums, so the total number of times digit 9 appears is 0.

 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 10^6​​​​​​​
// 0 <= digit <= 9

function countDigitAppearances(nums, digit) {
    let count = 0;
    const digitStr = digit.toString();
    
    for (let num of nums) {
        const numStr = num.toString();
        for (let char of numStr) {
            if (char === digitStr) {
                count++;
            }
        }
    }
    
    return count;
}

// Time Complexity: O(n * m), where n is the length of the nums array and m is the average number of digits in the numbers
// Space Complexity: O(1)

// Example usage:
console.log(countDigitAppearances([12, 54, 32, 22], 2)); // 4
console.log(countDigitAppearances([1, 34, 7], 9)); // 0
