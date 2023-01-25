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
