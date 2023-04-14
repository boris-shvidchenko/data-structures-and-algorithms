// // Similar to arrays, but cannot have duplicate values. Order is also not maintained via indexes (iterating with (for x in arr) wont work).

// let str = new Set('bookkeeper');
// console.log(str); // Expects ['b','o','k','e','p','r']

// let nums = new Set();
// nums.add(1);
// nums.add(2);
// nums.add(1); // Will be ignored
// nums.add('Hello');
// nums.add('Hi');
// console.log(nums); // Expects ['1','2','Hello','Hi']

// // Iteration works just like with an array
// for (let char of nums) console.log(char); 

const array = [2,9,4,0,-100,333.99,3.9,0.1,333,2,6,4,109];

function selectionSort(list, sorted=[]) {
    if (list.length === 0) return sorted;
    const min = Math.min(...list);
    const minIndex = list.indexOf(min);
    sorted.push(min);
    list.splice(minIndex, 1);
    return selectionSort(list, sorted);
}

console.log(selectionSort(array));
