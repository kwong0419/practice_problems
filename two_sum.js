// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution 1: Brute Force
// Not a good solution, worst Case: if size is large, runtime is O(n^2)
const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
};
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Solution 2: One-Pass Hash Table
// Better solution, worst case: runtime is O(n)
const twoSum = (nums, target) => {
    // object to store value and index
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(obj[complement] !== undefined){
            return [obj[complement], i];
        }
        obj[nums[i]] = i;
    }
}
// Time Complexity: O(n)
// Space Complexity: O(n)