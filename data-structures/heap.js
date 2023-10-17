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

const a = [1,2,3,4,5];
// const a = [1,0,4,-5,23.4,2323];

// fib 2
// qsort
// msort
// sel sort
// b search
// hash
// graph

// btree

const fib  = (v, memo={}) => {
    if (v <= 2) return 1;
    if (v in memo) return memo[v];
    memo[v] = fib(v-1, memo) + fib(v-2, memo);
    return memo[v];
}

console.log(fib(10));
console.log(fib(103));

const fib2 = (v) => {
    if (v <= 2) return 1;
    const table = new Array(v+1).fill(0);
    table[1] = 1;
    for (let i = 0; i < v; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[v];
}

console.log(fib2(20));
console.log(fib2(203));

// class Node {
//     constructor(v) {
//         this.v = v;
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
//         this.length++;
//     }
//     remove(node) {
//         let cur = this.head;
//         let prev;
//         if (this.head.v === node) {
//             this.head = cur.next;
//         } else {
//             while (cur.v !== node) {
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
//             str += cur.v + '>';
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