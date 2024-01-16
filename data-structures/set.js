// 

// btree
// linked list

// merge sort
// q sort
// sel sort
// b search

// fib memo
// fib tab

const l = [1,2,3,4,5];
// const l = [1,50,-4,2.5,34];

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

function dft(root, target) {
    if (root === null) return false;
    if (root.val === target) return true;
    return dft(root.left, target) || dft(root.right, target);
}
// console.log(dft(a));
console.log(dft(a, 'b'));
console.log(dft(a, 'z'));

function bft(root, target) {
    if (root === null) return false;
    const q = [root];
    while (q.length > 0) {
        const cur = q.shift();
        if (cur.val === target) return true;
        if (cur.left !== null) q.push(cur.left);
        if (cur.right !== null) q.push(cur.right);
    }
    return false;
}
// console.log(bft(a));
console.log(bft(a, 'b'));
console.log(bft(a, 'z'));

// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Array(size);
//     }
//     hash(k) {
//         let t = 0;
//         for (let i = 0; i<k.length; i++) {
//             t += k.charCodeAt(i);
//         }
//         return t % this.size;
//     }
//     set(k,v) {
//         const index = this.hash(k);
//         const bucket = this.table[index];
//         if (!bucket) {
//             this.table[index] = [[k,v]];
//         } else {
//             const sameKey = bucket.find(i => i[0] === k);
//             if (sameKey) {
//                 sameKey[1] = v;
//             } else {
//                 bucket.push([k,v]);
//             }
//         }
//     }
//     remove(k) {
//         const index = this.hash(k);
//         const bucket = this.table[index];
//         const sameKey = bucket.find(i => i[0] === k);
//         bucket.splice(bucket.indexOf(sameKey), 1);
//     }
//     display() {
//         this.table.forEach(i => console.log(i));
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

// class Node {
    // constructor(val) {
    //     this.val = val;
    //     this.edges = [];
    // }
    // connect(node) {
    //     this.edges.push(node);
    //     node.edges.push(this);
    // }
// }

// class Graph {
//     constructor(nodes) {
//         this.nodes = [...nodes];
//     }
//     // dft(start, end, visited = new Set()) {
//     //     if (start === end) {
//     //         console.log('Found Node');
//     //     }
//     //     console.log(start.val);
//     //     visited.add(start);
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
//     //             console.log("Found node");
//     //         }
//     //         for (let a of cur.edges) {
//     //             if (!visited.has(a)) {
//     //                 visited.add(a);
//     //                 q.push(a);
//     //             }
//     //         }
//     //         console.log(cur.val);
//     //     }
//     // }
//     sp(start, end) {
//         const visited = {};
//         const q = [start];
//         visited[start.val] = null;
//         while (q.length > 0) {
//             const cur = q.shift();
//             if (cur === end) return this.rp(visited, end);
//             for (let a of cur.edges) {
//                 if (!visited.hasOwnProperty(a.val)) {
//                     visited[a.val] = cur;;
//                     q.push(a);
//                 }
//             }
//         }
//     }
//     rp(visited, end) {
//         let cur = end;
//         let path = [];
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

// // graph.bft(DFW, PBI);
// // console.log("==============")
// // graph.dft(DFW, HKG);
// console.log(graph.sp(DFW, PBI));
