// // Similar to arrays, but cannot have duplicate values. Order is also not maintained via indexes (iterating with (for x in arr) wont work).

// let str = new Set('bookkeeper');
// console.log(str); // Expects ['b','o','k','e','p','r']

// let nums = new Set();
// nums.add(1);
// nums.add(2);
// nums.add(1); // Will be ignored
// nums.add('Hello');
// nums.add('Hi');
// console.log(nums); // Expects ['1','2','Hello','Hi']

// // Iteration works just like with an array
// for (let char of nums) console.log(char); 

// b tree
// graph
// leet code ?
// dsa notes review ?

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function dft(root, tar) {
    if (root === null) return false;
    if (root.val === tar) return true;
    return dft(root.left, tar) || dft(root.right, tar);
}
// console.log(dft(a))
// console.log(dft(a, 'C'))
// console.log(dft(a, 'Z'))

function bft(root, tar) {
    if (root === null) return false;
    const q = [root];
    while (q.length > 0) {
        const cur = q.shift();
        if (cur.val === tar) return true;
        if (cur.left !== null) q.push(cur.left);
        if (cur.right !== null) q.push(cur.right);
    }
    return false;
}
// console.log(bft(a))
console.log(bft(a, 'C'))
console.log(bft(a, 'Z'))