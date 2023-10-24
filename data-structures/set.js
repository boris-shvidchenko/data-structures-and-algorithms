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
// linked list
// btree
// hash
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
//     // dft(start, end, visited=new Set()) {
//     //     if (start === end) {
//     //         console.log('Found node');
//     //     }
//     //     visited.add(start);
//     //     console.log('Node: ', start.val);
//     //     for (let a of start.edges) {
//     //         if (!visited.has(a)) {
//     //             visited.add(a);
//     //             this.dft(a, end, visited);
//     //         }
//     //     }
//     // }
//     // bft(start, end) {
//     //     const visited = new Set();
//     //     const q = [start];
//     //     while (q.length > 0) {
//     //         const cur = q.shift();
//     //         if (cur === end) {
//     //             console.log('Found node');
//     //         }
//     //         for (let a of cur.edges) {
//     //             if (!visited.has(a)) {
//     //                 visited.add(a);
//     //                 q.push(a);
//     //             }
//     //         }
//     //         console.log('Node: ', cur.val);
//     //     }
//     // }
//     sp(start, end) {
//         const visited = {};
//         const q = [start];
//         visited[start.val] = null;
//         while (q.length > 0) {
//             const cur = q.shift();
//             if (cur === end) {
//                 return this.rp(visited, end);
//             }
//             for (let a of cur.edges) {
//                 if (!visited.hasOwnProperty(a.val)) {
//                     visited[a.val] = cur;
//                     q.push(a);
//                 }
//             }
//         }
//     }
//     rp(visited, end) {
//         const path = [];
//         let cur = end;
//         while (cur !== null) {
//             path.push(cur.val);
//             cur = visited[cur.val];
//         }
//         return path.reverse();
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

// graph.bft(DFW, PBI);
// graph.dft(DFW, HKG);
// console.log(graph.sp(DFW, PBI));

// class Node {
//     constructor(val) {}
// }
// class LinkedList {
//     constructor() {}
// }

// class Node {
//     constructor(val) {}
// }

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