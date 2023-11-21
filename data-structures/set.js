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

const a = [1,2,3,4,5];

function bs(list, t) {
    if (list.length === 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (t === list[mid]) return true;
        if (t < list[mid]) {
            const left = list.slice(0, mid);
            return bs(left, t);
        } else {
            const right = list.slice(mid);
            return bs(right, t);
        }
    }
}

console.log(bs(a, 2));
console.log(bs(a, 33));

function fib(val, memo={}) {
    if (val <= 2) return 1;
    if (val in memo) return memo[val];
    memo[val] = fib(val-1, memo) + fib(val-2, memo);
    return memo[val];
}

// console.log(fib(10));
// console.log(fib(100));

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

// console.log(fib2(20));
// console.log(fib2(200));