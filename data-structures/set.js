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

// graph
// bin search

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
        const q = [start];
        const visited = {};
        visited[start.val] = null;
        while (q.length > 0) {
            const cur = q.shift();
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
        let path = [];
        while (cur !== null) {
            path.push(cur.val);
            cur = visited[cur.val];
        }
        console.log(path.reverse());
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');
const h = new Node('H');
a.connect(b);
a.connect(c);
b.connect(d);
d.connect(e);
e.connect(g);
e.connect(f);
f.connect(h);
h.connect(a);
const graph = new Graph([a,b,c,d,e,f,g,h]);

graph.sp(a, g);
graph.sp(c, f);



