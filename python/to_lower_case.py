# Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

# Example 1:

# Input: s = "Hello"
# Output: "hello"

# Example 2:

# Input: s = "here"
# Output: "here"

# Example 3:

# Input: s = "LOVELY"
# Output: "lovely"
 

# Constraints:

# 1 <= s.length <= 100
# s consists of printable ASCII characters.

def to_lower_case(s):
    return s.lower()

# Time Complexity: O(n), where n is the length of the string s
# Space Complexity: O(n), where n is the length of the string s

# Example Usage:
print(to_lower_case("Hello"))  # "hello"
print(to_lower_case("here"))  # "here"
print(to_lower_case("LOVELY"))  # "lovely"
