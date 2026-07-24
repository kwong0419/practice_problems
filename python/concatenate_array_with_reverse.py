# You are given an integer array nums of length n.

# Construct a new array ans of length 2 * n such that the first n elements are the same as nums, and the next n elements are the elements of nums in reverse order.

# Formally, for 0 <= i <= n - 1:

# ans[i] = nums[i]
# ans[i + n] = nums[n - i - 1]
# Return an integer array ans.

 

# Example 1:

# Input: nums = [1,2,3]

# Output: [1,2,3,3,2,1]

# Explanation:

# The first n elements of ans are the same as nums.

# For the next n = 3 elements, each element is taken from nums in reverse order:

# ans[3] = nums[2] = 3
# ans[4] = nums[1] = 2
# ans[5] = nums[0] = 1
# Thus, ans = [1, 2, 3, 3, 2, 1].

# Example 2:

# Input: nums = [1]

# Output: [1,1]

# Explanation:

# The array remains the same when reversed. Thus, ans = [1, 1].

 

# Constraints:

# 1 <= nums.length <= 100
# 1 <= nums[i] <= 100

from _typeshed import _type_checker_internals
def concatenate_array_with_reverse(nums):
    ans = []
    for num in nums:
        ans.append(num)
    for i in range(len(nums) - 1, -1, -1):
        ans.append(nums[i])
    return ans

def concatenate_array_with_reverse_optimal(nums):
    n = len(nums)
    ans = [0] * (n * 2)
    for i in range(n):
        ans[i] = nums[i]
        ans[n * 2 - 1 - i] = nums[i]
    return ans

# Time Complexity: O(n)
# Space Complexity: O(n)

# Example Usage: 
print(concatenate_array_with_reverse([1,2,3])) # [1,2,3,3,2,1]
print(concatenate_array_with_reverse([1])) # [1,1]

print(concatenate_array_with_reverse_optimal([1,2,3])) # [1,2,3,3,2,1]
print(concatenate_array_with_reverse_optimal([1])) # [1,1]