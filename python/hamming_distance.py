# The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

# Given two integers x and y, return the Hamming distance between them.

 

# Example 1:

# Input: x = 1, y = 4
# Output: 2
# Explanation:
# 1   (0 0 0 1)
# 4   (0 1 0 0)
#        ↑   ↑
# The above arrows point to positions where the corresponding bits are different.

# Example 2:

# Input: x = 3, y = 1
# Output: 1
 

# Constraints:

# 0 <= x, y <= 2^31 - 1
 

# Note: This question is the same as 2220: Minimum Bit Flips to Convert Number.
# 

def hammingDistance(x, y):
    xor = x ^ y
    count = 0
    while xor > 0:
        xor &= (xor - 1)
        count += 1
    return count

# Time Complexity: O(1)
# Space Complexity: O(1)

# Example Usage:
print(hammingDistance(1, 4)) # 2
print(hammingDistance(3, 1)) # 1