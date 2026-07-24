// You are given an integer array nums of length n.

// Construct a new array ans of length 2 * n such that the first n elements are the same as nums, and the next n elements are the elements of nums in reverse order.

// Formally, for 0 <= i <= n - 1:

// ans[i] = nums[i]
// ans[i + n] = nums[n - i - 1]
// Return an integer array ans.

 

// Example 1:

// Input: nums = [1,2,3]

// Output: [1,2,3,3,2,1]

// Explanation:

// The first n elements of ans are the same as nums.

// For the next n = 3 elements, each element is taken from nums in reverse order:

// ans[3] = nums[2] = 3
// ans[4] = nums[1] = 2
// ans[5] = nums[0] = 1
// Thus, ans = [1, 2, 3, 3, 2, 1].

// Example 2:

// Input: nums = [1]

// Output: [1,1]

// Explanation:

// The array remains the same when reversed. Thus, ans = [1, 1].

 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// First Approach
var concatWithReverse = function (nums) {
    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        ans.push(nums[i]);
    }

    return ans;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Example Usage: 
console.log(concatWithReverse([1,2,3])) // [1,2,3,3,2,1]
console.log(concatWithReverse([1])) // [1,1]


// Slightly more optimal
var concatWithReverseOptimal = function (nums) {
    const n = nums.length;
    const ans = new Array(n * 2);
    
    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[n * 2 - 1 - i] = nums[i]; 
    }
    
    return ans;
}

// Time Complexity: O(n)
// Space Complexity: O(n) - Pre-allocating exact size avoids dynamic resizing overhead

// Example Usage:
console.log(concatWithReverseOptimal([1,2,3])) // [1,2,3,3,2,1]
console.log(concatWithReverseOptimal([1])) // [1,1]
