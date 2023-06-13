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



// linked list
// graph
// btree bft target

class Node {
    constructor(v) {
        this.v = v;
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

function bft(root, t) {
    if (root === null) return false;
    const queue = [root];
    while (queue.length > 0) {
        const cur = queue.shift();
        if (cur.v === t) return true;
        if (cur.left !== null) queue.push(cur.left);
        if (cur.right !== null) queue.push(cur.right);
    }
    return false;
}

console.log(bft(a, 'c'));
console.log(bft(a, 'z'));