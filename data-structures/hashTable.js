// // Hashtables (Hash maps) link keys to their values by identifying the indexes via a hash function. When multiple keys get assigned the same index, a collision can occur. Hashmaps can be used to create Object and Map data types.
// // key -> /hash function/ -> index => value
// // 3 operations must be supported 1) store a key/value pair 2) Retrieve a key/value pair 3) Delete a key/value pair.

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



// take a look at graph types (reveiw mentally) , traversals

// add, remove all, print, swap

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(node) {
        const newNode = new Node(node);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            this.length++;
        }
    }
    swap(node1, node2) {
        const newNode = new Node(node2);
        let current = this.head;
        let previous;
        if (this.head.value === node1) {
            this.head = newNode;
            newNode.next = current.next;
            return;
        }
        while (current.value !== node1) {
            previous = current;
            current = current.next;
        }
        previous.next = newNode;
        newNode.next = current.next;
    }
    removeAll() {
        console.log('removed')
        this.head = null;
        this.length = 0;
    }
    print() {
        let result = '';
        let current = this.head;
        while (current !== null) {
            result += current.value + '>';
            current = current.next;
        }
        console.log(result);
    }
}


const list = new LinkedList();
list.add('a');
list.add('b');
list.add('c');
// a -> b -> c -> etc.
list.print();
list.swap('a', 'z');
list.print();
// list.remove('b'); // a -> c -> etc.
// list.appendAt(1,'z');
list.removeAll();
list.print();
