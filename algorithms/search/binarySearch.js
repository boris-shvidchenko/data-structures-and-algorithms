// == Binary Search ==
// Searchs an array for a target value by 1) splitting the array in half, 2) identifying whether the target value is ===, >, or < the value in the middle of the array, 3) removing the portion of the array that is < or > the target value, 3) repeats the process until the target value is identified. This algorithm assumes that the array is sorted.
// Runtime: O(log(n)) / Binary

// const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Returns the index of the target value within the provided array
// function binarySearch(array, targetValue) {
//     const midPoint = Math.floor(array.length/2);
//     // First statement is the base case
//     if (array.length === 1) {
//         if (targetValue === array[midPoint]) {
//             return `Index of ${array[midPoint]} is ${testArray.indexOf(array[midPoint])}`; 
//         } else {
//             return `${targetValue} is not in [${testArray}]`;
//         }
//     } else if (targetValue < array[midPoint]) {
//         const arrayLeft = array.slice(0, midPoint);
//         return binarySearch(arrayLeft, targetValue);
//     } else {
//         const arrayRight = array.slice(midPoint);
//         return binarySearch(arrayRight, targetValue);
//     }
// }

// // Test log 
// console.log(binarySearch(testArray,2))

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.left = b;
a.right = c;
b.left = d;
b.right = e;

//     a
//    / \
//   b   c
//  / \
// d   e

function bft(root, t) {
    if (root === null) return false;
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val === t) return true;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return false;
}

console.log(bft(a, 'C'));
console.log(bft(a, 'Z'));