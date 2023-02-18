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

// merge sort

// linked list

// take a look at graph types (reveiw mentally) , traversals


const arr = [10,8,7,6,4,9,15,2,3];

function mergeSort(list) {
    if (list.length <= 1) return list;
    const mid = Math.floor(list.length / 2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return compare(mergeSort(left), mergeSort(right));
}

function compare(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log(mergeSort(arr));