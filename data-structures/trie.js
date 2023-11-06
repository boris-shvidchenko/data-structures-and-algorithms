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

// merge sort
// sel sort
// quick sort
// linked list
// graph
// b tree

// const a = [1,2,3,4,5];
// const a = [1,-90,3.5,66,3,-27];

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function dft(root, t) {
    if (root === null) return false;
    if (root.val === t) return true;
    return dft(root.left, t) || dft(root.right, t);
}
// console.log(dft(a));
console.log(dft(a, 'b'));
console.log(dft(a, 'z'));

function bft(root, t) {
    if (root === null) return false;
    const q = [root];
    while (q.length > 0) {
        const cur = q.shift();
        if (cur.val === t) return true;
        if (cur.left !== null) q.push(cur.left);
        if (cur.right !== null) q.push(cur.right);
    }
    return false;
}
// console.log(bft(a));
console.log(bft(a, 'b'));
console.log(bft(a, 'z'));

// class HashMap {
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

// const table = new HashMap(50);
// table.set('name', 'Ryan');
// table.set('age', 25);
// table.set('color', 'red');
// table.display();
// table.remove('color');
// table.set('mane', 'Clark');
// table.display();

// function fib(val, memo={}) {
//     if (val <= 2) return 1;
//     if (val in memo) return memo[val];
//     memo[val] = fib(val-1, memo) + fib(val-2, memo);
//     return memo[val];
// }

// console.log(fib(10));
// console.log(fib(100));

// function fib(val) {
//     if (val <= 2) return 1;
//     const tab = new Array(val+1).fill(0);
//     tab[1] = 1;
//     for (let i = 0; i < val; i++) {
//         tab[i+1] += tab[i];
//         tab[i+2] += tab[i];
//     }
//     return tab[val];
// }

// console.log(fib(20));
// console.log(fib(200));

// const bs = (list, tar) => {
//     if (list.length === 1) {
//         if (list[0] === tar) return true;
//         return false;
//     } else {
//         const mid = Math.floor(list.length/2);
//         if (tar === list[mid]) return true;
//         if (tar < list[mid]) {
//             const left = list.slice(0, mid);
//             return bs(left, tar);
//         } else {
//             const right = list.slice(mid);
//             return bs(right, tar);
//         }
//     }
// }

// console.log(bs(a, 2));
// console.log(bs(a, 29));