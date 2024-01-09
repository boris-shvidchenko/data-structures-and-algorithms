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

const l = [1,2,3,4,5];
// const l = [1332,829,0.23,-283];

// btree
// graph
// hash
// llist
// b search

function bs(list, t) {
    if (list.length === 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (t === list[mid]) return true;
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
// console.log(bs(l, 29));

function qs(list) {
    if (list.length <= 1) return list;
    let left = [];
    let right = [];
    const piv = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < piv) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }
    return [...qs(left), piv, ...qs(right)];
}

// console.log(qs(l));

function merge(list) {
    if (list.length <= 1) return list;
    const mid = Math.floor(list.length/2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return sort(merge(left), merge(right));
}

function sort(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let res = [];
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


function fib(v, memo={}) {
    if (v <= 2) return 1;
    if (v in memo) return memo[v];
    memo[v] = fib(v-1, memo) + fib(v-2, memo);
    return memo[v];
}

// console.log(fib(10));
// console.log(fib(100));

function fib2(v) {
    if (v <= 2) return 1;
    const tab = new Array(v+1).fill(0);
    tab[1] = 1;
    for (let i = 0; i < v; i++) {
        tab[i+1] += tab[i];
        tab[i+2] += tab[i];
    }
    return tab[v];
}

// console.log(fib2(20));
// console.log(fib2(200));

function selSort(l, r=[]) {
    if (l.length === 0) return r;
    const min = Math.min(...l);
    const minIndex = l.indexOf(min);
    r.push(min);
    l.splice(minIndex, 1);
    return selSort(l, r);
}

// console.log(selSort(l));