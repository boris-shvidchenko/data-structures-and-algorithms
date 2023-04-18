// == Best Sum ==
// Given a target value and an array, return an array with the shortest combinaion of numbers possible. Return any of the arrays if multiple combinations are possible.

function bestSum1(target, numbers, memo={}) {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;
    let shortestCombination = null;
    for (let num of numbers) {
        const remainder = target - num;
        const remainderCombination = bestSum1(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            } 
        }
    }
    memo[target] = shortestCombination;
    return shortestCombination;
}

// Test
console.log(bestSum1(100, [1,2,5,25]));

// Tabulation approach
function bestSum2(target, numbers) {
    const table = Array(target + 1).fill(null);
    table[0] = [];
    for (let i = 0; i < target; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num];
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }
            }
        }
    }
    return table[target];
}

// Test
console.log(bestSum2(8, [2,3,5,1,8]));