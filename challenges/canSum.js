// == Can Sum ==
// Given a target value and an array, return T/F whether the target value is a possible sum of any of the numbers in the array.

// This works but can be slow depending on the size of the target
function canSum1(target, numbers) {
    // Two base cases
    if (target === 0) return true;
    if (target < 0) return false;
    for (let num of numbers) {
        const remainder = target - num;
        if (canSum1(remainder, numbers) === true) return true;
    }
    return false;
}

// Optimized version of canSum1
function canSum2(target, numbers, memo={}) {
    // Check memo
    if (target in memo) return memo[target];
    // Two base cases
    if (target === 0) return true;
    if (target < 0) return false;
    for (let num of numbers) {
        const remainder = target - num;
        if (canSum2(remainder, numbers, memo) === true) {
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
}

// Test
console.log(canSum2(300, [5,3,4,7]))


// Tabulation approach

function canSum3(target, numbers) {
    const table = Array(target + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= target; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[target];
}

console.log(canSum3(7, [5,3,4]));