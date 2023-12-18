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

const l = [9440, 9.4,-34, 34, 0];

// q sort
// sel sort
// b tree

function selSort(list, res=[]) {
    if (list.length === 0) return res;
    const min = Math.min(...list);
    const minIndex = list.indexOf(min);
    res.push(min);
    list.splice(minIndex, 1);
    return selSort(list, res);
}

console.log(selSort(l));

const bSearch = (list, t) => {
    if (list.length === 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (t === list[mid]) return true;
        if (t < list[mid]) {
            const left = list.slice(0, mid);
            return bSearch(left, t);
        } else {
            const right = list.slice(mid);
            return bSearch(right, t);
        }
    }
}

// console.log(bSearch(l, 2));
// console.log(bSearch(l, 28));



function mergeSort(list) {
    if (list.length <= 1) return list;
    const mid = Math.floor(list.length/2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return sort(mergeSort(left), mergeSort(right));
}

function sort(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    const res = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            res.push(left[leftIndex]);
            leftIndex++;
        } else {
            res.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return res.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// console.log(mergeSort(l));

const fib = (val, memo={}) => {
    if (val <= 2) return 1;
    if (val in memo) return memo[val];
    memo[val] = fib(val-1, memo) + fib(val-2, memo);
    return memo[val];
}

// console.log(fib(10));
// console.log(fib(100));

function fib2(v) {
    if (v <= 2) return 1;
    const table = new Array(v+1).fill(0);
    table[1] = 1;
    for (let i = 0; i < v; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[v];
}

// console.log(fib2(20));
// console.log(fib2(200));

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
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.length = 0;
//         this.head = null;
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
//         let curIndex = 0;
//         let prev;
//         if (index === 0) {
//             this.head = newNode;
//             newNode.next = cur;
//         } else {
//             while (curIndex < index) {
//                 prev = cur;
//                 curIndex++;
//                 cur = cur.next;
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
//         let str = '';
//         let cur = this.head;
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
