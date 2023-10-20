// // Stacks are linear collections of elements (like arrays) but are considered 'first-in last-out'. Data can only be removed/added with pop/push type methods.

// class Stack {
//     constructor() {
//         this.items = []; // Will store our items
//     }
//     push(value) {
//         this.items.push(value)
//     }
//     pop() {
//         if (this.items.length !== 0) this.items.pop();
//     }
//     peek() {
//         if (this.items.length !== 0) console.log(this.items[this.items.length - 1]);
//     }
//     print() {
//         console.log(this.items.join('|'));
//     }
// }

// let stack = new Stack();
// stack.push(1);
// stack.print();
// stack.push(2);
// stack.print();
// stack.push(3);
// stack.print();
// stack.push(4);
// stack.print();
// stack.peek(); // Expects 4


// btree
// graph
// m sort

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

function dft(root, t) {
    if (root === null) return false;
    if (root.val === t) return true;
    return dft(root.left, t) || dft(root.right, t);
}
// console.log(dft(a));
console.log(dft(a, 'a'));
console.log(dft(a, 'z'));

function bft(root, t) {
    if (root === null) return false;
    const q = [root];
    while (q.length > 0) {
        const cur = q.shift();
        if (cur.val === t) return true;
        if (cur.left !== null) q.push(cur.left);
        if (cur.right !== null) q.push(cur.right);
    }
    return false;
}
// console.log(bft(a));
console.log(bft(a, 'a'));
console.log(bft(a, 'z'));