// == Merge Sort ==
// Sorts an array by splitting the array into subarrays of size 1 (one element/item per array). Then, adjacent arrays are sorted and merged. This continues until a single array exists with sorted values.
// Runtime: O(n(log(n))) / Quasilinear

const testArray = [9,4,8,3,1,10,2,5,7,6,9,4,8,3,1,10,2,5,7,6];

// // // Splits arrays in two
// function mergeSort(list) {
//     // Base Case
//     if (list.length <= 1) return list;
//     const midPoint = Math.floor(list.length/2);
//     const left = list.slice(0,midPoint);
//     const right = list.slice(midPoint);
//     return merge(mergeSort(left), mergeSort(right));
// }

// // // Merges arrays together
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

function mergeSort(list) {
    if (list.length === 1) return list;
    const mid = Math.floor(list.length/2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return sort(mergeSort(left), mergeSort(right));
}

function sort(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let results = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            results.push(left[leftIndex]);
            leftIndex++;
        } else {
            results.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return results.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log(mergeSort(testArray)); 
