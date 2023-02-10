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
console.log(findAdjacentNodes('C')); // Expected: ['B','D','E']


// Are nodes connected? (T/F)
function isConnected(node1, node2) {
    for (let edge of edges) {
        if (edge.includes(node1) && edge.includes(node2)) {
            return true;     
        }
    }
    return false;
}
console.log(isConnected('A','B')); // Expected: true
console.log(isConnected('A','E')); // Expected: false
console.log(isConnected('C','D')); // Expected: true


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