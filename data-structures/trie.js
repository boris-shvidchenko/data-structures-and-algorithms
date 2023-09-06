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

// qsort
// sel sort
// m sort
// hash
// linked list
// graph
// b tree
// fib 

// const l = [1,2,3,4,5,6];
const l = [1,-90,3.4,3.6,23,0,799];

function bs(list, t) {
    if (list.length <= 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (list[mid] === t) return true;
        if (t < list[mid]) {
            const left = list.slice(0, mid);
            return bs(left, t);
        } else {
            const right = list.slice(mid);
            return bs(right, t);
        }
    }
}

// console.log(bs(l, 2));
// console.log(bs(l, 7));

const qs = (list) => {
    if (list.length <= 1) return list;
    const piv = list[0];
    const left = [];
    const right = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < piv) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        } 
    }
    return [...qs(left), piv, ...qs(right)];
}

console.log(qs(l));