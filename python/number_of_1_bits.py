# Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).


# Example 1:

# Input: n = 11

# Output: 3

# Explanation:

# The input binary string 1011 has a total of three set bits.

# Example 2:

# Input: n = 128

# Output: 1

# Explanation:

# The input binary string 10000000 has a total of one set bit.

# Example 3:

# Input: n = 2147483645

# Output: 30

# Explanation:

# The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 

# Constraints:

# 1 <= n <= 2^31 - 1
 

# Follow up: If this function is called many times, how would you optimize it?

# Follow-up optimization: Precomputed lookup table for byte-wise counting
# This table stores the number of 1-bits for all possible byte values (0-255)
# When called many times, this is faster than calculating each time
_BIT_COUNT_TABLE = [bin(i).count('1') for i in range(256)]

def hammingWeight(n: int) -> int:
    # Count bits by processing the number byte by byte using lookup table
    count = 0
    while n:
        count += _BIT_COUNT_TABLE[n & 0xFF]  # Get last byte and lookup
        n >>= 8  # Shift right by 8 bits (1 byte)
    return count

# Time Complexity: O(1) for 32-bit integers (always 4 byte lookups)
# Space Complexity: O(1) - fixed 256-element lookup table

# Example Usage:
print(hammingWeight(11))  # 3
print(hammingWeight(128)) # 1
print(hammingWeight(2147483645)) # 30
