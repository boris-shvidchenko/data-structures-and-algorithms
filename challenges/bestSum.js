// == Best Sum ==
// Given a target value and an array, return an array with the shortest combinaion of numbers possible. Return any of the arrays if multiple combinations are possible.

function bestSum(target, numbers) {
    if (target === 0) return [];
    if (target < 0) return mull;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = target - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            } 
        }
    }

    return shortestCombination;
}

// Test
console.log(bestSum(100, [1,2,5,25]));