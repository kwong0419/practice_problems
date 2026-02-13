// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).


// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.

// Example 3:

// Input: n = 2147483645

// Output: 30

// Explanation:

// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.



// Constraints:

// 1 <= n <= 2^31 - 1


// Follow up: If this function is called many times, how would you optimize it?

// Follow-up optimization: Precomputed lookup table for byte-wise counting
// This table stores the number of 1-bits for all possible byte values (0-255)
// When called many times, this is faster than calculating each time
const _BIT_COUNT_TABLE = Array.from({ length: 256 }, (_, i) =>
    i.toString(2).split('1').length - 1
);

function hammingWeight(n) {
    // Count bits by processing the number byte by byte using lookup table
    let count = 0;
    while (n) {
        count += _BIT_COUNT_TABLE[n & 0xFF];  // Get last byte and lookup
        n >>>= 8;  // Shift right by 8 bits (1 byte) - unsigned shift
    }
    return count;
}

// Time Complexity: O(1) for 32-bit integers (always 4 byte lookups)
// Space Complexity: O(1) - fixed 256-element lookup table

// Example Usage:
console.log(hammingWeight(11));  // 3
console.log(hammingWeight(128)); // 1
console.log(hammingWeight(2147483645)); // 30
