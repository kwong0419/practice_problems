// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.



// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]


// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const deleteDuplicates = (head) => {
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

// Time Complexity: O(n), where n is the number of nodes in the linked list. We traverse the list once.
// Space Complexity: O(1), as we are using only a constant amount of extra space

// Helper function to create a linked list from an array
const createLinkedList = (values) => {
    if (!values || values.length === 0) {
        return null;
    }
    const head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array for printing
const linkedListToArray = (head) => {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Example usage:
const head1 = createLinkedList([1, 1, 2]);
const result1 = deleteDuplicates(head1);
console.log(`Output: [${linkedListToArray(result1)}]`);

const head2 = createLinkedList([1, 1, 2, 3, 3]);
const result2 = deleteDuplicates(head2);
console.log(`Output: [${linkedListToArray(result2)}]`);