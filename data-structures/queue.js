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
//     hash(k) {

//     }
//     set(k,v) {

//     }
//     remove(k) {

//     }
//     display() {

//     }
// }

// const table = new HashTable(50);
// table.set('name', 'Ryan');
// table.set('age', 25);
// table.set('color', 'red');
// table.display();
// table.remove('color');
// table.set('mane', 'Clark');
// table.display();

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

// Graph
class Node {
    constructor(val) {
        this.val = val;
        this.edges = [];
    }
    connect(node) {
        this.edges.push(node);
        node.edges.push(this);
    }
}

class Graph {
    constructor(nodes) {
        this.nodes = [...nodes];
    }
    dft(start, end, visited=new Set()) {
        if (start === end) {
            console.log('Found node');
        }
        console.log('Node:', start.val);
        for (let a of start.edges) {
            if (!visited.has(a)) {
                visited.add(a);
                this.dft(a, end, visited);
            }
        }
    }
    bft(start, end) {
        const visited = new Set();
        const q = [start];
        while (q.length > 0) {
            const cur = q.shift();
            if (cur === end) {
                console.log('found node!');
            }
            console.log('Node:', cur.val);
            for (let a of cur.edges) {
                if (!visited.has(a)) {
                    visited.add(a);
                    q.push(a);
                }
            }
        }
    }
    sp(start, end) {
        const visited = {};
        const q = [start];
        visited[start.val] = null;
        while (q.length > 0) {
            const cur = q.shift();
            if (cur === end) return this.rp(visited, end);
            for (let a of cur.edges) {
                if (!visited.hasOwnProperty(a.val)) {
                    visited[a.val] = cur;
                    q.push(a);
                }
            }
        }
    }
    rp(visited, end) {
        let cur = end;
        const path = [];
        while (cur !== null) {
            path.push(cur.val);
            cur = visited[cur.val];
        }
        return path.reverse();
    }
}

const DFW = new Node('DFW');
const JFK = new Node('JFK');
const LAX = new Node('LAX');
const HNL = new Node('HNL');
const SAN = new Node('SAN');
const EWR = new Node('EWR');
const BOS = new Node('BOS');
const MIA = new Node('MIA');
const MCO = new Node('MCO');
const PBI = new Node('PBI');
const HKG = new Node('HKG');

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI, HKG]);

DFW.connect(JFK);
DFW.connect(LAX);
JFK.connect(BOS);
JFK.connect(MIA);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
SAN.connect(HKG);
MIA.connect(MCO);
MIA.connect(PBI);
MCO.connect(PBI);

// graph.bft(DFW, PBI);
// graph.dft(DFW, HKG);
console.log(graph.sp(DFW, PBI));

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