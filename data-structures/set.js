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
// fib
// graph
// b sear
// leet prob

const arr = [1,2,3,4,5,6,7,8,9,10];

const bSearch = (list, tar) => {
    console.log(list);
    if (list.length === 1) {
        if (list[0] === tar) return true;
        return false;
    } else {
        const mid = Math.floor(list.length / 2);
        if (list[mid] === tar) return true;
        if (tar < list[mid]) {
            return bSearch(list.slice(0, mid), tar);
        } else {
            return bSearch(list.slice(mid), tar);
        }
    }
}

console.log(bSearch(arr, 5));
console.log(bSearch(arr, 2));
console.log(bSearch(arr, -10));
console.log(bSearch(arr, 89));