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


const l = [2,0.4,-43,23423,23,-77];

// b tree
// l list
// graph
// fib memo
// fib tab
// s sort

const fib = (v, memo={}) => {
    if (v <= 2) return 1;
    if (v in memo) return memo[v];
    memo[v] = fib(v-1, memo) + fib(v-2, memo);
    return memo[v];
}
console.log(fib(10));
console.log(fib(100));

console.log('Fib 2 => ', fib2(20));;
console.log('Fib 2 => ', fib2(200));;
function fib2(val) {
    if (val <= 2) return 1;
    const table = new Array(val+1).fill(0);
    table[1] = 1;
    for (let i = 0; i < val; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[val];
}

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

// console.log(mergeSort(l));

