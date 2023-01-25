// == How Sum ==
// Given a target value and an array, return an array of possible combinations of numbers that add up to the target. If multiple combinations are possible, return any of one of the combination arrays. If none return null.

// This works but can be optimized to improve runtime
function howSum1(target, numbers) {
    // Base cases
    if (target === 0) return [];
    if (target < 0) return null;
    for (let num of numbers) {
        const remainder = target - num;
        const remainderResult = howSum1(remainder, numbers);
        if (remainderResult !== null) return [...remainderResult, num];
    }
    return null;
}

// Optimized version of howSum1
function howSum2(target, numbers, memo={}) {
    if (target in memo) return memo[target];
    // Base cases
    if (target === 0) return [];
    if (target < 0) return null;
    for (let num of numbers) {
        const remainder = target - num;
        const remainderResult = howSum2(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[target] = [...remainderResult, num];
            return memo[target];
        }
    }
    memo[target] = null;
    return null;
}

// Test
console.log(howSum2(511, [7,14]));