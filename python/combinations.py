# Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

# You may return the answer in any order.



# Example 1:

# Input: n = 4, k = 2
# Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
# Explanation: There are 4 choose 2 = 6 total combinations.
# Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

# Example 2:

# Input: n = 1, k = 1
# Output: [[1]]
# Explanation: There is 1 choose 1 = 1 total combination.


# Constraints:

# 1 <= n <= 20
# 1 <= k <= n

def combinations(n, k):
    result = []

    # Helper function to perform backtracking
    def backtrack(start, current_combination):
        # Base case: if the current combination has k numbers, add it to the result
        if len(current_combination) == k:
            result.append(list(current_combination))
            return

        # Iterate through the numbers from start to n
        for i in range(start, n + 1):
            # Add the current number to the combination
            current_combination.append(i)
            # Recursively call backtrack with the next number
            backtrack(i + 1, current_combination)
            # Remove the current number from the combination
            current_combination.pop()

    # Start the backtracking process from the first number
    backtrack(1, [])
    return result

# Time Complexity: O(n choose k)
# Space Complexity: O(k)

# Example Usage:
print(combinations(4, 2)) # [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
print(combinations(1, 1)) # [[1]]
