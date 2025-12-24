// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.


// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109

// Bucket Sort
function maximumGap(nums) {
    if (nums.length < 2) {
        return 0;
    }

    let maxNum = Math.max(...nums);
    let minNum = Math.min(...nums);

    if (maxNum === minNum) {
        return 0;
    }

    let bucketSize = Math.max(1, Math.floor((maxNum - minNum) / (nums.length - 1)));
    let numBuckets = Math.floor((maxNum - minNum) / bucketSize) + 1;

    let buckets = Array.from({ length: numBuckets }, () => [null, null]);

    for (let num of nums) {
        let bucketIndex = Math.floor((num - minNum) / bucketSize);
        if (buckets[bucketIndex][0] === null || num < buckets[bucketIndex][0]) {
            buckets[bucketIndex][0] = num;
        }
        if (buckets[bucketIndex][1] === null || num > buckets[bucketIndex][1]) {
            buckets[bucketIndex][1] = num;
        }
    }

    let maxGap = 0;
    let prevBucketMax = null;

    for (let bucket of buckets) {
        if (bucket[0] !== null) {
            if (prevBucketMax !== null) {
                maxGap = Math.max(maxGap, bucket[0] - prevBucketMax);
            }
            prevBucketMax = bucket[1];
        }
    }

    return maxGap;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Example Usage:
console.log(maximumGap([3, 6, 9, 1])); // 3
console.log(maximumGap([10])); // 0
