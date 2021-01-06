// 1512. Number of Good Pairs
// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

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


const numIdenticalPairs = (nums) => {
    let goodPairs = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j] && i < j){
                goodPairs++;
            }
        }
    }
    return goodPairs;
}
// Time Complexity: O(n^2)


// Runtime can be more efficient using a Map
// const numIdenticalPairs = (nums) => {
//     let numsMap = new Map();
//     let goodPairs = 0;

//     nums.forEach(num => {
//         if(numsMap.has(num)){
//             goodPairs += numsMap.get(num);
//             numsMap.set(num, numsMap.get(num) + 1)
//         } else {
//             numsMap.set(num, 1)
//         }
//     })
//     return goodPairs;
// }
// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]))
console.log(numIdenticalPairs([1, 2, 3]))