# Given a string s, find the length of the longest substring without duplicate characters.

# Example 1:

# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

# Example 2:

# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.

# Example 3:

# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


# Constraints:

# 0 <= s.length <= 5 * 10^4

# s consists of English letters, digits, symbols and spaces.

def length_of_longest_substring(s: str) -> int:
    left = 0
    max_length = 0
    char_map = {}

    for right in range(len(s)):
        # If character is already in the map and within the current window
        if s[right] in char_map and char_map[s[right]] >= left:
            # Move left pointer to the right of the last occurrence
            left = char_map[s[right]] + 1

        # Update the last seen index of the current character
        char_map[s[right]] = right

        # Update max length
        max_length = max(max_length, right - left + 1)

    return max_length

# Time Complexity: O(n)
# Space Complexity: O(min(n, m)) where m is the charset size

# Example Usage:
print(length_of_longest_substring("abcabcbb"))  # 3
print(length_of_longest_substring("bbbbb"))  # 1
print(length_of_longest_substring("pwwkew"))  # 3
