// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Example 2:

// Input: nums = [1,1,2]
// Output: [1]

// Example 3:

// Input: nums = [1]
// Output: []
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.


const findDuplicates = (nums) => {
  const duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    
    if (nums[index] < 0) {
      duplicates.push(Math.abs(nums[i]));
    }

    nums[index] = -nums[index];
  }

  return duplicates;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Example Usage:
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));  // [2, 3]
console.log(findDuplicates([1, 1, 2]));  // [1]
console.log(findDuplicates([1]));  // []