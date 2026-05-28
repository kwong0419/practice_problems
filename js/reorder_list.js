// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 10^4].
// 1 <= Node.val <= 1000

function reorderList(head) {
    if (!head || !head.next) return head;

    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let second = slow.next
    slow.next = null

    let prev = null
    let curr = second
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    let left = head
    let right = prev
    while (right) {
        let leftNext = left.next
        let rightNext = right.next
        left.next = right
        right.next = leftNext
        left = leftNext
        right = rightNext
    }
    return head
}

// Time Complexity: O(n)
// Space Complexity: O(1)

// Example Usage:
console.log(reorderList([1,2,3,4])); // [1,4,2,3]
console.log(reorderList([1,2,3,4,5])); // [1,5,2,4,3]