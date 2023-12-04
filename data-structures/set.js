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


// b search
// fib memo
// fib tab
// q sort
// merge sort
// sel sort
// b tree
// hash
// graph
// linked list

const l = [1,2,3,4,5];
const l2 = [1,-90,4.53,2423,-934];

function fib(val, memo={}) {
    if (val <= 2) return 1;
    if (val in memo) return memo[val];
    memo[val] = fib(val-1, memo) + fib(val-2, memo);
    return memo[val];
}
console.log(fib(10));
console.log(fib(100));

function fib2(val) {
    if (val <= 2) return 1;
    const tab = new Array(val+1).fill(0);
    tab[1] = 1;
    for (let i = 0; i < val; i++) {
        tab[i+1] += tab[i];
        tab[i+2] += tab[i];
    }
    return tab[val];
}
console.log(fib2(20));
console.log(fib2(200));

function binarySort(list, target) {
    if (list.length === 1) {
        if(list[0] === target) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (target === list[mid]) return true;
        if (target < list[mid]) {
            const left = list.slice(0, mid);
            return binarySort(left, target);
        } else {
            const right = list.slice(mid);
            return binarySort(right, target);
        }
    }
}
console.log(binarySort(l, 2));
console.log(binarySort(l, 29));


function mergeSort(list) {
    if (list.length <= 1) return list;
    const mid = Math.floor(list.length/2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return sort(mergeSort(left), mergeSort(right));
}

function sort(left, right) {
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
    return res.concat(left.slice(leftIndex), right.slice(rightIndex));
}
console.log(mergeSort(l2));