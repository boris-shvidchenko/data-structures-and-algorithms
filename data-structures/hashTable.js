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

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameKey = bucket.find(item => item[0] === key);
            if (sameKey) {
                sameKey[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKey = bucket.find(item => item[0] === key);
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey),1);
            }
        }
    }
    display() {
        this.table.forEach(item => console.log(item));
    }
}

// [ , , [ bucket ] , [ [k,v], ... etc  ] , ]

const table = new HashTable(50);
table.set('name', 'Ryan');
table.set('age', 25);
table.set('color', 'red');
table.display();
// console.log(table.get('name'));
table.remove('name');
table.set('agggge', 'Clark');
table.display();