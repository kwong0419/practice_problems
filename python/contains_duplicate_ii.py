# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

# Example 1:

# Input: nums = [1,2,3,1], k = 3
# Output: true

# Example 2:

# Input: nums = [1,0,1,1], k = 1
# Output: true

# Example 3:

# Input: nums = [1,2,3,1,2,3], k = 2
# Output: false
 

# Constraints:

# 1 <= nums.length <= 10^5
# -10^9 <= nums[i] <= 10^9
# 0 <= k <= 10^5

def containsDuplicate(nums, k):
    numSet = set()
    for i in range(len(nums)):
        if nums[i] in numSet:
            return True
        numSet.add(nums[i])
        if len(numSet) > k:
            numSet.remove(nums[i - k])
    return False

# Time Complexity: O(n)
# Space Complexity: O(min(n, k))

# Example Usage:
print(containsDuplicate([1, 2, 3, 1], 3)) # True
print(containsDuplicate([1, 0, 1, 1], 1)) # True
print(containsDuplicate([1, 2, 3, 1, 2, 3], 2)) # False
