// Hashtables (Hash maps) link keys to their values by identifying the indexes via a hash function. When multiple keys get assigned the same index, a collision can occur. Hashmaps can be used to create Object and Map data types.
// key -> /hash function/ -> index => value
// 3 operations must be supported 1) store a key/value pair 2) Retrieve a key/value pair 3) Delete a key/value pair.

// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     // Hash Function - creates an index
//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             // charCodeAt returns an integer between 0-65535, representing the UTF-8 code for the specified character, this will be the unique index
//             total += key.charCodeAt(i); 
//         }
//         return total % this.size;
//     }

//     // Set
//     set(key,value) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         // collison check
//         if (!bucket) { 
//             this.table[index] = [[key, value]];
//         } else {
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if (sameKeyItem) {
//                 sameKeyItem[1] = value;
//             } else {
//                 bucket.push([key, value]);
//             }
//         }
//     }

//     // Get
//     get(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         // collison check
//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if (sameKeyItem) {
//                 return sameKeyItem[1];
//             } 
//         }
//         return undefined;
//     }

//     // Remove
//     remove(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         // collison check
//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if (sameKeyItem) {
//                 bucket.splice(bucket.indexOf(key), 1);
//             }
//         }
//     }

//     // Prints the content of the hash table
//     display() {
//         this.table.forEach(value => {
//             if (value !== undefined) {
//                 const index = this.table.indexOf(value);
//                 console.log(`${index} > [${value}]`)
//             }
//         })
//     }
// }

// const table = new HashTable(50);
// table.set('name', 'Ryan');
// table.set('age', 25);
// table.set('color', 'red');
// table.display();
// console.log(table.get('name'));
// table.remove('color');
// table.set('mane', 'Clark');
// table.display();

// graph
// merge sort
// tree
// hash

// const list = [9,8,7,4,6,5,1,3,4,2,6,6,66,23,-10,0,23,4.7];

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
    sp(start, end) {
        let visited = {};
        let q = [start];
        visited[start.val] = null;
        while(q.length > 0) {
            let current = q.shift();
            if (current === end) {
                return this.rp(visited, end);
            } 
            for (let adj of current.edges) {
                if (!visited.hasOwnProperty(adj.val)) {
                    q.push(adj);
                    visited[adj.val] = current;
                }
            }          
        }
    }
    rp(visited, end) {
        let current = end;
        let path = [];
        while (current !== null) {
            path.push(current.val);
            current = visited[current.val];
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

// Practice Question
// Given 2 airports find the smallest distance between the 2. (ex: DFW and PBI > DFW-JFK-MIA-PBI)
console.log(graph.sp(DFW, PBI));

