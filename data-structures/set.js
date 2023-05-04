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



// function fib(v, memo={}) {
//     if (v <= 2) return 1;
//     if (v in memo) return memo[v];
//     memo[v] = fib(v-1, memo) + fib(v-2, memo);
//     return memo[v];
// }

// console.log(fib(2));
// console.log(fib(3));

function climbStairs(n, memo={}) {
    if (n <= 1) return 1;
    if (n in memo) return memo[n];
    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    return memo[n]; 
}

console.log(climbStairs(4)); // 2
console.log(climbStairs(5)); // 3


// n = 1, 2, 3, 4, 5
//   [ 1, 2 ,3 ,5 ,8 ,13]

