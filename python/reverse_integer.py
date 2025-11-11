# Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

# Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

# Example 1:

# Input: x = 123
# Output: 321
# Example 2:

# Input: x = -123
# Output: -321
# Example 3:

# Input: x = 120
# Output: 21
 

# Constraints:

# -2^31 <= x <= 2^31 - 1

def reverse_integer(x):
    INT_MIN, INT_MAX = -2**31, 2**31 - 1
    sign = -1 if x < 0 else 1
    x_abs = abs(x)
    reversed_x = 0

    while x_abs != 0:
        digit = x_abs % 10
        x_abs //= 10
        
        # Check for overflow before multiplying by 10
        if reversed_x > (INT_MAX - digit) // 10:
            return 0
        
        reversed_x = reversed_x * 10 + digit

    result = sign * reversed_x
    
    # Final bounds check (though the above check should prevent this)
    if result < INT_MIN or result > INT_MAX:
        return 0
        
    return result

# Example usage:
print(reverse_integer(123))      # Output: 321
print(reverse_integer(-123))     # Output: -321
print(reverse_integer(120))      # Output: 21

