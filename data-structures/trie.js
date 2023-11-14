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

// btree

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
// console.log(dft(a))
console.log(dft(a, 'd'))
console.log(dft(a, 'z'))

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
// console.log(bft(a))
console.log(bft(a, 'd'))
console.log(bft(a, 'z'))



const l = [3220,-7,4.5,1,1,3222,-0.8];

function qSort(list) {
    if (list.length <= 1) return list;
    const left = [];
    const right = [];
    const piv = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < piv) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }
    return [...qSort(left), piv, ...qSort(right)];
}

// console.log(qSort(l));

function selSort(list, res=[]) {
    if (list.length === 0) return res;
    const min = Math.min(...list);
    const minIndex = list.indexOf(min);
    res.push(min);
    list.splice(minIndex, 1);
    return selSort(list, res);
}

// console.log(selSort(l));

function merge(list) {
    if (list.length <= 1) return list;
    const mid = Math.floor(list.length/2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return sort(merge(left), merge(right));
}

function sort(left, right) {
    const res = [];
    let leftIndex = 0;
    let rightIndex = 0;
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

// console.log(merge(l));

