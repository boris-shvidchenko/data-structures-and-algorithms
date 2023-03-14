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

function fibTabulation(v) {
    if (v <= 2) return 1;
    const table = new Array(v + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i < v; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[v];
}

// Test
console.log(fibTabulation(13));
console.log(fibTabulation(170));