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

const l = [1,2,3,4,5];
// const l = [1,0,4,-5,23.4,2323];

// qsort
// msort
// sel sort
// b search
// graph
// hash

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }
    hash(k) {
        let t = 0;
        for (let i = 0; i < k.length; i++) {
            t += k.charCodeAt(i);
        }
        return t % this.size;
    }
    set(k,v) {
        const index = this.hash(k);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[k,v]];
        } else {
            const sameKey = bucket.find(i => i[0] === k);
            if (sameKey) {
                sameKey[1] = v;
            } else {
                bucket.push([k,v]);
            }
        }
    }
    remove(k) {
        const index = this.hash(k);
        const bucket = this.table[index];
        const sameKey = bucket.find(i => i[0] === k);
        bucket.splice(bucket.indexOf(sameKey), 1);
    }
    display() {
        this.table.forEach(i => console.log(i));
    }
}

const table = new HashTable(50);
table.set('name', 'Ryan');
table.set('age', 25);
table.set('color', 'red');
table.display();
table.remove('color');
table.set('mane', 'Clark');
table.display();

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

function dft(root, t) {
    if (root === null) return false;
    if (root.v === t) return true;
    return dft(root.left, t) || dft(root.right, t);
}
// console.log(dft(a));
// console.log(dft(a, 'a'));
// console.log(dft(a, 'sd'));

function bft(root, t) {
    if (root === null) return false;
    const q = [root];
    while (q.length > 0) {
        const cur = q.shift();
        if (cur.v === t) return true;
        if (cur.left !== null) q.push(cur.left);
        if (cur.right !== null) q.push(cur.right);
    }
    return false;
}
// console.log(bft(a));
// console.log(bft(a, 'a'));
// console.log(bft(a, 'sd'));

const fib  = (v, memo={}) => {
    if (v <= 2) return 1;
    if (v in memo) return memo[v];
    memo[v] = fib(v-1, memo) + fib(v-2, memo);
    return memo[v];
}

// console.log(fib(10));
// console.log(fib(103));

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

// console.log(fib2(20));
// console.log(fib2(203));

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