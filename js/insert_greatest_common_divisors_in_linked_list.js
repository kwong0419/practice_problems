// Given the head of a linked list head, in which each node contains an integer value.

// Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

// Return the linked list after insertion.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:

// Input: head = [18,6,10,3]
// Output: [18,6,6,2,10,1,3]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
// - We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
// - We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
// - We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
// There are no more adjacent nodes, so we return the linked list.

// Example 2:

// Input: head = [7]
// Output: [7]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
// There are no pairs of adjacent nodes, so we return the initial linked list.
 

// Constraints:

// The number of nodes in the list is in the range [1, 5000].
// 1 <= Node.val <= 1000

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Helper function to print the linked list
function printList(head) {
    let curr = head
    let result = []
    while (curr !== null) {
        result.push(curr.val)
        curr = curr.next
    }
    console.log(result)
}


function insertGreatestCommonDivisors (head) {
    let curr = head
    while (curr.next !== null) {
        let gcd = greatestCommonDivisor(curr.val, curr.next.val)
        let newNode = new ListNode(gcd)
        newNode.next = curr.next
        curr.next = newNode
        curr = curr.next.next
    }
    return head
}

function greatestCommonDivisor(a, b) {
    while (b !== 0) {
        let temp = b
        b = a % b
        a = temp
    }
    return a
}

// Time Complexity: O(n log(max(val)))
// Space Complexity: O(1)

// Example Usage:
let head = new ListNode(18)
head.next = new ListNode(6)
head.next.next = new ListNode(10)
head.next.next.next = new ListNode(3)


printList(insertGreatestCommonDivisors(head)) // [18, 6, 6, 2, 10, 1, 3]

let head2 = new ListNode(7)
printList(insertGreatestCommonDivisors(head2)) // [7]
