// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]

// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]

// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
 

// Follow up: Could you solve it without reversing the input lists?

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    let carry = 0;
    let head = null;
    
    while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
        let sum = carry;
        
        if (stack1.length > 0) sum += stack1.pop();
        if (stack2.length > 0) sum += stack2.pop();
        
        carry = Math.floor(sum / 10);
        let newNode = new ListNode(sum % 10);
        newNode.next = head;
        head = newNode;
    }
    
    return head;
}

// Time Complexity: O(max(m, n)) where m and n are the lengths of the two linked lists
// Space Complexity: O(m + n) for the stacks used to store the digits

// Example Usage:
let l1 = new ListNode(7);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
l1.next.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2)); // [7,8,0,7]

let l3 = new ListNode(2);
l3.next = new ListNode(4);
l3.next.next = new ListNode(3);

let l4 = new ListNode(5);
l4.next = new ListNode(6);
l4.next.next = new ListNode(4);

console.log(addTwoNumbers(l3, l4)); // [8,0,7]

let l5 = new ListNode(0);
let l6 = new ListNode(0);

console.log(addTwoNumbers(l5, l6)); // [0]  