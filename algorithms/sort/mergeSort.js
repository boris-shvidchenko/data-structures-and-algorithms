// == Merge Sort ==
// Sorts an array by splitting the array into subarrays of size 1 (one element/item per array). Then, adjacent arrays are sorted and merged. This continues until a single array exists with sorted values.
// Runtime: O(n(log(n))) / Quasilinear

const testArray = [9,4,8,3,1,10,2,5,7,6,9,4,8,3,1,10,2,5,7,6,-100];

// // Splits arrays in two
// function mergeSort(list) {
//     // Base Case
//     if (list.length <= 1) return list;
//     const midPoint = Math.floor(list.length/2);
//     const left = list.slice(0,midPoint);
//     const right = list.slice(midPoint);
//     return merge(mergeSort(left), mergeSort(right));
// }

// // Merges arrays together
// function merge(left, right) {
//     let resultsArray = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             resultsArray.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             resultsArray.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     return resultsArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// sel sort
// quick sort
// binary tree
// hash
// graph
// fib (memo/tab)

function selectionSort(list, results=[]) {
    if (list.length === 0) return results;
    const min = list.reduce((a,b) => a < b ? a : b);
    const indexOfMin = list.indexOf(min);
    results.push(min);
    list.splice(indexOfMin, 1);
    return selectionSort(list, results);
}

console.log(selectionSort(testArray)); 