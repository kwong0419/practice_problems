// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 
// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 10^5].
// 0 <= Node.val <= 9

function isPalindrome(head) {
    const vals = [];
    while (head) {
        vals.push(head.val);
        head = head.next;
    }
    return vals.every((val, i) => val === vals[vals.length - 1 - i]);
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Example Usage:
console.log(isPalindrome([1,2,2,1])); // true
console.log(isPalindrome([1,2])); // false
