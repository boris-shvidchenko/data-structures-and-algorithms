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

// quick sort
// tree
// graph
// fib memo/tab
// linke list
// hash
// bi search

const list = [2,4,23,-0.9,-300,222,32,1.4];

const qS = (array) => {
    if (array.length <= 1) return array;
    const pivot = array[0];
    const left = [];
    const right = [];
    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] < pivot) {
    //         left.push(array[i]);
    //     } else {
    //         right.push(array[i]);
    //     }        
    // }
    array.forEach((i, ind) => {
        if (ind !== 0) {
            if (array[i] <= pivot) left.push(array[i]);
            if (array[i] > pivot) right.push(array[i]);
        }
    })
    return [...qS(left), pivot, ...qS(right)]
};

console.log(qS(list));