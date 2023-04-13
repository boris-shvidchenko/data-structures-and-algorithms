// Hashtables (Hash maps) link keys to their values by identifying the indexes via a hash function. When multiple keys get assigned the same index, a collision can occur. Hashmaps can be used to create Object and Map data types.
// key -> /hash function/ -> index => value
// 3 operations must be supported 1) store a key/value pair 2) Retrieve a key/value pair 3) Delete a key/value pair.

// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     // Hash Function - creates an index
//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             // charCodeAt returns an integer between 0-65535, representing the UTF-8 code for the specified character, this will be the unique index
//             total += key.charCodeAt(i); 
//         }
//         return total % this.size;
//     }

//     // Set
//     set(key,value) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         // collison check
//         if (!bucket) { 
//             this.table[index] = [[key, value]];
//         } else {
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if (sameKeyItem) {
//                 sameKeyItem[1] = value;
//             } else {
//                 bucket.push([key, value]);
//             }
//         }
//     }

//     // Get
//     get(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         // collison check
//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if (sameKeyItem) {
//                 return sameKeyItem[1];
//             } 
//         }
//         return undefined;
//     }

//     // Remove
//     remove(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         // collison check
//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if (sameKeyItem) {
//                 bucket.splice(bucket.indexOf(key), 1);
//             }
//         }
//     }

//     // Prints the content of the hash table
//     display() {
//         this.table.forEach(value => {
//             if (value !== undefined) {
//                 const index = this.table.indexOf(value);
//                 console.log(`${index} > [${value}]`)
//             }
//         })
//     }
// }

// const table = new HashTable(50);
// table.set('name', 'Ryan');
// table.set('age', 25);
// table.set('color', 'red');
// table.display();
// console.log(table.get('name'));
// table.remove('color');
// table.set('mane', 'Clark');
// table.display();

// tree
// hash

class Node {
    constructor(val) {
        this.val = val;    // Value of the node
        this.left = null;  // Left edge
        this.right = null; // Right edge
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


function bft(root, target) {
    if (root === null) return false;
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val === target) return true;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return false;
}

console.log(bft(a, 'a'));
console.log(bft(a, 'z'));