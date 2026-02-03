# Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

# Each letter in magazine can only be used once in ransomNote.



# Example 1:

# Input: ransomNote = "a", magazine = "b"
# Output: false

# Example 2:

# Input: ransomNote = "aa", magazine = "ab"
# Output: false

# Example 3:

# Input: ransomNote = "aa", magazine = "aab"
# Output: true


# Constraints:

# 1 <= ransomNote.length, magazine.length <= 10^5
# ransomNote and magazine consist of lowercase English letters.

def canConstruct(ransomNote, magazine):
    counts = [0] * 26

    # Count characters in magazine
    for char in magazine:
        counts[ord(char) - 97] += 1

    # Check if ransomNote can be constructed
    for char in ransomNote:
        index = ord(char) - 97
        if counts[index] == 0:
            return False
        counts[index] -= 1

    return True

# Time Complexity: O(n + m)
# Space Complexity: O(1)

# Example Usage:
print(canConstruct("a", "b"))  # False
print(canConstruct("aa", "ab"))  # False
print(canConstruct("aa", "aab"))  # True
