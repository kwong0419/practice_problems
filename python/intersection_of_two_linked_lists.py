# Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

# For example, the following two linked lists begin to intersect at node c1:


# The test cases are generated such that there are no cycles anywhere in the entire linked structure.

# Note that the linked lists must retain their original structure after the function returns.

# Custom Judge:

# The inputs to the judge are given as follows (your program is not given these inputs):

# intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
# listA - The first linked list.
# listB - The second linked list.
# skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
# skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
# The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

# Example 1:

# Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
# Output: Intersected at '8'
# Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
# From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
# - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.

# Example 2:

# Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
# Output: Intersected at '2'
# Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
# From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

# Example 3:

# Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
# Output: No intersection
# Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
# Explanation: The two lists do not intersect, so return null.


# Constraints:

# The number of nodes of listA is in the m.
# The number of nodes of listB is in the n.
# 1 <= m, n <= 3 * 10^4
# 1 <= Node.val <= 10^5
# 0 <= skipA <= m
# 0 <= skipB <= n
# intersectVal is 0 if listA and listB do not intersect.
# intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.


# Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?

# Two Pointers
def getIntersectionNode(headA, headB):
    pA = headA
    pB = headB
    
    while pA != pB:
        pA = pA.next if pA else headB
        pB = pB.next if pB else headA
    
    return pA

# Time Complexity: O(m + n)
# Space Complexity: O(1)

# Example Usage:
class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None

# Example 1: listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], intersect at 8
a1 = ListNode(4)
a2 = ListNode(1)
intersection1 = ListNode(8)
a4 = ListNode(4)
a5 = ListNode(5)
a1.next = a2
a2.next = intersection1
intersection1.next = a4
a4.next = a5

b1 = ListNode(5)
b2 = ListNode(6)
b3 = ListNode(1)
b1.next = b2
b2.next = b3
b3.next = intersection1  # Same node as in list A

result1 = getIntersectionNode(a1, b1)
print(f"Intersected at '{result1.val}'" if result1 else "No intersection")  # Intersected at '8'

# Example 2: listA = [1,9,1,2,4], listB = [3,2,4], intersect at 2
c1 = ListNode(1)
c2 = ListNode(9)
c3 = ListNode(1)
intersection2 = ListNode(2)
c5 = ListNode(4)
c1.next = c2
c2.next = c3
c3.next = intersection2
intersection2.next = c5

d1 = ListNode(3)
d1.next = intersection2  # Same node as in list A

result2 = getIntersectionNode(c1, d1)
print(f"Intersected at '{result2.val}'" if result2 else "No intersection")  # Intersected at '2'

# Example 3: listA = [2,6,4], listB = [1,5], no intersection
e1 = ListNode(2)
e2 = ListNode(6)
e3 = ListNode(4)
e1.next = e2
e2.next = e3

f1 = ListNode(1)
f2 = ListNode(5)
f1.next = f2

result3 = getIntersectionNode(e1, f1)
print(f"Intersected at '{result3.val}'" if result3 else "No intersection")  # No intersection
