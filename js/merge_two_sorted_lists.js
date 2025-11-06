// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function mergeTwoLists(list1, list2) {
  // Create a dummy node to serve as the start of the merged list
  let dummy = new ListNode(0)
  let current = dummy

  // Pointers for list1 and list2
  let p1 = list1
  let p2 = list2

  // Traverse both lists and append the smaller value to the merged list
  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      current.next = p1
      p1 = p1.next
    } else {
      current.next = p2
      p2 = p2.next
    }
    current = current.next
  }

  // If there are remaining nodes in either list, append them
  if (p1 !== null) {
    current.next = p1
  } else if (p2 !== null) {
    current.next = p2
  }

  // Return the merged list, which starts from the next node of the dummy
  return dummy.next
}

// Time Complexity: O(n + m) where n and m are the lengths of list1 and list2
// Space Complexity: O(1) since we are reusing the existing nodes

// Example usage:
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

let mergedList = mergeTwoLists(list1, list2)

// Function to print the linked list
function printList(head) {
  let current = head
  let result = []
  while (current !== null) {
    result.push(current.val)
    current = current.next
  }
  console.log(result)
}

printList(mergedList) // Output: [1, 1, 2, 3, 4, 4]

// Test empty lists
printList(mergeTwoLists(null, null)) // Output: []

// Test one empty, one with single element
let singleNode = new ListNode(0)
printList(mergeTwoLists(null, singleNode)) // Output: [0]
