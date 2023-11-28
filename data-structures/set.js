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

// hash
// graph
// btree
// linked list

const l = [1222,-9202,3,402,9.4,-39];

function merge(list) {
    if (list.length <= 1) return list;
    const mid = Math.floor(list.length/2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return mergeSort(merge(left), merge(right));
}

function mergeSort(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    const res = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            res.push(left[leftIndex]);
            leftIndex++;
        } else {
            res.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // return res;
    return res.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log(merge(l));

// function ss(list, res=[]) {
//     if (list.length === 0) return res;
//     const min = Math.min(...list);
//     const minIndex = list.indexOf(min);
//     list.splice(minIndex, 1);
//     res.push(min);
//     return ss(list, res);
// }

// // console.log(ss(l));

// function qs(list) {
//     if (list.length <= 2) return list;
//     const piv = list[0];
//     const left = [];
//     const right = [];
//     for (let i = 1; i < list.length; i++) {
//         if (list[i] < piv) {
//             left.push(list[i]);
//         } else {
//             right.push(list[i]);
//         }
//     }
//     return [...qs(left), piv, ...qs(right)];
// }

// // console.log(qs(l));

// function fib(val) {
//     if (val <= 2) return 1;
//     const tab = new Array(val+1).fill(0);
//     tab[1] = 1;
//     for (let i = 0; i < val; i++) {
//         tab[i+1] += tab[i];
//         tab[i+2] += tab[i];
//     }
//     return tab[val];
// }

// // console.log(fib(20));
// // console.log(fib(200));

// const bs = (list, t) => {
//     if (list.length === 1) {
//         if (list[0] === t) return true;
//         return false;
//     } else {
//         const mid = Math.floor(list.length/2);
//         if (t === list[mid]) return true;
//         if (t < list[mid]) {
//             const left = list.slice(0, mid);
//             return bs(left, t);
//         } else {
//             const right = list.slice(mid);
//             return bs(right, t);
//         }
//     }
// }

// // console.log(bs(l, 2));
// // console.log(bs(l, 29));