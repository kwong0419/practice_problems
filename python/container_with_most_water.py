# You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

# Find two lines that together with the x-axis form a container, such that the container contains the most water.

# Return the maximum amount of water a container can store.

# Notice that you may not slant the container.



# Example 1:


# Input: height = [1,8,6,2,5,4,8,3,7]
# Output: 49
# Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
# Example 2:

# Input: height = [1,1]
# Output: 1


# Constraints:

# n == height.length
# 2 <= n <= 10^5
# 0 <= height[i] <= 10^4

def maxArea(height):
    max_area = 0
    left = 0
    right = len(height) - 1

    while left < right:
        height_diff = right - left
        min_height = min(height[left], height[right])
        current_area = height_diff * min_height
        max_area = max(max_area, current_area)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area

# Time Complexity: O(n)
# Space Complexity: O(1)

# Example Usage:
print(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) # 49
print(maxArea([1, 1])) # 1
