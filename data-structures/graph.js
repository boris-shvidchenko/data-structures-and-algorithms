// // Graphs have connections between nodes/vertices and edges.

// // === Vertex and edge list ===

// const vertices = ['A', 'B', 'C', 'D', 'E'];
// const edges = [
//     ['A','B'],
//     ['A','D'],
//     ['B','C'],
//     ['C','D'],
//     ['C','E'],
//     ['D','E'],
// ];

// // --- Operations ---

// // Find adjacent nodes
// function findAdjacentNodes(node){
//     let adjacentNodes = [];
//     edges.forEach(edge => {
//         edge[0] === node ? adjacentNodes.push(edge[1]) : edge[1] === node ? adjacentNodes.push(edge[0]) : null;
//     });
//     return adjacentNodes;
// }
// // console.log(findAdjacentNodes('C')); // Expected: ['B','D','E']


// // Are nodes connected? (T/F)
// function isConnected(node1, node2) {
//     for (let edge of edges) {
//         if (edge.includes(node1) && edge.includes(node2)) {
//             return true;     
//         }
//     }
//     return false;
// }
// // console.log(isConnected('A','B')); // Expected: true
// // console.log(isConnected('A','E')); // Expected: false
// // console.log(isConnected('C','D')); // Expected: true


// // === Adjacency matrix ===

// const vertices2 = ['A', 'B', 'C', 'D', 'E'];
// const adjacencyMatrix = [
//     [0, 1, 0, 1, 0],
//     [1, 0, 1, 0, 0],
//     [0, 1, 0, 1, 1],
//     [1, 0, 1, 0, 1],
//     [0, 0, 1, 1, 0],
// ];

// // --- Operations ---

// // Find adjacent nodes
// function findAdjacentNodes2(node) {
//     if (!vertices2.includes(node)) return 'Node not in vertices list';
//     let adjacencyArray = [];
//     const rowIndex = vertices2.indexOf(node);
//     const row = adjacencyMatrix[rowIndex];
//     for (let i = 0; i <= row.length - 1; i++) {
//         row[i] === 1 ? adjacencyArray.push(vertices2[i]) : null;
//     }
//     return adjacencyArray;
// }
// // console.log(findAdjacentNodes2('A')); // Expected: ['B', 'D']
// // console.log(findAdjacentNodes2('H')); // Expected: Node not in vertices list
// // console.log(findAdjacentNodes2('C')); // Expected: ['B', 'D', 'E']

// // Are nodes connected? (T/F)
// function isConnected2(node1, node2) {
//     const rowIndex = vertices2.indexOf(node1);
//     const colIndex = vertices2.indexOf(node2);
//     const row = adjacencyMatrix[rowIndex];
//     if (row[colIndex] === 1) return true;
//     return false;
// }
// // console.log(isConnected2('A','B')); // Expected: true
// // console.log(isConnected2('A','E')); // Expected: false
// // console.log(isConnected2('C','D')); // Expected: true


// // === Adjacency list ===
// // class Node {
// //     constructor(value) {
// //         this.value = value;
// //         this.edgesList = [];
// //     }
// //     // Connect node to another node
// //     connect(node) {
// //         this.edgesList.push(node);
// //         node.edgesList.push(this); // Undirected graph, make sure to push self to edge list of other node
// //     }
// //     // Adjacent nodes.
// //     getAdjacentNodes() {
// //         return this.edgesList.map(node => node.value);
// //     }
// //     // Is connected (T/F)?
// //     isConnected(node) {
// //         if (this.edgesList.includes(node)) return true;
// //         return false;
// //     }
// // }

// // class Graph {
// //     constructor(nodes) {
// //         this.nodes = [...nodes];
// //     }
// //     // Add new node to graph after initialization 
// //     addToGraph(node) {
// //         this.nodes.push(node);
// //     }

// // }

// // Create nodes
// // const nodeA = new Node('A');
// // const nodeB = new Node('B');
// // const nodeC = new Node('C');
// // const nodeD = new Node('D');
// // const nodeE = new Node('E');
// // Create graph
// // const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);
// // Add connections
// // nodeA.connect(nodeB);
// // nodeA.connect(nodeD);
// // nodeB.connect(nodeC);
// // nodeC.connect(nodeD);
// // nodeC.connect(nodeE);
// // nodeD.connect(nodeE);

// // console.log(nodeA.getAdjacentNodes()); // Expected: [B, D]
// // console.log(nodeC.getAdjacentNodes()); // Expected: [B, D, E]
// // console.log(nodeA.isConnected(nodeB)); // Expected: true
// // console.log(nodeA.isConnected(nodeC)); // Expected: false

// // === Graph breadth first traversal, depth first traversal and shortest path ===

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.edgesList = [];
//     }
//     connect(node){
//         this.edgesList.push(node);
//         node.edgesList.push(this);
//     }
//     getAdjacentNodes(){
//         return this.edgesList;
//     }
//     isConnected(node){
//         return this.edgesList.includes(node) ? true : false;
//     }
// }

// class Graph {
//     constructor(nodes) {
//         this.nodes = [...nodes];
//     }
//     addToGraph(node) {
//         this.nodes.push(node);
//     }
//     // Breadth First visits each adjacent node
//     breadthFirstTraversal(start, end) {
//         const queue = [start];
//         const vistedNodes = new Set(); // Tracking nodes that have been visited
//         vistedNodes.add(start);
//         while(queue.length > 0) {
//             const node = queue.shift();
//             if (node.value === end.value) {
//                 console.log('Found it!');
//                 return;
//             }
//             for (let adjacency of node.edgesList) {
//                 if (!vistedNodes.has(adjacency)) {
//                     queue.push(adjacency);
//                     vistedNodes.add(adjacency);
//                 }
//             }
//             console.log(node.value)
//         }
//     }
//     // Depth First visits all nodes in order, if target node is not found it backtracks and tries another route
//     depthFirstTraversal(start, end, visited = new Set()) {
//         if (start.value === end.value) {
//             console.log('Found it!');
//             return;
//         }
//         console.log('Visiting node: ', start.value);
//         visited.add(start);
//         for (let adjacency of start.edgesList) {
//             if (!visited.has(adjacency)) {
//                 this.depthFirstTraversal(adjacency, end, visited);
//             }
//         }
//     }
//     shortestPath(start, end) {
//         const queue = [start];
//         const visitedNodes = {};
//         visitedNodes[start.value] = null;
//         while (queue.length > 0) {
//             const node = queue.shift();
//             if (node.value === end.value) {
//                 console.log('Found it!');
//                 return this.reconstructPath(visitedNodes, end);
//             }
//             for (let adjacency of node.edgesList) {
//                 if (!visitedNodes.hasOwnProperty(adjacency.value)) {
//                     visitedNodes[adjacency.value] = node;
//                     queue.push(adjacency);
//                 }
//             }
//         }
//     }
//     reconstructPath(visitedNodes, end) {
//         let currentNode = end;
//         const shortestPath = [];
//         while (currentNode !== null) {
//             shortestPath.push(currentNode);
//             currentNode = visitedNodes[currentNode.value];
//         }
//         return shortestPath.reverse();
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

// // graph.breadthFirstTraversal(DFW, PBI);
// // graph.depthFirstTraversal(DFW, HKG);

// // Practice Question
// // Given 2 airports find the smallest distance between the 2. (ex: DFW and PBI > DFW-JFK-MIA-PBI)
// // console.log(graph.shortestPath(DFW, PBI));

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
        let queue = [start];
        visited[start.val] = null;
        while (queue.length > 0) {
            const current = queue.shift();
            if (current === end) {
                return this.rp(visited, end);
            }
            for (let adj of current.edges) {
                if (!visited.hasOwnProperty(adj.val)) {
                    queue.push(adj);
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


console.log(graph.sp(DFW, HNL));
console.log(graph.sp(HKG, PBI));