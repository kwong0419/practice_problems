# Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

# Example 1:

# Input: nums = [1,2,3]
# Output: 6

# Example 2:

# Input: nums = [1,2,3,4]
# Output: 24

# Example 3:

# Input: nums = [-1,-2,-3]
# Output: -6


# Constraints:

# 3 <= nums.length <= 10^4
# -1000 <= nums[i] <= 1000

def maximumProduct(nums):
    # Track the three largest and two smallest numbers
    max1 = max2 = max3 = float('-inf')
    min1 = min2 = float('inf')
    
    # Single pass through the array
    for num in nums:
        # Update three largest
        if num > max1:
            max3 = max2
            max2 = max1
            max1 = num
        elif num > max2:
            max3 = max2
            max2 = num
        elif num > max3:
            max3 = num
        
        # Update two smallest
        if num < min1:
            min2 = min1
            min1 = num
        elif num < min2:
            min2 = num
    
    # Maximum product is either:
    # 1. Three largest numbers (all positive or mixed)
    # 2. Two smallest (most negative) * largest (negative * negative = positive)
    return max(max1 * max2 * max3, min1 * min2 * max1)

# Time complexity: O(n) - single pass through the array
# Space complexity: O(1) - only using constant extra space

# Example usage:
print(maximumProduct([1, 2, 3]))  # 6
print(maximumProduct([1, 2, 3, 4]))  # 24
print(maximumProduct([-1, -2, -3]))  # -6
