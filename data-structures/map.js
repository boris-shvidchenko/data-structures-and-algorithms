// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// // Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);


// graph
// btree dfsearch

class Node {
    constructor(v) {
        this.v = v;
        this.left = null;
        this.right = null;
    }
}

const g = new Node(3);
const h = new Node(11);
const i = new Node(4);
const j = new Node(4);
const k = new Node(2);
const l = new Node(1);
g.left = h;
g.right = i;
h.left = j;
h.right = k;
i.right = l;

//    3
//   / \
//  11  4
// /  \  \
//4   2   1 

function bft(root, t) {
    if (root === null) return false;
    const q = [root];
    while (q.length > 0) {
        const cur = q.shift();
        if (cur.v === t) return true;
        if (cur.left !== null) q.push(cur.left);
        if (cur.right !== null) q.push(cur.right);
    }
    return false;
}

console.log(bft(g, 2));
console.log(bft(g, 20));
