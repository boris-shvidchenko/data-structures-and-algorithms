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

// q sort
// sel sort
// merge sort
// graph
// b tree
// hash

const l = [1,4,-845,3.6,234,4.05,-909];

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
            console.log('Found');
        }
        console.log(start.val);
        visited.add(start);
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
                console.log('Found node');
            }
            console.log(cur.val);
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
        let path = [];
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
