// // == Quick Sort ==
// // Sorts an array by identifying the first item as the 'pivot'. All items in the array, not including the pivot, are groups into two subarrays based on whether they are < or > the pivot. This is repeated until only multiple single item arrays (just like in a merge sort) are left. These items are sorted and merged to create a sorted array.
// // Runtime: O(n^2) / Quadratic

// const testArray = [5, 4, 6, 1, 2, 3, 10, 9, 7, 8];

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

// console.log(quickSort(testArray));

const testArray = [5, 40, 6, 10, 2, 30, 10, 9, 7, 8];
const l = [1,2,3,4,5,6];

// qsort
// selsort
// bsearch

function ss(list, res=[]) {
    if (list.length === 0) return res;
    const min = Math.min(...list);
    const minIndex = list.indexOf(min);
    res.push(min);
    list.splice(minIndex, 1);
    return ss(list, res);
}

// console.log(ss(testArray));

function qs(list) {
    if (list.length <= 1) return list;
    const piv = list[0];
    const left = [];
    const right = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < piv) {
             left.push(list[i])
        } else {
            right.push(list[i]);
        }
    }
    return [...qs(left), piv, ...qs(right)];
}

// console.log(qs(testArray));

function bsearch(l, t) {
    if (l.length === 1) {
        if (l[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(l.length/2);
        if (l[mid] === t) return true;
        if (t < l[mid]) {
            const left = l.slice(0, mid);
            return bsearch(left, t);
        } else {
            const right = l.slice(mid);
            return bsearch(right, t);
        }
    }
}

console.log(bsearch(l, 2))
console.log(bsearch(l, 6))
console.log(bsearch(l, 63))