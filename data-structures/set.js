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
// merge sort
const ar = [2,4,0,-200,397,2.6,3.3];

function mSort(list) {
    if (list.length <= 1) return list;
    const mid = Math.floor(list.length / 2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return sort(mSort(left), mSort(right));
}

function sort(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    const res = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            res.push(left[leftIndex]);
            leftIndex++;
        } else {
            res.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return res.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log(mSort(ar));