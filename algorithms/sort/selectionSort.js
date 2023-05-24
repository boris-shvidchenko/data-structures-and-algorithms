// == Selection Sort ==
// Sorts an array by identifying the smallest number within the array and storing the value in a variable. Once a full iteration has been performed, the smallest value is pushed into a results array and also removed from the original list. This process continues until the original array is empty and the results array is sorted in the correct order.
// Runtime: O(n^2) / Quadratic

const testArray = [9,10,4,2,8,1,3,5,7,6];

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

// Method 2: Using reduce
// function selectionSort(list, results=[]) {
//     if (list.length === 0) return results;
//     const min = list.reduce((a,b) => a < b ? a : b);
//     results.push(min);
//     const minIndex = list.indexOf(min);
//     list.splice(minIndex, 1);
//     return selectionSort(list, results);
// }

function selectionSort(list, res=[]) {
    if (list.length === 0) return res;
    const min = Math.min(...list);
    const minIndex = list.indexOf(min);
    res.push(min);
    list.splice(minIndex, 1);
    return selectionSort(list, res);
}

// console.log(selectionSort(testArray));

const fib = (v) => {
    if (v <= 2) return 1;
    const table = new Array(v + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i < v; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[v];
}

console.log(fib(20))
console.log(fib(200))

