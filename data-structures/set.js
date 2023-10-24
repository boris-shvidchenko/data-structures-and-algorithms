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

// binary search
// merge sort
// btree
// fib
// sel sort
// quick sort

const l = [1,2,3,4,5];
// const l = [1,40,-90,3.4,356,-900,2];

function mergeSort(list) {}
function sort(left, right) {}
function binarySearch(list, t) {}
function quickSort(list) {}
function selSort(list, res=[]) {}
function fibMemo(v, memo={}) {}
function fibtab(v) {}



// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.length = 0;
//         this.head = null;
//     }
//     append(node) {
//         const newNode = new Node(node);
//         let cur = this.head;
//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             while (cur.next !== null) {
//                 cur = cur.next;
//             }
//             cur.next = newNode;
//         }
//         this.length++;
//     }
//     appendAt(index, node) {
//         const newNode = new Node(node);
//         let cur = this.head;
//         let curIndex = 0;
//         let prev;
//         if (index === 0) {
//             this.head = newNode;
//             newNode.next = cur;
//         } else {
//             while (curIndex < index) {
//                 prev = cur;
//                 cur = cur.next;
//                 curIndex++;
//             }
//             prev.next = newNode;
//             newNode.next = cur;
//         }
//         this.length--;
//     }
//     remove(node) {
//         let cur = this.head;
//         let prev;
//         if (this.head.val === node) {
//             this.head = cur.next;
//         } else {
//             while (cur.val !== node) {
//                 prev = cur;
//                 cur = cur.next;
//             }
//             prev.next = cur.next;
//         }
//         this.length--;
//     }
//     print() {
//         let str = '';
//         let cur = this.head;
//         while (cur !== null) {
//             str += cur.val + '>';
//             cur = cur.next;
//         }
//         console.log(str);
//     }
// }

// Test
// const list = new LinkedList();
// list.append('a');
// list.append('b');
// list.append('c');
// list.print();
// list.remove('b'); // a -> c -> etc.
// list.appendAt(1,'z');
// list.print();


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

