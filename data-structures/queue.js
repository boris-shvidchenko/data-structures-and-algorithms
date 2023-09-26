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

// bsearch
// m sort
// q sort
// s sort
// fib memo tab
// hash
// l list
// b tree
// graph

const a1 = [1,2,3,4,5,6];
// const a1 = [1,0.5,-93,232,6];

function mergeSort(list) {}
function sort(left, right) {}

function bsearch(list, t) {}

function qsort(list) {}

function selSort(list, res=[]) {}

function fib(v, memo={}) {}

function fib(v) {}

// Hash
// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Array(size);
//     }
// }

// Linked List
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }
//     append(node) {}
//     appendAt(index, node) {}
//     remove(node) {}
//     display() {}
// }

// Graph
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.edges = [];
//     }
//     connect(node) {
//         this.edges.push(node);
//         node.edges.push(this);
//     }
// }

// class Graph {
//     constructor(nodes) {
//         this.nodes = [...nodes];
//     }
//     dft(start, end, visited=new Set()) {}
//     bft(start, end) {}
//     sp(start, end) {}
//     rp(visited, end) {}
// }

// B Tree
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// function dft(root, t) {

// }
// console.log(dft(a));
// // console.log(dft(a, 'b'));
// // console.log(dft(a, 'z'));

// // function bft(root, t) {

// // }
// // console.log(bft(a));
// // // console.log(bft(a, 'b'));
// // // console.log(bft(a, 'z'));