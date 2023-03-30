// == Binary Search ==
// Searchs an array for a target value by 1) splitting the array in half, 2) identifying whether the target value is ===, >, or < the value in the middle of the array, 3) removing the portion of the array that is < or > the target value, 3) repeats the process until the target value is identified. This algorithm assumes that the array is sorted.
// Runtime: O(log(n)) / Binary

// const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testArray = [9,4,8,3,-1,-10,2,5,7,6,9,4,8,3,1,10,2,5,-7,6];

// Returns the index of the target value within the provided array
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

// Test log 
// console.log(binarySearch(testArray,2))

const quickSort = (list) => {
    if (list.length < 1) return list;
    const left = [];
    const right = [];
    const pivot = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] <= pivot) left.push(list[i]);
        if (list[i] > pivot) right.push(list[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(testArray));