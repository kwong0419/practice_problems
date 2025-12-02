// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:

// Input: head = [], val = 1
// Output: []

// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []

// Constraints:

// The number of nodes in the list is in the range [0, 10^4].
// 1 <= Node.val <= 50
// 0 <= val <= 50

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function removeElements(head, val) {
    if (!head) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    while (current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return dummy.next;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Helper function to convert array to linked list
function arrayToList(arr) {
    if (!arr || arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function listToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Example Usage:
console.log(listToArray(removeElements(arrayToList([1, 2, 6, 3, 4, 5, 6]), 6))); // [1,2,3,4,5]
console.log(listToArray(removeElements(arrayToList([]), 1))); // []
console.log(listToArray(removeElements(arrayToList([7, 7, 7, 7]), 7))); // []