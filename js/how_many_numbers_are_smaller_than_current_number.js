// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

 

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]
 

// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

function smallerNumbersThanCurrent(nums){
  let result = [];

  for(let i = 0; i < nums.length; i++){
    let count = 0;
    for(let j = 0; j < nums.length; j++){
      if(i !== j && nums[j] < nums[i]){
        count++;
      }
    }
    result.push(count);
  }
  return result
}

// Time Complexity: O(n^2)
// Space Complexity: O(n)


// Example Usage:
console.log(smallerNumbersThanCurrent([8,1,2,2,3])); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6,5,4,8])); // [2,1,0,3]
console.log(smallerNumbersThanCurrent([7,7,7,7])); // [0,0,0,0]


function smallerNumbersThanCurrentOptimized(nums) {
  const count = new Array(101).fill(0);

  // 1. Count frequencies of each number (0 to 100): O(n)
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  // 2. Prefix sum: count[i] stores total numbers <= i: O(1) (fixed 101 steps)
  for (let i = 1; i <= 100; i++) {
    count[i] += count[i - 1];
  }

  // 3. For any num, count[num - 1] gives count of numbers < num: O(n)
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] === 0 ? 0 : count[nums[i] - 1]);
  }

  return result;
}

// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary space (or O(n) including the returned output array)

// Example Usage:
console.log(smallerNumbersThanCurrentOptimized([8,1,2,2,3])); // [4,0,1,1,3]
console.log(smallerNumbersThanCurrentOptimized([6,5,4,8])); // [2,1,0,3]
console.log(smallerNumbersThanCurrentOptimized([7,7,7,7])); // [0,0,0,0]