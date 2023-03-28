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

class Stack {
    constructor() {
        this.stack = [];
    }
    add(val) {
        this.stack.push(val);
    }
    print() {
        let str = '';
        this.stack.forEach(i => str += i + '/');
        console.log(str);
    }
    remove() {
        this.stack.shift();
    }
    removeAll() {
        this.stack = [];
    }
}

const stack = new Stack();
stack.add(1);
stack.print();
stack.add(2);
stack.print();
stack.add(3);
stack.print();
stack.remove();
stack.print();
stack.removeAll();
stack.print();