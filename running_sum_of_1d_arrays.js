// Leetcode 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]) ...nums[i]).

// Return the running sum of nums.

// Example 1:
// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]

// Example 2:
// Input: nums = [1, 1, 1, 1, 1]
// Ouput: [1, 2, 3, 4, 5] 
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]

// Example 3:
// Input: nums = [3, 1, 2, 10, 1]
// Output: [3, 4, 6, 16, 17]

// Constraints:
// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

const runningSum = nums => {
    let result = []
    let currentSum = 0;
    for(let i = 0; i < nums.length; i++){
        currentSum += nums[i];
        result.push(currentSum);
    }
    return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));

let nums = [1, 2, 3, 4]; // [1,3,6,10]
let nums0 = [1, 1, 1, 1, 1]; // [1,2,3,4,5]
let nums1 = [3, 1, 2, 10, 1]; // [3,4,6,16,17]
 
const runningSum2 = (nums) => {
    for(let i = 1; i < nums.length; i++){
        nums[i] = nums[i - 1] + nums[i];
    }
    return nums;
}
// Time Complexity: O(n)

console.log(runningSum2(nums))
console.log(runningSum2(nums0))
console.log(runningSum2(nums1))