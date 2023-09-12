// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// // Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);


// bt
// graph


// class Node {
//     constructor(v) {
//         this.v = v;
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
//     dft(start, end, visited = new Set()) {
//         if (start === end) {
//             console.log('found node');
//         }
//         console.log('node: ', start.v);
//         visited.add(start);
//         for (let a of start.edges) {
//             if (!visited.has(a)) {
//                 visited.add(a);
//                 this.dft(a, end, visited);
//             }
//         }
//     }
//     bft(start, end) {
//         const q = [start];
//         const visited = new Set();
//         while (q.length > 0) {
//             const cur = q.shift();
//             visited.add(cur);
//             if (cur === end) {
//                 console.log('Found node');
//             } 
//             for (let a of cur.edges) {
//                 if (!visited.has(a)) {
//                     visited.add(a);
//                     q.push(a);
//                 }
//             }
//             console.log('visintg node: ', cur.v);
//         }
//     }
//     sp(start, end) {
//         const visited = {};
//         const q = [start];
//         visited[start.v] = null;
//         while (q.length > 0) {
//             const cur = q.shift();
//             if (cur === start) {
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
//         let path = [];
//         let cur = end;
//         while (cur !== null) {
//             path.push(cur);
//             cur = visited[cur.v];
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

// console.log(graph.sp(DFW, PBI));

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
// console.log(dft(a))
console.log(dft(a, 'd'))
console.log(dft(a, 'z'))

