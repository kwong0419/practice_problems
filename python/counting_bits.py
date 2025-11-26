# Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

# Example 1:

# Input: n = 2
# Output: [0,1,1]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10
# Example 2:

# Input: n = 5
# Output: [0,1,1,2,1,2]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10
# 3 --> 11
# 4 --> 100
# 5 --> 101

# Constraints:

# 0 <= n <= 10^5

# Follow up:

# It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
# Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

# 1
def count_bits_n_log_n(n):
    result = [0] * (n + 1)
    
    for i in range(n + 1):
        count = 0
        num = i
        
        # Count 1's in binary representation
        while num > 0:
            count += num & 1  # Check if last bit is 1
            num >>= 1         # Right shift to check next bit
        
        result[i] = count
    
    return result

# 2
def count_bits(n):
    result = [0] * (n + 1)
    
    for i in range(1, n + 1):
        # The number of 1's in i is the same as in i >> 1 plus 1 if the last bit is 1
        result[i] = result[i >> 1] + (i & 1)
    
    return result

# Time Complexity Comparison:
# 1: O(n log n) - For each number, count bits (log n operation)
# 2: O(n) - Single pass with DP

# Space Complexity: O(n) for all solutions (result array)

# Example usage:
if __name__ == "__main__":
    print("O(n log n) solution:")
    print(count_bits_n_log_n(2))  # Output: [0, 1, 1]
    print(count_bits_n_log_n(5))  # Output: [0, 1, 1, 2, 1, 2]

    print("\nO(n) DP solution:")
    print(count_bits(2))  # Output: [0, 1, 1]
    print(count_bits(5))  # Output: [0, 1, 1, 2, 1, 2]