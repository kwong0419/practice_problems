// Given the head of a linked list, return the list after sorting it in ascending order.



// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:

// Input: head = []
// Output: []


// Constraints:

// The number of nodes in the list is in the range [0, 5 * 10^4].
// -10^5 <= Node.val <= 10^5


// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

// Helper function to merge two sorted linked lists
function merge(left, right) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (left && right) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    current.next = left || right;
    return dummy.next;
}

function sortList(head) {
    // Base case: if the list is empty or has only one node, it is already sorted
    if (!head || !head.next) {
        return head;
    }

    // Split the list into two halves using the slow and fast pointer technique
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    const left = sortList(head);
    const right = sortList(slow);

    return merge(left, right);
}

// Time Complexity: O(n logn)
// Space Complexity: O(1)

// Example Usage:
