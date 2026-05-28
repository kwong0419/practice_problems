# Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

# Example 1:

# Input: nums = [4,3,2,7,8,2,3,1]
# Output: [5,6]

# Example 2:

# Input: nums = [1,1]
# Output: [2]
 

# Constraints:

# n == nums.length
# 1 <= n <= 10^5
# 1 <= nums[i] <= n
 

# Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

def find_disappeared_numbers(nums):
    for num in nums:
        index = abs(num) - 1
        if nums[index] > 0:
            nums[index] = -nums[index]
    result = []
    for i in range(len(nums)):
        if nums[i] > 0:
            result.append(i + 1)
    return result

# Time Complexity: O(n)
# Space Complexity: O(1)

# Example Usage:
print(find_disappeared_numbers([4, 3, 2, 7, 8, 2, 3, 1])) # [5, 6]
print(find_disappeared_numbers([1, 1])) # [2]
