# Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

 

# Example 1:

# Input: s = "aab"
# Output: [["a","a","b"],["aa","b"]]

# Example 2:

# Input: s = "a"
# Output: [["a"]]
 

# Constraints:

# 1 <= s.length <= 16
# s contains only lowercase English letters.

def partition(s: str) -> list[list[str]]:
    result = []
    currentPartition = []

    def backtrack(startIndex):
        if startIndex == len(s):
            result.append(currentPartition[:])
            return

        for endIndex in range(startIndex, len(s)):
            substring = s[startIndex:endIndex+1]
            if isPalindrome(substring):
                currentPartition.append(substring)
                backtrack(endIndex+1)
                currentPartition.pop()

    def isPalindrome(str):
        left = 0
        right = len(str)-1

        while left < right:
            if str[left] != str[right]:
                return False
            left += 1
            right -= 1
        return True

    backtrack(0)
    return result

# Time Complexity: O(n * 2^n)
# Space Complexity: O(n)

# Example Usage:
print(partition("aab")) # [["a","a","b"],["aa","b"]]
print(partition("a")) # [["a"]]