# Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

# Example 1:

# Input: s = "abccccdd"
# Output: 7
# Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

# Example 2:

# Input: s = "a"
# Output: 1
# Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

# Constraints:

# 1 <= s.length <= 2000
# s consists of lowercase and/or uppercase English letters only.

def longestPalindrome(s: str) -> int:
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1

    length = 0
    odd_count_found = False

    for count in char_count.values():
        if count % 2 == 0:
            length += count
        else:
            length += count - 1
            odd_count_found = True

    if odd_count_found:
        length += 1

    return length

# Time Complexity: O(n), where n is the length of the input string s, since we need to iterate through the string to count the characters and then iterate through the character counts.
# Space Complexity: O(1), since the character count dictionary will have at most 52

# Example Usage:
print(longestPalindrome("abccccdd"))  # 7
print(longestPalindrome("a")) # 1