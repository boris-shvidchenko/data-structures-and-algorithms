// == Can Construct ==
// Given a target and a word bank, return T/F whether the target can be constructed by using the items in the word bank. Elements can be reused.

function canConstruct(target, wordBank, memo={}) {
    if (target in memo) return memo[target];
    if (target === '') return true;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true
            }
        }
    }
    memo[target] = false;
    return false;
}

// Test
console.log(canConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t']));

// == Count Construct ==
// Given a target and a word bank, return an integer representing the total number of ways the target can be constructed using the words from the word bank. Elements can be reused.

function countConstruct(target, wordBank, memo={}) {
    if (target in memo) return memo[target];
    if (target === '') return true;
    let totalCount = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const numWaysForRest = countConstruct(suffix, wordBank, memo);
            totalCount += numWaysForRest;
        }
    }
    memo[target] = totalCount; // Note: When updating the memo always update before a return
    return totalCount;
}

// Test
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeef', ['f','e','ee','eee','eeeee','ef','ff']));

// == All Construct ==
// Given a target and a word bank, return an array containing all of the ways that the target can be constructed (as sub arrays). Elements can be reused.
function allConstruct(target, wordBank) {
    if (target === '') return [[]];
    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [ word, ...way,]);
            result.push(...targetWays);
        }
    }
    return result;
}

// Test
console.log(allConstruct('abcdef', ['ab','abc','cd','def','abcd','ef','c']));