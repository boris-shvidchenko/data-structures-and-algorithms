// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);

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
    dft(start, end, visited = new Set()) {
        if (start === end) {
            console.log('Found node!');
        }
        visited.add(start);
        console.log('Node: ', start.val);
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
            let cur = q.shift();
            visited.add(cur);
            if (cur === end) {
                console.log('Found node!');
            }
            for (let a of cur.edges) {
                if (!visited.has(a)) {
                    visited.add(a);
                    q.push(a);
                }
            }
            console.log('Node: ', cur.val)
        }
    }
    sp(start, end) {
        const visited = {};
        const q = [start];
        visited[start.val] = null;
        while (q.length > 0) {
            let cur = q.shift();
            if (cur === end) {
                return this.rp(visited, end);
            }
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

graph.bft(DFW, PBI);
graph.dft(DFW, HKG);
console.log(graph.sp(DFW, PBI));