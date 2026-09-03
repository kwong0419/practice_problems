# You are given an integer array nums. Transform nums by performing the following operations in the exact order specified:

# Replace each even number with 0.
# Replace each odd numbers with 1.
# Sort the modified array in non-decreasing order.
# Return the resulting array after performing these operations.

 

# Example 1:

# Input: nums = [4,3,2,1]

# Output: [0,0,1,1]

# Explanation:

# Replace the even numbers (4 and 2) with 0 and the odd numbers (3 and 1) with 1. Now, nums = [0, 1, 0, 1].
# After sorting nums in non-descending order, nums = [0, 0, 1, 1].

# Example 2:

# Input: nums = [1,5,1,4,2]

# Output: [0,0,1,1,1]

# Explanation:

# Replace the even numbers (4 and 2) with 0 and the odd numbers (1, 5 and 1) with 1. Now, nums = [1, 1, 1, 0, 0].
# After sorting nums in non-descending order, nums = [0, 0, 1, 1, 1].

def transform_array_by_parity(nums):
    # Replace each even number with 0 and each odd number with 1
    for i in range(len(nums)):
        if nums[i] % 2 == 0:
            nums[i] = 0
        else:
            nums[i] = 1
    # Sort the modified array in non-decreasing order
    nums.sort()
    return nums

# Time Complexity: O(n log n)
# Space Complexity: O(1)

# Example Usage:
print(transform_array_by_parity([4, 3, 2, 1]))  # [0, 0, 1, 1]
print(transform_array_by_parity([1, 5, 1, 4, 2]))  # [0, 0, 1, 1, 1]
