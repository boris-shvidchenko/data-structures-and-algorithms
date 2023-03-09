// == Fibonacci Sequence using tabulation ==
// Find the nth value of a fibonacci sequence, the first num will be 0, the second will be 1. Use tabulation.

// function fibTabulation(n){
//     const table = Array(n + 1).fill(0);
//     table[1] = 1;
//     for (let i = 0; i <= n; i++) {
//         table[i + 1] += table[i];
//         table[i + 2] += table[i];
//     }
//     return table[n];
// }

function fibTabulation(num) {
    const table = new Array(num + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= num; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[num];
    // [0, 1, 1 , 2, ,0 ,0]
}

// Test
console.log(fibTabulation(60));