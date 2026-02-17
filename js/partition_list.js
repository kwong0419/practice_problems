// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example 1:


// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]

// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]


// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200

function partitionList(head, x) {
    // Create two dummy nodes for the two partitions
    let lessHead = { val: 0, next: null };
    let greaterHead = { val: 0, next: null };

    // Pointers to build the two lists
    let less = lessHead;
    let greater = greaterHead;

    // Traverse the original list
    let current = head;
    while (current) {
        if (current.val < x) {
            less.next = current;
            less = less.next;
        } else {
            greater.next = current;
            greater = greater.next;
        }
        current = current.next;
    }

    // Connect the two lists
    greater.next = null; // Important: terminate the list
    less.next = greaterHead.next;

    return lessHead.next;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Example Usage:
console.log(partitionList([1, 4, 3, 2, 5, 2], 3)); // [1,2,2,4,3,5]
console.log(partitionList([2, 1], 2)); // [1,2]
