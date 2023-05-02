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


// fib
// graph
// tree
// selection sort

const fib = (val) => {
    if (val <= 2) return 1;
    const table = new Array(val + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i < val; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[val];
}

console.log(fib(20));
console.log(fib(200));
