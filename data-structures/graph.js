// Graphs have connections between nodes/vertices and edges.

// === Vertex and edge list ===

const vertices = ['A', 'B', 'C', 'D', 'E'];
const edges = [
    ['A','B'],
    ['A','D'],
    ['B','C'],
    ['C','D'],
    ['C','E'],
    ['D','E'],
];

// --- Operations ---

// Find adjacent nodes
function findAdjacentNodes(node){
    let adjacentNodes = [];
    edges.forEach(edge => {
        edge[0] === node ? adjacentNodes.push(edge[1]) : edge[1] === node ? adjacentNodes.push(edge[0]) : null;
    });
    return adjacentNodes;
}
// console.log(findAdjacentNodes('C')); // Expected: ['B','D','E']


// Are nodes connected? (T/F)
function isConnected(node1, node2) {
    for (let edge of edges) {
        if (edge.includes(node1) && edge.includes(node2)) {
            return true;     
        }
    }
    return false;
}
// console.log(isConnected('A','B')); // Expected: true
// console.log(isConnected('A','E')); // Expected: false
// console.log(isConnected('C','D')); // Expected: true


// === Adjacency matrix ===

const vertices2 = ['A', 'B', 'C', 'D', 'E'];
const adjacencyMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0],
];

// --- Operations ---

// Find adjacent nodes
function findAdjacentNodes2(node) {
    if (!vertices2.includes(node)) return 'Node not in vertices list';
    let adjacencyArray = [];
    const rowIndex = vertices2.indexOf(node);
    const row = adjacencyMatrix[rowIndex];
    for (let i = 0; i <= row.length - 1; i++) {
        row[i] === 1 ? adjacencyArray.push(vertices2[i]) : null;
    }
    return adjacencyArray;
}
// console.log(findAdjacentNodes2('A')); // Expected: ['B', 'D']
// console.log(findAdjacentNodes2('H')); // Expected: Node not in vertices list
// console.log(findAdjacentNodes2('C')); // Expected: ['B', 'D', 'E']

// Are nodes connected? (T/F)
function isConnected2(node1, node2) {
    const rowIndex = vertices2.indexOf(node1);
    const colIndex = vertices2.indexOf(node2);
    const row = adjacencyMatrix[rowIndex];
    if (row[colIndex] === 1) return true;
    return false;
}
// console.log(isConnected2('A','B')); // Expected: true
// console.log(isConnected2('A','E')); // Expected: false
// console.log(isConnected2('C','D')); // Expected: true


// === Adjacency list ===
class Node {
    constructor(value) {
        this.value = value;
        this.edgesList = [];
    }
    // Connect node to another node
    connect(node) {
        this.edgesList.push(node);
        node.edgesList.push(this); // Undirected graph, make sure to push self to edge list of other node
    }
    // Adjacent nodes.
    getAdjacentNodes() {
        return this.edgesList.map(node => node.value);
    }
    // Is connected (T/F)?
    isConnected(node) {
        if (this.edgesList.includes(node)) return true;
        return false;
    }
}

class Graph {
    constructor(nodes) {
        this.nodes = [...nodes];
    }
    // Add new node to graph after initialization 
    addToGraph(node) {
        this.nodes.push(node);
    }

}

// Create nodes
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
// Create graph
const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);
// Add connections
nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

console.log(nodeA.getAdjacentNodes()); // Expected: [B, D]
console.log(nodeC.getAdjacentNodes()); // Expected: [B, D, E]
console.log(nodeA.isConnected(nodeB)); // Expected: true
console.log(nodeA.isConnected(nodeC)); // Expected: false
