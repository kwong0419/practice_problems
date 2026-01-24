// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]

// Example 2:

// Input: nums = [1,1]
// Output: [1,2]


// Constraints:

// 2 <= nums.length <= 10^4
// 1 <= nums[i] <= 10^4

function findErrorNums(nums) {
    const set = new Set()
    let duplicate = null
    let missing = null

    // Find the duplicate by tracking which number we've seen before
    for (let num of nums) {
        if (set.has(num)) {
            duplicate = num
        }
        set.add(num)
    }

    // Find the missing number
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            missing = i
        }
    }

    return [duplicate, missing]
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Example Usage:
console.log(findErrorNums([1, 2, 2, 4])) // [2,3]
console.log(findErrorNums([1, 1])) // [1,2]

