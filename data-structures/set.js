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

// hash
// merge
// tree
// quick sort

const quickSort = (list) => {
    if (list.length <= 1) return list;
    const pivot = list[0];
    const left = [];
    const right = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [5,2,1,-9,0.6,333,333,-0.3];
console.log(quickSort(arr));