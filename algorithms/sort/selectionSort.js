// == Selection Sort ==
// Sorts an array by identifying the smallest number within the array and storing the value in a variable. Once a full iteration has been performed, the smallest value is pushed into a results array and also removed from the original list. This process continues until the original array is empty and the results array is sorted in the correct order.
// Runtime: O(n^2) / Quadratic

// const testArray = [9,10,4,2,8,1,3,5,7,6];

// // Stores the sorted array
// let newArray = [];

// function selectionSort(list) {
//     let min = list[0];
//     // Base case
//     if (list.length === 0) return newArray;
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] < min) min = list[i];
//     }
//     newArray.push(min);
//     const minIndex = list.indexOf(min);
//     list.splice(minIndex,1);
//     // Test log
//     console.log('Input List: ' + list);
//     console.log('Output List: ' + newArray);
//     return selectionSort(list);
// }

// // Method 2: Using reduce
// // function selectionSort(list, results=[]) {
// //     if (list.length === 0) return results;
// //     const min = list.reduce((a,b) => a < b ? a : b);
// //     results.push(min);
// //     const minIndex = list.indexOf(min);
// //     list.splice(minIndex, 1);
// //     return selectionSort(list, results);
// // }

// console.log(selectionSort(testArray));

class Hash {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }
    hash(k) {
        let total = 0;
        for (let i = 0; i < k.length; i++) {
            total += k.charCodeAt(i);
        }
        return total % this.size;
    }
    add(k,v) {
        let index = this.hash(k);
        let bucket = this.table[index];
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
        let index = this.hash(k);
        let bucket = this.table[index];
        if (bucket) {
            const sameKey = bucket.find(i => i[0] === k);
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey), 1);
            }
        }
    }
    print() {
        this.table.forEach(i => console.log(i));
    }
}

const hash = new Hash(20);
hash.add('name', 'ryan')
hash.add('age', '34')
hash.add('color', 'red')
hash.print();
hash.add('mane', 'brad')
hash.add('age', '10')
hash.print()
hash.remove('color')
hash.print()