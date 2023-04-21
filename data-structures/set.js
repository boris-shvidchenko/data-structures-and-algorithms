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

//sel sort
//link

const arr = [4,21,6,-0.9,-1,21,12414,2,-12312313];

const selSort = (list, res=[]) => {
    if (list.length === 0) return res;
    // const min = Math.min(...list);
    const min = list.reduce((a,b) => a < b ? b : a);
    const minIndex = list.indexOf(min);
    res.push(min);
    list.splice(minIndex, 1);
    return selSort(list, res);
};

console.log(selSort(arr));