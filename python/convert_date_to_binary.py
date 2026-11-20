# You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

# date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.

# Return the binary representation of date.

 

# Example 1:

# Input: date = "2080-02-29"

# Output: "100000100000-10-11101"

# Explanation:

# 100000100000, 10, and 11101 are the binary representations of 2080, 02, and 29 respectively.

# Example 2:

# Input: date = "1900-01-01"

# Output: "11101101100-1-1"

# Explanation:

# 11101101100, 1, and 1 are the binary representations of 1900, 1, and 1 respectively.

 

# Constraints:

# date.length == 10
# date[4] == date[7] == '-', and all other date[i]'s are digits.
# The input is generated such that date represents a valid Gregorian calendar date between Jan 1st, 1900 and Dec 31st, 2100 (both inclusive).

def convertDateToBinary(date):
    binary_year = ''
    binary_month = ''
    binary_day = ''
    year_string = ''
    month_string = ''
    day_string = ''
    i = 0
    # Convert year to binary
    while date[i] != '-':
        year_string += date[i]
        i += 1
    # Convert month to binary
    i += 1 # skip '-'
    while date[i] != '-':
        month_string += date[i]
        i += 1
    # Convert day to binary
    i += 1 # skip '-'
    while i < len(date):
        day_string += date[i]
        i += 1
    binary_year = bin(int(year_string))[2:]
    binary_month = bin(int(month_string))[2:]
    binary_day = bin(int(day_string))[2:]
    return f'{binary_year}-{binary_month}-{binary_day}'


# Time Complexity: O(n)
# Space Complexity: O(1)

# Example Usage:
print(convertDateToBinary("2080-02-29")) # "100000100000-10-11101"
print(convertDateToBinary("1900-01-01")) # "11101101100-1-1"
