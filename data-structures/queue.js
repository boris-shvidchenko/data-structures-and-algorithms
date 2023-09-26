// // Queues are 'first-in first-out' data structures. They use shift/unshift type operations to add/remove elements.

// class Queue {
//     constructor() {
//         this.items = [];
//     }
//     add(item) {
//         this.items.unshift(item);
//     }
//     remove() {
//         if (this.items.length !== 0) this.items.pop();
//     }
//     print() {
//         if (this.items.length !== 0) console.log(this.items.join('|'));
//     }
// }

// let queue = new Queue();
// queue.add(1);
// queue.print()
// queue.add(2);
// queue.print()
// queue.add(3);
// queue.print()
// queue.add(4);
// queue.print()
// queue.remove()
// queue.print()








    

// B Tree
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
console.log(dft(a, 'b'));
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
console.log(bft(a, 'b'));
console.log(bft(a, 'z'));