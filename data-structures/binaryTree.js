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

// Binary Tree depth first values