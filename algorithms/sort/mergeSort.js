// == Merge Sort ==
// Sorts an array by splitting the array into subarrays of size 1 (one element/item per array). Then, adjacent arrays are sorted and merged. This continues until a single array exists with sorted values.
// Runtime: O(n(log(n))) / Quasilinear

// const testArray = [9,4,8,3,1,10,2,5,7,6];
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

function binarySearch(list, target) {
    if (list.length === 1) {
        if (list[0] === target) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        let half;
        if (list[mid] === target) return true;
        if (target < list[mid]) {
            half = list.slice(0, mid);
        } else {
            half = list.slice(mid);
        }
        return binarySearch(half, target);
        
    }
}

console.log(binarySearch(testArray, 10)); 
console.log(binarySearch(testArray, 90)); 