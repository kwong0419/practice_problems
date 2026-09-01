// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

function numIdenticalPairs(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
}

// Time Complexity: O(n^2) - Nested loops to check all pairs
// Space Complexity: O(1) - Constant space used for count variable

// Example Usage:
console.log(numIdenticalPairs([1,2,3,1,1,3])); // 4 
console.log(numIdenticalPairs([1,1,1,1])); // 6
console.log(numIdenticalPairs([1,2,3])); // 0

function numIdenticalPairsOptimized (nums) {
    let count = 0;
    const freq = {};
    for (const num of nums) {
        if (freq[num]) {
            count += freq[num];
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }
    return count;
}

// Time Complexity: O(n) - Single pass through the array
// Space Complexity: O(n) - Hash map to store frequencies

// Example Usage:
console.log(numIdenticalPairsOptimized([1,2,3,1,1,3])); // 4 
console.log(numIdenticalPairsOptimized([1,1,1,1])); // 6
console.log(numIdenticalPairsOptimized([1,2,3])); // 0
