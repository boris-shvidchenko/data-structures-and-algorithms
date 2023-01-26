// == Can Construct ==
// Given a target and a word bank, return T/F whether the target can be constructed by using the items in the word bank. Elements can be reused.

function canConstruct1(target, wordBank, memo={}) {
    if (target in memo) return memo[target];
    if (target === '') return true;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct1(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true
            }
        }
    }
    memo[target] = false;
    return false;
}

// Test
// console.log(canConstruct1('enterapotentpot', ['a','p','ent','enter','ot','o','t']));

// Tabulation approach

function canConstruct2(target, wordBank) {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;
    for (let i = 0; i < target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                if (word === target.slice(i, i + word.length)) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}

// Test
// console.log(canConstruct2('enterapotentpot', ['a','p','ent','enter','ot','o','t']));

// == Count Construct ==
// Given a target and a word bank, return an integer representing the total number of ways the target can be constructed using the words from the word bank. Elements can be reused.

function countConstruct1(target, wordBank, memo={}) {
    if (target in memo) return memo[target];
    if (target === '') return true;
    let totalCount = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWaysForRest = countConstruct1(suffix, wordBank, memo);
            totalCount += numWaysForRest;
        }
    }
    memo[target] = totalCount; // Note: When updating the memo always update before a return
    return totalCount;
}

// Test
// console.log(countConstruct1('eeeeeeeeeeeeeeeeeeeeeeeeeef', ['f','e','ee','eee','eeeee','ef','ff']));

// Tabulation approach

function countConstruct2(target, wordBank) {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i <= target.length; i++) {
        if (target[i] !== 0) {
            for (let word of wordBank) {
                if (word === target.slice(i, i + word.length)) {
                    table[i + word.length] += table[i];
                }
            }
        }
    }
    return table[target.length];
}

// Test
// console.log(countConstruct2('eeeeeeeeeeeeeeeeeeeeeeeeeef', ['f','e','ee','eee','eeeee','ef','ff']));

// == All Construct ==
// Given a target and a word bank, return an array containing all of the ways that the target can be constructed (as sub arrays). Elements can be reused.
function allConstruct1(target, wordBank) {
    if (target === '') return [[]];
    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct1(suffix, wordBank);
            const targetWays = suffixWays.map(way => [ word, ...way,]);
            result.push(...targetWays);
        }
    }
    return result;
}

// Test
// console.log(allConstruct1('abcdef', ['ab','abc','cd','def','abcd','ef','c']));

// Tabulation approach

function allConstruct2(target, wordBank) {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];
    for (let i = 0; i < target.length; i++) {
        for (let word of wordBank) {
            if (word === target.slice(i, i + word.length)) {
                const newCombination = table[i].map(subarray => [...subarray, word]);
                table[i + word.length].push(...newCombination);
            }
        }
    }  
    return table[target.length];
}

// Test
console.log(allConstruct2('abcdef', ['ab','abc','cd','def','abcd','ef','c']));