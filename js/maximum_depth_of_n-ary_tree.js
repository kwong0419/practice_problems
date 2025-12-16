// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Example 1:

// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3

// Example 2:

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: 5


// Constraints:

// The total number of nodes is in the range [0, 10^4].
// The depth of the n-ary tree is less than or equal to 1000.

// Node class
class Node {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

function maxDepth(root) {
    if (!root) return 0;
    let max = 0;
    for (let child of root.children) {
        max = Math.max(max, maxDepth(child));
    }
    return max + 1;
}

// Time Complexity: O(n) - visits each node once
// Space Complexity: O(h) - where h is height (recursion stack)

// Example Usage:
// Example 1: Tree with depth 3
//       1
//     / | \
//    3  2  4
//   / \
//  5   6
const node5 = new Node(5);
const node6 = new Node(6);
const node3 = new Node(3, [node5, node6]);
const node2 = new Node(2);
const node4 = new Node(4);
const root1 = new Node(1, [node3, node2, node4]);

console.log(maxDepth(root1)); // 3

// Example 2: Tree with depth 5
//        1
//     / | | \ 
//    2  3  4  5
//      / \  \  |  \ 
//     6   7  8  9  10
//         |  |  |  
//         11 12 13
//         |
//         14
const node14 = new Node(14);
const node13 = new Node(13);
const node12 = new Node(12);
const node11 = new Node(11, [node14]);
const node10 = new Node(10);
const node9 = new Node(9, [node13]);
const node8 = new Node(8, [node12]);
const node7 = new Node(7, [node11]);
const node6b = new Node(6);
const node5b = new Node(5, [node9, node10]);
const node4b = new Node(4, [node8]);
const node3b = new Node(3, [node6b, node7]);
const node2b = new Node(2);
const root2 = new Node(1, [node2b, node3b, node4b, node5b]);

console.log(maxDepth(root2)); // 5
