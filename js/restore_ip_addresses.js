// A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

 

// Example 1:

// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]

// Example 2:

// Input: s = "0000"
// Output: ["0.0.0.0"]

// Example 3:

// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

// Constraints:

// 1 <= s.length <= 20
// s consists of digits only.

function restoreIpAddresses(s) {
    const result = []

    function backtracking(index, currentIp) {
        if (index === s.length && currentIp.length === 4) {
            result.push(currentIp.join('.'))
            return
        }
        if (index === s.length || currentIp.length === 4) return
        for (let i = index; i < index + 3; i++) {
            if (i >= s.length) break
            const IP = s.slice(index, i + 1)
            if (isvalid(IP)) {
                currentIp.push(IP)
                backtracking(i + 1, currentIp)
                currentIp.pop()
            }
        }
    }
    backtracking(0, [])
    return result
}

function isvalid(IP) {
    if (IP.length > 3) return false
    if (IP.length > 1 && IP[0] == 0) return false
    if (IP > 255) return false
    return true
}

// Time Complexity: O(n) - where n is the number of digits in s
// Space Complexity: O(n) - where n is the number of digits in s

// Example Usage:
console.log(restoreIpAddresses("25525511135")) // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses("0000")) // ["0.0.0.0"]
console.log(restoreIpAddresses("101023")) // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]