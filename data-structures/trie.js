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



// hash
// linked list
// graph
// b tree

class HashMap {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }
    hash(k) {
        let t = 0;
        for (let i = 0; i < k.length; i++) {
            t += k.charCodeAt(i);
        }
        return t % this.size;
    }
    set(k,v) {
        const index = this.hash(k);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[k,v]];
        } else {
            const sameKey = bucket.find(i => i[0] === k);
            if (sameKey) {
                sameKey[1] = v;
            } else {
                bucket.push([k,v]);
            }
        }
    }
    remove(k) {
        const index = this.hash(k);
        const bucket = this.table[index];
        const sameKey = bucket.find(i => i[0] === k);
        bucket.splice(bucket.indexOf(sameKey), 1);
    }
    display() {
        this.table.forEach(i => console.log(i));
    }
}

const table = new HashMap(50);
table.set('name', 'Ryan');
table.set('age', 25);
table.set('color', 'red');
table.display();
table.remove('color');
table.set('mane', 'Clark');
table.display();