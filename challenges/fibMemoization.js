// // == Fibonacci Sequence ==
// // Find the nth value of a fibonacci sequence by optimizing a recursive function.

// // The following method works, but has a runtime that is exponential. Therefore a simple search of n can take a long time.
// function fib1(n) {
//     if (n <= 2) return 1;
//     return fib1(n-1) + fib(n-2);
// };

// // A better way is to use the following method. This pattern stores our recursive outcome in a js object (memoization), increasing overall runtime by optimizing the process.
// function fib2(n, memo = {}) {
//     // Check if n has already been saved in memo
//     if (n in memo) return memo[n];
//     if (n <= 2) return 1;
//     memo[n] = fib2(n-1, memo) + fib2(n-2, memo);
//     return memo[n];
// }

// // Test 
// console.log(fib2(50));

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

console.log(fib(20))
console.log(fib(200))