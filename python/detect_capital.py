# We define the usage of capitals in a word to be right when one of the following cases holds:

# All letters in this word are capitals, like "USA".
# All letters in this word are not capitals, like "leetcode".
# Only the first letter in this word is capital, like "Google".
# Given a string word, return true if the usage of capitals in it is right.

# Example 1:

# Input: word = "USA"
# Output: true

# Example 2:

# Input: word = "FlaG"
# Output: false


# Constraints:

# 1 <= word.length <= 100
# word consists of lowercase and uppercase English letters.

def detect_capital_use(word: str) -> bool:
    small = word.lower()
    big = word.upper()
    if word == small or word == big:
        return True
    for i in range(1, len(word)):
        if word[i] != small[i]:
            return False
    return True

# Time Complexity: O(n)
# Space Complexity: O(1)

# Example Usage:
print(detect_capital_use("USA"))  # Output: True
print(detect_capital_use("FlaG"))  # Output: False
