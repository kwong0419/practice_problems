# Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

# Example 1:

# Input: n = 3
# Output: ["((()))","(()())","(())()","()(())","()()()"]

# Example 2:

# Input: n = 1
# Output: ["()"]


# Constraints:

# 1 <= n <= 8

def generate_parenthesis(n: int) -> list[str]:
    result = []
    
    # Recursively build valid combinations by adding '(' or ')' based on counts
    # Only add '(' if open < n, and only add ')' if close < open (to maintain validity)
    def backtrack(current: str, open: int, close: int):
        if len(current) == 2 * n:
            result.append(current)
            return
        if open < n:
            backtrack(current + '(', open + 1, close)
        if close < open:
            backtrack(current + ')', open, close + 1)
    
    backtrack('', 0, 0)
    return result

# Time Complexity: O(4^n / sqrt(n))
# Space Complexity: O(n)

# Example Usage:
print(generate_parenthesis(3))  # ["((()))","(()())","(())()","()(())","()()()"]
print(generate_parenthesis(1))  # ["()"]
