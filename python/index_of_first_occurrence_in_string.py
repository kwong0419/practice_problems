# Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

# Example 1:

# Input: haystack = "sadbutsad", needle = "sad"
# Output: 0
# Explanation: "sad" occurs at index 0 and 6.
# The first occurrence is at index 0, so we return 0.

# Example 2:

# Input: haystack = "leetcode", needle = "leeto"
# Output: -1
# Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

# Constraints:

# 1 <= haystack.length, needle.length <= 10^4
# haystack and needle consist of only lowercase English characters.

def index_of_first_occurrence(haystack, needle):
    if not needle:
        return 0  # Edge case: empty needle

    haystack_length = len(haystack)
    needle_length = len(needle)

    for i in range(haystack_length - needle_length + 1):
        # Check substring of haystack starting at index i
        if haystack[i:i + needle_length] == needle:
            return i  # Found the first occurrence

    return -1  # Needle not found in haystack

# Time Complexity: O((n - m) * m) where n is the length of haystack and m is the length of needle
# Space Complexity: O(1) - using only a constant amount of extra space

# Example usage:
print(index_of_first_occurrence("sadbutsad", "sad"))  # Output: 0
print(index_of_first_occurrence("leetcode", "leeto"))  # Output: