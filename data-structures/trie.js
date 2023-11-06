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


// linked list

// const a = [1,-90,3.5,66,3,-27];


// function ms(list) {
//     if (list.length <= 1) return list;
//     const mid = Math.floor(list.length/2);
//     const left = list.slice(0, mid);
//     const right = list.slice(mid);
//     return sort(ms(left), ms(right));
// }

// function sort(left, right) {
//     let leftIndex = 0;
//     let rightIndex = 0;
//     const res = [];
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             res.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             res.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     return res.concat(left.slice(leftIndex), right.slice(rightIndex));
// }

// console.log('MS', ms(a));

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(node) {
        const newNode = new Node(node);
        let cur = this.head;
        if (this.head === null) {
            this.head = newNode;
        } else {
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.length++;
    }
    appendAt(index, node) {
        const newNode = new Node(node);
        let cur = this.head;
        let curIndex = 0;
        let prev;
        if (index === 0) {
            this.head = newNode;
            newNode.next = cur;
        } else {
            while (curIndex < index) {
                prev = cur;
                cur = cur.next;
                curIndex++;
            }
            prev.next = newNode;
            newNode.next = cur;
        }
        this.length++;
    }
    remove(node) {
        let cur = this.head;
        let prev;
        if (this.head.val === node) {
            this.head = cur.next;
        } else {
            while (cur.val !== node) {
                prev = cur;
                cur = cur.next;
            }
            prev.next = cur.next;
        }
        this.length--;
    }
    print() {
        let t = '';
        let cur = this.head;
        while (cur !== null) {
            t += cur.val + '>';
            cur = cur.next;
        }
        console.log(t);
    }
}

// Test
const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.print();
list.remove('b'); // a -> c -> etc.
list.appendAt(1,'z');
list.print();

