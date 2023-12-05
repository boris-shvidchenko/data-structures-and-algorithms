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
    // dft(start, end, visited=new Set()) {
    //     if (start === end) {
    //         console.log('Found node');
    //     }
    //     visited.add(start);
    //     console.log(start.val);
    //     for (let a of start.edges) {
    //         if (!visited.has(a)) {
    //             visited.add(a);
    //             this.dft(a, end, visited);
    //         }
    //     }
    // }
    // bft(start, end) {
    //     const visited = new Set();
    //     const q = [start];
    //     while (q.length > 0) {
    //         const cur = q.shift();
    //         if (cur === end) {
    //             console.log('Found node');
    //         }
    //         console.log(cur.val);
    //         for (let a of cur.edges) {
    //             if (!visited.has(a)) {
    //                 visited.add(a);
    //                 q.push(a);
    //             } 
    //         }
    //     }
    // }
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
        const path = [];
        let cur = end;
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

// function dft(root, target) { 
//     if (root === null) return false;
//     if (root.val === target) return true;
//     return dft(root.left, target) || dft(root.right, target);

// }
// // console.log(dft(a));
// console.log(dft(a, 'b'));
// console.log(dft(a, 'z'));

// function bft(root, target) {
//     if (root === null) return false;
//     const q = [root];
//     while (q.length > 0) {
//         const cur = q.shift();
//         if (cur.val === target) return true;
//         if (cur.left !== null) q.push(cur.left);
//         if (cur.right !== null) q.push(cur.right);
//     }
//     return false;
// }
// // console.log(bft(a));
// // console.log(bft(a, 'b'));
// // console.log(bft(a, 'z'));
