# Given two strings s and t, determine if they are isomorphic.

# Two strings s and t are isomorphic if the characters in s can be replaced to get t.

# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

# Example 1:

# Input: s = "egg", t = "add"

# Output: true

# Explanation:

# The strings s and t can be made identical by:

# Mapping 'e' to 'a'.
# Mapping 'g' to 'd'.
# Example 2:

# Input: s = "foo", t = "bar"

# Output: false

# Explanation:

# The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

# Example 3:

# Input: s = "paper", t = "title"

# Output: true

 

# Constraints:

# 1 <= s.length <= 5 * 10^4
# t.length == s.length
# s and t consist of any valid ascii character.

def is_isomorphic(s, t):
    map_s = {}
    map_t = {}
    
    for i in range(len(s)):
        char_s = s[i]
        char_t = t[i]
        
        if (map_s.get(char_s, char_t) != char_t or 
            map_t.get(char_t, char_s) != char_s):
            return False
        
        map_s[char_s] = char_t
        map_t[char_t] = char_s
    
    return True

# Time Complexity: O(n)
# Space Complexity: O(n)

# Example Usage:
print(is_isomorphic("egg", "add")) # True
print(is_isomorphic("foo", "bar")) # False
print(is_isomorphic("paper", "title")) # True
