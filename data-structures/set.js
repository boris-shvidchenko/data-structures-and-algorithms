// 



// merge sort
// sel sort

const l = [1,522220,-4,2.533,34];

function selSort(list, res=[]) {
    if (list.length === 0) return res;
    const min = Math.min(...list);
    const minIndex = list.indexOf(min);
    res.push(min);
    list.splice(minIndex, 1);
    return selSort(list, res);
}

console.log(selSort(l));

// function mergeSort(list) {
//     if (list.length <= 1) return list;
//     const mid = Math.floor(list.length/2);
//     const left = list.slice(0, mid);
//     const right = list.slice(mid);
//     return sort(mergeSort(left), mergeSort(right));
// }

// function sort(left, right) {
//     let leftIndex = 0;
//     let rightIndex = 0;
//     let res = [];
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             res.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             res.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     return res.concat(left.slice(leftIndex), right.slice(rightIndex));
// }

// // console.log(mergeSort(l));

