# Given a valid (IPv4) IP address, return a defanged version of that IP address.

# A defanged IP address replaces every period "." with "[.]".

 

# Example 1:

# Input: address = "1.1.1.1"
# Output: "1[.]1[.]1[.]1"
# Example 2:

# Input: address = "255.100.50.0"
# Output: "255[.]100[.]50[.]0"
 

# Constraints:

# The given address is a valid IPv4 address.

def defangIPaddr(address):
    ans = ""
    for char in address:
        if char == ".":
            ans += "[.]"
        else:
            ans += char
    return ans

# Time Complexity: O(n)
# Space Complexity: O(n)

print(defangIPaddr("1.1.1.1")) # "1[.]1[.]1[.]1"
print(defangIPaddr("255.100.50.0")) # "255[.]100[.]50[.]0"
