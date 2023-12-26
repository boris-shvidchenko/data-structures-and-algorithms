// // Common operations include push, pull, search, and peek. The below class turns the heap into a max heap.

// class Heap {

//     constructor() {
//         this.data = [];
//     }

//     // Helper functions

//     getParentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }

//     getLeftChildIndex(index) {
//         return index * 2 + 1;
//     }

//     getRightChildIndex(index) {
//         return index * 2 + 2;
//     }

//     swap(index1, index2) {
//         const temp = this.data[index1];
//         this.data[index1] = this.data[index2];
//         this.data[index2] = temp;
//     }

//     // Operations

//     // Pushes new data (key) into our array/heap.
//     push(key) {
//         this.data[this.data.length] = key;
//         this.heapifyUp();
//     }

//     // Moves our elements up so that they are in the correct heap order.
//     heapifyUp() {
//         let currentIndex = this.data.length - 1;
//         while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
//             this.swap(currentIndex, this.getParentIndex(currentIndex));
//             currentIndex = this.getParentIndex(currentIndex);
//         }
//     }

//     heapifyDown() {
//         let currentIndex = 0;
//         while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
//             let biggestChildIndex = this.getLeftChildIndex(currentIndex);
//             if (this.data[this.getRightChildIndex(currentIndex)] !== undefined && this.data[this.getRightChildIndex(currentIndex)] > this.data[this.getLeftChildIndex(currentIndex)]) {
//                 biggestChildIndex = this.getRightChildIndex(currentIndex);
//             }
//             if (this.data[currentIndex] < this.data[biggestChildIndex]) {
//                 this.swap(currentIndex, biggestChildIndex);
//                 currentIndex = biggestChildIndex;
//             } else {
//                 return;
//             }
//         }
//     }

//     // Remove the top element and replaces it with the last element of our array/heap.
//     pull() {
//         const maxValue = this.data[0];
//         this.data[0] = this.data[this.data.length - 1];
//         this.data.length--;
//         this.heapifyDown();
//         return maxValue;
//     }
// }

// const heap = new Heap();
// console.log(heap);
// heap.push(25);
// heap.push(5);
// heap.push(40);
// heap.push(70);
// heap.push(90);
// heap.push(44);

// console.log(heap.data.join(' > '));

// //        90
// //       /  \
// //     70    44
// //    /  \     \
// //   5    40    25

// let a = [];
// a.push(heap.pull());
// a.push(heap.pull());
// a.push(heap.pull());
// a.push(heap.pull());
// a.push(heap.pull());

// console.log('Top 5 items: ', a);
// console.log(heap.data.join(' > '));

// fib memo
// fib tab
// b search
// merge sort
// sel sort
// quick sort
// hash
// linked list
// graph
// b tree

const l = [1,2,3,4,5];
// const l = [12,-90,3.23,0.4,-900];

// function fib(val, memo={}) {

// }

// console.log(fib(10));
// console.log(fib(100));

// function fib2(val, memo={}) {

// }

// console.log(fib2(20));
// console.log(fib2(200));

// function bs(val, t) {

// }

// console.log(bs(l, 2));
// console.log(bs(l, 43));

// function merge(list) {

// }

// function sort(left, right) {

// }

// console.log(merge(l));

// function selSort(list, res=[]) {

// }

// console.log(selSort(l));


// function qSort(list) {

// }

// console.log(qSort(l));


// HASH

// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Array(size);
//     }
//     hash(k) {}
//     set(k,v) {}
//     remove(k) {}
//     display() {}
// }

// const table = new HashTable(50);
// table.set('name', 'Ryan');
// table.set('age', 25);
// table.set('color', 'red');
// table.display();
// table.remove('color');
// table.set('mane', 'Clark');
// table.display();

// LINKED LIST

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
//     print() {}
// }

// const list = new LinkedList();
// list.append('a');
// list.append('b');
// list.append('c');
// list.print();
// list.remove('b'); // a -> c -> etc.
// list.appendAt(1,'z');
// list.print();

// GRAPH

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.edges = [];
//     }
//     connect(node) {

//     }
// }

// class Graph {
//     constructor(nodes) {
//         this.nodes = [...nodes];
//     }
//     dft(start, end, visted=new Set()) {

//     }
//     bft(start, end) {

//     }
//     sp(start, end) {

//     }
//     rp(visited, end) {

//     }
// }

// const DFW = new Node('DFW');
// const JFK = new Node('JFK');
// const LAX = new Node('LAX');
// const HNL = new Node('HNL');
// const SAN = new Node('SAN');
// const EWR = new Node('EWR');
// const BOS = new Node('BOS');
// const MIA = new Node('MIA');
// const MCO = new Node('MCO');
// const PBI = new Node('PBI');
// const HKG = new Node('HKG');

// const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI, HKG]);

// DFW.connect(JFK);
// DFW.connect(LAX);
// JFK.connect(BOS);
// JFK.connect(MIA);
// LAX.connect(HNL);
// LAX.connect(EWR);
// LAX.connect(SAN);
// SAN.connect(HKG);
// MIA.connect(MCO);
// MIA.connect(PBI);
// MCO.connect(PBI);

// // graph.bft(DFW, PBI);
// // graph.dft(DFW, HKG);
// // console.log(graph.sp(DFW, PBI));

// B TREE

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
// console.log(dft(a, 'e'));
// console.log(dft(a, 'z'));

// function bft(root, t) {

// }
// console.log(bft(a));
// console.log(bft(a, 'e'));
// console.log(bft(a, 'z'));