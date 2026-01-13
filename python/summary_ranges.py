# You are given a sorted unique integer array nums.

# A range [a,b] is the set of all integers from a to b (inclusive).

# Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

# Each range [a,b] in the list should be output as:

# "a->b" if a != b
# "a" if a == b


# Example 1:

# Input: nums = [0,1,2,4,5,7]
# Output: ["0->2","4->5","7"]
# Explanation: The ranges are:
# [0,2] --> "0->2"
# [4,5] --> "4->5"
# [7,7] --> "7"

# Example 2:

# Input: nums = [0,2,3,4,6,8,9]
# Output: ["0","2->4","6","8->9"]
# Explanation: The ranges are:
# [0,0] --> "0"
# [2,4] --> "2->4"
# [6,6] --> "6"
# [8,9] --> "8->9"


# Constraints:

# 0 <= nums.length <= 20
# -2^31 <= nums[i] <= 2^31 - 1
# All the values of nums are unique.
# nums is sorted in ascending order.

def summary_ranges(nums):
    if len(nums) == 0:
        return []

    result = []
    start = 0

    for i in range(len(nums)):
        # Check if we're at the end OR the next number is not consecutive
        if i == len(nums) - 1 or nums[i + 1] != nums[i] + 1:
            # If the start is equal to the current index, we have a single element
            if start == i:
                result.append(str(nums[start]))
            else:
                result.append(str(nums[start]) + '->' + str(nums[i]))
            start = i + 1

    return result

# Time Complexity: O(n)
# Space Complexity: O(n) where n is the length of the input array

# Example Usage:
print(summary_ranges([0, 1, 2, 4, 5, 7]))  # ["0->2","4->5","7"]
print(summary_ranges([0, 2, 3, 4, 6, 8, 9]))  # ["0","2->4","6","8->9"]
