// Sets up a generic node for a binary tree
// class Node {
//     constructor(val) {
//         this.val = val;    // Value of the node
//         this.left = null;  // Left edge
//         this.right = null; // Right edge
//     }
// }

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     a
//    / \
//   b   c
//  / \   \
// d   e   f


function dft(root, t) {
    if (root === null) return false;
    if (root.val === t) return true;
    return dft(root.left, t) || dft(root.right, t);
}
console.log(dft(a, 'b'));
console.log(dft(a, 'z'));

// function bft(root) {
    
// }
// console.log(bft(a));





// const g = new Node(3);
// const h = new Node(11);
// const i = new Node(4);
// const j = new Node(4);
// const k = new Node(2);
// const l = new Node(1);
// g.left = h;
// g.right = i;
// h.left = j;
// h.right = k;
// i.right = l;

// // === Algorithms ===

// // Binary Tree depth first traversal algorithm
// // Prompt: Write a function that take in the root of a binary tree and returns an array with all of the values in the tree in depth-first order. Depth-first traversal means traverse top-down from left to right. 

// // Iterative
// function depthFirstIterative(root) {
//     if (root === null) return [];
//     const result = [];
//     const stack = [root];
//     while (stack.length > 0) {
//         const current = stack.pop();
//         result.push(current.val);
//         if (current.right) stack.push(current.right);
//         if (current.left) stack.push(current.left);
//     }
//     return result;
// }
// // Test
// // console.log(depthFirstIterative(a));

// // Recursive
// function depthFirstRecursive(root) {
//     if (root === null) return [];
//     const leftValues = depthFirstRecursive(root.left);
//     const rightValues = depthFirstRecursive(root.right);
//     return [root.val, ...leftValues, ...rightValues];
// }
// // Test
// // console.log(depthFirstRecursive(a));

// // Search for target value in tree (depth first), return T/F if it exists.
// function depthFirstSearch(root, target) {
//     if (root === null) return false;
//     if (root.val === target) return true;
//     return depthFirstSearch(root.left, target) || depthFirstSearch(root.right, target);
// }
// // Test
// // console.log(depthFirstSearch(a, 'e'));

// // Binary Tree breadth first traversal algorithm
// // Prompt: Write a function that takes the root of a binary tree and returns an array in breadth-first (level) order. Depth-first traverses top-down from left to right by level.

// function breadthFirst(root) {
//     if (root === null) return [];
//     const result = [];
//     const queue = [root];
//     while (queue.length > 0) {
//         const current = queue.shift();
//         result.push(current.val);
//         if (current.left !== null) queue.push(current.left);
//         if (current.right !== null) queue.push(current.right);
//     }
//     return result;
// }
// // Test
// // console.log(breadthFirst(a));

// // Search for target value in tree (breadth first), return T/F if it exists.

// function breadthFirstSearch(root, target) {
//     if (root === null) return false;
//     const queue = [root];
//     while (queue.length > 0) {
//         const current = queue.shift();
//         if (current.val === target) return true
//         if (current.left) queue.push(current.left);
//         if (current.right) queue.push(current.right)
//     }
//     return false;
// }
// // Test
// // console.log(breadthFirstSearch(a,'e'));

// // Tree Sum 
// // Prompt: Return the sum of a tree

// // Recursive
// function treeSumRecursive(root) {
//     if (root === null) return 0;
//     return root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right);
// }
// // Test
// // console.log(treeSum(g));

// // Iterative
// function treeSumIterative(root) {
//     if (root === null) return 0;
//     let totalSum = 0;
//     const queue = [root];
//     while (queue.length > 0) {
//         const current = queue.shift();
//         totalSum += current.val;
//         if (current.left !== null) queue.push(current.left);
//         if (current.right !== null) queue.push(current.right);
//     }
//     return totalSum;
// }
// // Test
// // console.log(treeSumIterative(g));

// // Tree Min
// // Prompt: Return the minimum value of a tree

// // Recursive
// function treeMinRecursive(root){
//     if (root === null) return Infinity;
//     const leftMin = treeMinRecursive(root.left);
//     const rightMin = treeMinRecursive(root.right);
//     return Math.min(root.val, leftMin, rightMin);
// }
// // Test
// // console.log(treeMinRecursive(g));

// // Iterative
// function treeMinIterative(root){
//     let smallest = Infinity; // Inifinity will be the default value
//     const stack = [root];
//     while (stack.length > 0) {
//         const current = stack.pop();
//         if (current.val < smallest) smallest = current.val;
//         if (current.left !== null) stack.push(current.left);
//         if (current.right !== null) stack.push(current.right);
//     }
//     return smallest;
// }
// // Test
// // console.log(treeMinIterative(g));

// // Max root to leaf path sum
// // Prompt: Return the max sum of all possible paths in a tree.

// function maxPathSum(root) {
//     if (root === null) return -Infinity;
//     if (root.left === null && root.right === null) return root.val;
//     const maxChildPathSum = Math.max(
//         maxPathSum(root.left),
//         maxPathSum(root.right)
//     );
//     return root.val + maxChildPathSum;
// }

// // Test
// console.log(maxPathSum(g));