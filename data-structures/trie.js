// // Tries (prefix tree) are very specific data structures that are based on trees. They are useful when it comes to searching for data. 
// // Common operations include node insertion, checking if a node exists, and removal of nodes.

// class Node {
//     constructor() {
//         this.children = {};
//         this.isWord = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new Node();
//     }

//     // Insert a word
//     insert(word) {
//         let current = this.root;
//         for (let i = 0; i < word.length; i++) {
//             let charToInsert = word[i];
//             if (!(charToInsert in current.children)) {
//                 current.children[charToInsert] = new Node();
//             }
//             current = current.children[charToInsert];
//         }
//         current.isWord = true;
//     }

//     // Check if trie contains
//     contains(word) {
//         let current = this.root;
//         for (let i = 0; i < word.length; i++) {
//             let charToFind = word[i];
//             if (!(charToFind in current.children)) {
//                 return false;
//             }
//             current = current.children[charToFind];
//         }
//         return current.isWord;
//     }

//     // Check if word starts with prefix
//     startsWithPrefix(prefix) {
//         let current = this.root;
//         for (let i = 0; i < prefix.length; i++) {
//             let charToFind = prefix[i];
//             if (!(charToFind in current.children)) {
//                 return false;
//             }
//             current = current.children[charToFind];
//         }
//         return true;
//     }

//     // Print trie
//     print() {
//         console.log(this.root);
//     }
// }

// let trie = new Trie();
// trie.insert('Hello');
// trie.insert('Goodbye');
// trie.print();



// btree
// graph

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
    //         console.log('Found')
    //     }
    //     console.log(start.val);
    //     visited.add(start);
    //     for (let a of start.edges) {
    //         if (!visited.has(a)) {
    //             visited.add(a);
    //             this.dft(a, end, visited);
    //         }
    //     }
    // }
    // bft(start, end) {
    //     const visited = new Set();
    //     const q = [start]
    //     while (q.length > 0) {
    //         const cur = q.shift();
    //         if (cur === end) {
    //             console.log('Found node');
    //         }
    //         for (let a of cur.edges) {
    //             if (!visited.has(a)) {
    //                 visited.add(a);
    //                 q.push(a);
    //             }
    //         }
    //         console.log(cur.val);
    //     }
    // }
    sp(start, end) {
        const visited = {};
        const q = [start]
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
// console.log('=========')
// graph.dft(DFW, HKG);
console.log(graph.sp(DFW, PBI));

// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Array(size);
//     }
//     hash(k) {
//         let t = 0;
//         for (let i = 0; i < k.length; i++) {
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

//     get(k) {
//         const index = this.hash(k);
//         const bucket = this.table[index];
//         const sameKey = bucket.find(i => i[0] === k);
//         return sameKey[1];
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
//         let prev;
//         let curIndex = 0;
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
//         if (this.head.val === node) {
//             this.head = cur.next;
//         } else {
//             while (cur.val !== node) {
//                 prev = cur;
//                 cur = cur.next;
//             }
//             prev.next = cur.next;
//         }
//         this.length--;
//     }
//     print() {
//         let cur = this.head;
//         let str = '';
//         while (cur !== null) {
//             str += cur.val + '>';
//             cur = cur.next;
//         }
//         console.log(str);
//     }
// }

// // Test
// const list = new LinkedList();
// list.append('a');
// list.append('b');
// list.append('c');
// list.print();
// list.remove('b'); // a -> c -> etc.
// list.appendAt(1,'z');
// list.print();
