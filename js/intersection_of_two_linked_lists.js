// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:


// The test cases are generated such that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

// Custom Judge:

// The inputs to the judge are given as follows (your program is not given these inputs):

// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

// Example 1:

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
// - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.

// Example 2:

// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

// Example 3:

// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.


// Constraints:

// The number of nodes of listA is in the m.
// The number of nodes of listB is in the n.
// 1 <= m, n <= 3 * 10^4
// 1 <= Node.val <= 10^5
// 0 <= skipA <= m
// 0 <= skipB <= n
// intersectVal is 0 if listA and listB do not intersect.
// intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.


// Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?

// Two Pointers
function getIntersectionNode(headA, headB) {
    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }

    return pA;
}

// Time Complexity: O(m + n)
// Space Complexity: O(1)

// Example Usage:
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Example 1: listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], intersect at 8
let a1 = new ListNode(4);
let a2 = new ListNode(1);
let intersection1 = new ListNode(8);
let a4 = new ListNode(4);
let a5 = new ListNode(5);
a1.next = a2;
a2.next = intersection1;
intersection1.next = a4;
a4.next = a5;

let b1 = new ListNode(5);
let b2 = new ListNode(6);
let b3 = new ListNode(1);
b1.next = b2;
b2.next = b3;
b3.next = intersection1; // Same node as in list A

console.log(getIntersectionNode(a1, b1) ? `Intersected at '${getIntersectionNode(a1, b1).val}'` : 'No intersection'); // Intersected at '8'

// Example 2: listA = [1,9,1,2,4], listB = [3,2,4], intersect at 2
let c1 = new ListNode(1);
let c2 = new ListNode(9);
let c3 = new ListNode(1);
let intersection2 = new ListNode(2);
let c5 = new ListNode(4);
c1.next = c2;
c2.next = c3;
c3.next = intersection2;
intersection2.next = c5;

let d1 = new ListNode(3);
d1.next = intersection2; // Same node as in list A

console.log(getIntersectionNode(c1, d1) ? `Intersected at '${getIntersectionNode(c1, d1).val}'` : 'No intersection'); // Intersected at '2'

// Example 3: listA = [2,6,4], listB = [1,5], no intersection
let e1 = new ListNode(2);
let e2 = new ListNode(6);
let e3 = new ListNode(4);
e1.next = e2;
e2.next = e3;

let f1 = new ListNode(1);
let f2 = new ListNode(5);
f1.next = f2;

console.log(getIntersectionNode(e1, f1) ? `Intersected at '${getIntersectionNode(e1, f1).val}'` : 'No intersection'); // No intersection
