// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.


// Example 1:

// Input: nums = [3,2,3]
// Output: [3]

// Example 2:

// Input: nums = [1]
// Output: [1]

// Example 3:

// Input: nums = [1,2]
// Output: [1,2]


// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109


// Follow up: Could you solve the problem in linear time and in O(1) space?


// Solution 1: Simple Hash Map Approach
var majorityElementSimple = function (nums) {
    const threshold = Math.floor(nums.length / 3);
    const countMap = new Map();
    const result = [];

    // Count occurrences of each element
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Find elements that appear more than ⌊n/3⌋ times
    for (const [num, count] of countMap) {
        if (count > threshold) {
            result.push(num);
        }
    }

    return result;
};
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(n) - hash map can store up to n elements in worst case


// Solution 2: Optimal Boyer-Moore Voting Algorithm
// Insight: There can be at most 2 elements that appear more than ⌊n/3⌋ times
var majorityElement = function (nums) {
    // 1. Find potential candidates
    let candidate1 = null, candidate2 = null;
    let count1 = 0, count2 = 0;

    for (const num of nums) {
        if (candidate1 === num) {
            count1++;
        } else if (candidate2 === num) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            // Different element found, decrement both counts
            count1--;
            count2--;
        }
    }

    // 2. Verify candidates
    const threshold = Math.floor(nums.length / 3);
    count1 = 0;
    count2 = 0;

    for (const num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    const result = [];
    if (count1 > threshold) result.push(candidate1);
    if (count2 > threshold) result.push(candidate2);

    return result;
};
// Time Complexity: O(n) - two passes through array
// Space Complexity: O(1) - only uses constant extra space


// Example Usage:
console.log("Simple:");
console.log(majorityElementSimple([3, 2, 3])); // [3]
console.log(majorityElementSimple([1])); // [1]
console.log(majorityElementSimple([1, 2])); // [1,2]
console.log("\n");
console.log("Optimal:");
console.log(majorityElement([3, 2, 3])); // [3]
console.log(majorityElement([1])); // [1]
console.log(majorityElement([1, 2])); // [1,2]

