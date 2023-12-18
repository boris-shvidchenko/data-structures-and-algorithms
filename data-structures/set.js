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

const l = [1,2,3,4,5];
// const l = [90, 9.4,-34, 34, 0];

// b search
// m sort
// q sort
// sel sort
// fib memo
// fib tab
// hash
// linked list
// b tree

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    append(node) {
        const newNode = new Node(node);
        let cur = this.head;
        if (this.head === null) {
            this.head = newNode;
        } else {
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.length++;
    }
    appendAt(index, node) {
        const newNode = new Node(node);
        let cur = this.head;
        let curIndex = 0;
        let prev;
        if (index === 0) {
            this.head = newNode;
            newNode.next = cur;
        } else {
            while (curIndex < index) {
                prev = cur;
                curIndex++;
                cur = cur.next;
            }
            prev.next = newNode;
            newNode.next = cur;
        }
        this.length++;
    }
    remove(node) {
        let cur = this.head;
        let prev;
        if (this.head.val === node) {
            this.head = cur.next;
        } else {
            while (cur.val !== node) {
                prev = cur;
                cur = cur.next;
            }
            prev.next = cur.next;
        }
        this.length--;
    }
    print() {
        let str = '';
        let cur = this.head;
        while (cur !== null) {
            str += cur.val + '>';
            cur = cur.next;
        }
        console.log(str);
    }
}

// Test
const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.print();
list.remove('b'); // a -> c -> etc.
list.appendAt(1,'z');
list.print();


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
//     //         console.log('Found');
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
//     //     const q = [start];
//     //     const visited = new Set();
//     //     while (q.length > 0) {
//     //         const cur = q.shift();
//     //         if (cur === end) {
//     //             console.log('Found');
//     //         } 
//     //         console.log(cur.val);
//     //         for (let a of cur.edges) {
//     //             if (!visited.has(a)) {
//     //                 visited.add(a);
//     //                 q.push(a);
//     //             }
//     //         }
//     //     }
//     // }
//     sp(start, end) {
//         const q = [start];
//         const visited = {};
//         visited[start.val] = null;
//         while (q.length > 0) {
//             const cur = q.shift();
//             if (cur === end) return this.rp(visited, end);
//             for (let a of cur.edges) {
//                 if (!visited.hasOwnProperty(a.val)) {
//                     visited[a.val] = cur;
//                     q.push(a);
//                 }
//             }
//         }
//     }
//     rp(visited, end) {
//         let cur = end;
//         const path = [];
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
// // graph.dft(DFW, HKG);
// console.log(graph.sp(DFW, PBI));
