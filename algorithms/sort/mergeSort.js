// == Merge Sort ==
// Sorts an array by splitting the array into subarrays of size 1 (one element/item per array). Then, adjacent arrays are sorted and merged. This continues until a single array exists with sorted values.
// Runtime: O(n(log(n))) / Quasilinear

// const testArray = [9,4,8,3,1,10,2,5,7,6];

// // // Splits arrays in two
// // function mergeSort(list) {
// //     // Base Case
// //     if (list.length <= 1) return list;
// //     const midPoint = Math.floor(list.length/2);
// //     const left = list.slice(0,midPoint);
// //     const right = list.slice(midPoint);
// //     return merge(mergeSort(left), mergeSort(right));
// // }

// // // // Merges arrays together
// // function merge(left, right) {
// //     let resultsArray = [];
// //     let leftIndex = 0;
// //     let rightIndex = 0;
// //     while (leftIndex < left.length && rightIndex < right.length) {
// //         if (left[leftIndex] < right[rightIndex]) {
// //             resultsArray.push(left[leftIndex]);
// //             leftIndex++;
// //         } else {
// //             resultsArray.push(right[rightIndex]);
// //             rightIndex++;
// //         }
// //     }
// //     return resultsArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// // }


// console.log(mergeSort(testArray)); 

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
        const visited = {};
        const queue = [start];
        visited[start.val] = null;
        while (queue.length > 0) {
            const current = queue.shift();
            if (current === end) {
                return this.rp(visited, end);
            }
            for (let adj of current.edges) {
                if (!visited.hasOwnProperty(adj.val)) {
                    visited[adj.val] = current;
                    queue.push(adj);
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

console.log(graph.sp(DFW, PBI));