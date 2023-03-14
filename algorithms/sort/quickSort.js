// == Quick Sort ==
// Sorts an array by identifying the first item as the 'pivot'. All items in the array, not including the pivot, are groups into two subarrays based on whether they are < or > the pivot. This is repeated until only multiple single item arrays (just like in a merge sort) are left. These items are sorted and merged to create a sorted array.
// Runtime: O(n^2) / Quadratic

const testArray = [5, 4, 6, 1, 2, 3, 10, 9, 7, 8, 5, 4, 6, 1, 2];

// function quickSort(list) {
//     //Base case
//     if (list.length <=1) return list;
//     const pivot = list[0];
//     let left = [];
//     let right = [];
//     for (let i = 1; i<list.length; i++) {
//         if (list[i] < pivot) {
//             left.push(list[i])
//         } else {
//             right.push(list[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

function quickSort(list) {
    if (list.length <= 1) return list;
    const pivot = list[0];
    const left = [];
    const right = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] <= pivot) left.push(list[i]);
        if (list[i] > pivot) right.push(list[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(testArray));