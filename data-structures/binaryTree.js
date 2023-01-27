// Sets up a generic node for a binary tree
class Node {
    constructor(val) {
        this.val = val;    // Value of the node
        this.left = null;  // Left edge
        this.right = null; // Right edge
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

// === Algorithms ===

// Binary Tree depth first traversal algorithm
// Prompt: Write a function that take in the root of a binary tree and returns an array with all of the values in the tree in depth-first order. Depth-first traversal means traverse top-down from left to right. 

// Iterative
function depthFirstIterative(root){
    if (root === null) return [];
    const result = [];
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return result;
}
// Test
// console.log(depthFirstIterative(a));

// Recursive
function depthFirstRecursive(root){
    if (root === null) return [];
    const leftValues = depthFirstRecursive(root.left);
    const rightValues = depthFirstRecursive(root.right);
    return [root.val, ...leftValues, ...rightValues];
}
// Test
// console.log(depthFirstRecursive(a));

// Binary Tree breadth first traversal algorithm
// Prompt: Write a function that takes the root of a binary tree and returns an array in breadth-first (level) order. Depth-first traverses top-down from left to right by level.

function breadthFirst(root) {
    if (root === null) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.val);
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return result;
}
// Test
// console.log(breadthFirst(a));

