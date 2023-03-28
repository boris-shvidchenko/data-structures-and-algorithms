// == Selection Sort ==
// Sorts an array by identifying the smallest number within the array and storing the value in a variable. Once a full iteration has been performed, the smallest value is pushed into a results array and also removed from the original list. This process continues until the original array is empty and the results array is sorted in the correct order.
// Runtime: O(n^2) / Quadratic

// const testArray = [9,10,4,2,8,1,3,5,7,6];

// // Stores the sorted array
// let newArray = [];

// function selectionSort(list) {
//     let min = list[0];
//     // Base case
//     if (list.length === 0) return newArray;
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] < min) min = list[i];
//     }
//     newArray.push(min);
//     const minIndex = list.indexOf(min);
//     list.splice(minIndex,1);
//     // Test log
//     console.log('Input List: ' + list);
//     console.log('Output List: ' + newArray);
//     return selectionSort(list);
// }

// // Method 2: Using reduce
// // function selectionSort(list, results=[]) {
// //     if (list.length === 0) return results;
// //     const min = list.reduce((a,b) => a < b ? a : b);
// //     results.push(min);
// //     const minIndex = list.indexOf(min);
// //     list.splice(minIndex, 1);
// //     return selectionSort(list, results);
// // }

// console.log(selectionSort(testArray));

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
            let current = queue.shift();
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

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
a.connect(b);
b.connect(c);
c.connect(d);
d.connect(e);
e.connect(f);
f.connect(a);
const graph = new Graph([a,b,c,d,e,f])

console.log(graph.sp(a, e));
console.log(graph.sp(a, c));