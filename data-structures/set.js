// // Similar to arrays, but cannot have duplicate values. Order is also not maintained via indexes (iterating with (for x in arr) wont work).

// let str = new Set('bookkeeper');
// console.log(str); // Expects ['b','o','k','e','p','r']

// let nums = new Set();
// nums.add(1);
// nums.add(2);
// nums.add(1); // Will be ignored
// nums.add('Hello');
// nums.add('Hi');
// console.log(nums); // Expects ['1','2','Hello','Hi']

// // Iteration works just like with an array
// for (let char of nums) console.log(char); 

// binary search
// merge sort
// btree
// fib
// sel sort
// quick sort

const l = [1,2,3,4,5];
// const l = [1,41110,-90,3.4,356,-900,2];

function mergeSort(list) {}
function sort(left, right) {}
function binarySearch(list, t) {
    if (list.length === 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (list[mid] === t) return true;
        if (t < list[mid]) {
            const left = list.slice(0, mid);
            return binarySearch(left, t);
        } else {
            const right = list.slice(mid);
            return binarySearch(right, t);
        }
    }
}
console.log(binarySearch(l, 2));
console.log(binarySearch(l, 28));

// function quickSort(list) {
//     if (list.length <= 1) return list;
//     const piv = list[0];
//     const left = [];
//     const right = [];
//     for (let i = 1; i < list.length; i++) {
//         if (list[i] < piv) left.push(list[i]);
//         if (list[i] >= piv) right.push(list[i]);
//     }
//     return [...quickSort(left), piv, ...quickSort(right)];
// }

// console.log(quickSort(l));
// function selSort(list, res=[]) {
//     if (list.length === 0) return res;
//     const min = Math.min(...list);
//     const minIndex = list.indexOf(min);
//     list.splice(minIndex, 1);
//     res.push(min);
//     return selSort(list, res);
// }

// console.log(selSort(l));
// function fibMemo(v, memo={}) {
//     if (v <= 2) return 1;
//     if (v in memo) return memo[v];
//     memo[v] = fibMemo(v-1, memo) + fibMemo(v-2, memo);
//     return memo[v];
// }
// function fibtab(v) {
//     if (v <= 2) return 1;
//     const table = new Array(v+1).fill(0);
//     table[1] = 1;
//     for (let i = 0; i < v; i++) {
//         table[i+1] += table[i];
//         table[i+2] += table[i];
//     }
//     return table[v];
// }

// console.log(fibMemo(10))
// console.log(fibMemo(100))
// console.log(fibtab(20))
// console.log(fibtab(200))

