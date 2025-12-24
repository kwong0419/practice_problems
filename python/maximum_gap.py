# Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

# You must write an algorithm that runs in linear time and uses linear extra space.

# Example 1:

# Input: nums = [3,6,9,1]
# Output: 3
# Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

# Example 2:

# Input: nums = [10]
# Output: 0
# Explanation: The array contains less than 2 elements, therefore return 0.
 

# Constraints:

# 1 <= nums.length <= 105
# 0 <= nums[i] <= 109

def maximum_gap(nums):
    if len(nums) < 2:
        return 0
    
    max_num = max(nums)
    min_num = min(nums)
    
    if max_num == min_num:
        return 0
    
    bucket_size = max(1, (max_num - min_num) // (len(nums) - 1))
    num_buckets = (max_num - min_num) // bucket_size + 1
    
    buckets = [[None, None] for _ in range(num_buckets)]
    
    for num in nums:
        bucket_index = (num - min_num) // bucket_size
        if buckets[bucket_index][0] is None or num < buckets[bucket_index][0]:
            buckets[bucket_index][0] = num
        if buckets[bucket_index][1] is None or num > buckets[bucket_index][1]:
            buckets[bucket_index][1] = num
    
    max_gap = 0
    prev_bucket_max = None
    
    for bucket in buckets:
        if bucket[0] is not None:
            if prev_bucket_max is not None:
                max_gap = max(max_gap, bucket[0] - prev_bucket_max)
            prev_bucket_max = bucket[1]
    
    return max_gap

# Time Complexity: O(n)
# Space Complexity: O(n)

# Example Usage:
print(maximum_gap([3,6,9,1])) # 3
print(maximum_gap([10])) # 0
