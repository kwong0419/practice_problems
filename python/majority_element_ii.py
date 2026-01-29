# Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.


# Example 1:

# Input: nums = [3,2,3]
# Output: [3]

# Example 2:

# Input: nums = [1]
# Output: [1]

# Example 3:

# Input: nums = [1,2]
# Output: [1,2]


# Constraints:

# 1 <= nums.length <= 5 * 104
# -109 <= nums[i] <= 109


# Follow up: Could you solve the problem in linear time and in O(1) space?


# Solution 1: Simple Hash Map Approach
def majorityElementSimple(nums):
    threshold = len(nums) // 3
    count_map = {}
    result = []

    # Count occurrences of each element
    for num in nums:
        count_map[num] = count_map.get(num, 0) + 1

    # Find elements that appear more than ⌊n/3⌋ times
    for num, count in count_map.items():
        if count > threshold:
            result.append(num)

    return result
# Time Complexity: O(n) - single pass through array
# Space Complexity: O(n) - hash map can store up to n elements in worst case


# Solution 2: Optimal Boyer-Moore Voting Algorithm
# Insight: There can be at most 2 elements that appear more than ⌊n/3⌋ times
def majorityElement(nums):
    # 1. Find potential candidates
    candidate1, candidate2 = None, None
    count1, count2 = 0, 0

    for num in nums:
        if candidate1 == num:
            count1 += 1
        elif candidate2 == num:
            count2 += 1
        elif count1 == 0:
            candidate1 = num
            count1 = 1
        elif count2 == 0:
            candidate2 = num
            count2 = 1
        else:
            # Different element found, decrement both counts
            count1 -= 1
            count2 -= 1

    # 2. Verify candidates
    threshold = len(nums) // 3
    count1 = 0
    count2 = 0

    for num in nums:
        if num == candidate1:
            count1 += 1
        elif num == candidate2:
            count2 += 1

    result = []
    if count1 > threshold:
        result.append(candidate1)
    if count2 > threshold:
        result.append(candidate2)

    return result
# Time Complexity: O(n) - two passes through array
# Space Complexity: O(1) - only uses constant extra space


# Example Usage:
print("Simple:")
print(majorityElementSimple([3, 2, 3]))  # [3]
print(majorityElementSimple([1]))  # [1]
print(majorityElementSimple([1, 2]))  # [1,2]
print("\n")
print("Optimal:")
print(majorityElement([3, 2, 3]))  # [3]
print(majorityElement([1]))  # [1]
print(majorityElement([1, 2]))  # [1,2]

