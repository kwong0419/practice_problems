# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



# Example 1:

# Input: s = "leetcode"

# Output: 0

# Explanation:

# The character 'l' at index 0 is the first character that does not occur at any other index.

# Example 2:

# Input: s = "loveleetcode"

# Output: 2

# Example 3:

# Input: s = "aabb"

# Output: -1



# Constraints:

# 1 <= s.length <= 10^5
# s consists of only lowercase English letters.

def first_uniq_char(s):
    """
    Finds the first non-repeating character in a string.
    Args:
        s: The input string.
    Returns:
        The index of the first non-repeating character, or -1 if it does not exist.
    """
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
    return -1

# Time Complexity: O(n)
# Space Complexity: O(1)

# Example Usage:
print(first_uniq_char("leetcode"))  # 0
print(first_uniq_char("loveleetcode"))  # 2
print(first_uniq_char("aabb"))  # -1
