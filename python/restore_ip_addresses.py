# A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

# For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
# Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

 
# Example 1:

# Input: s = "25525511135"
# Output: ["255.255.11.135","255.255.111.35"]

# Example 2:

# Input: s = "0000"
# Output: ["0.0.0.0"]

# Example 3:

# Input: s = "101023"
# Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

# Constraints:

# 1 <= s.length <= 20
# s consists of digits only.

def restore_ip_addresses(s):
    result = []

    def backtracking(index, current_ip):
        if index == len(s) and len(current_ip) == 4:
            result.append(".".join(current_ip))
            return
        if index == len(s) or len(current_ip) == 4:
            return
        for i in range(index, index + 3):
            if i >= len(s):
                break
            ip = s[index:i + 1]
            if is_valid(ip):
                current_ip.append(ip)
                backtracking(i + 1, current_ip)
                current_ip.pop()
    backtracking(0, [])
    return result

def is_valid(ip):
    if len(ip) > 3:
        return False
    if len(ip) > 1 and ip[0] == '0':
        return False
    if int(ip) > 255:
        return False
    return True

# Time Complexity: O(n)
# Space Complexity: O(n)

# Example Usage:
print(restore_ip_addresses("25525511135")) # ["255.255.11.135","255.255.111.35"]
print(restore_ip_addresses("0000")) # ["0.0.0.0"]
print(restore_ip_addresses("101023")) # ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
