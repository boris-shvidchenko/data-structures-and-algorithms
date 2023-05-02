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


const array = [0,1,2,3,4,5,6,7,8,9,10];

const bSearch = (list, target) => {
    console.log(list);
    if (list.length === 1) {
        if (list[0] === target) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (list[mid] === target) return true;
        if (target < list[mid]) {
            return bSearch(list.slice(0, mid), target);
        } else {
            return bSearch(list.slice(mid), target);
        }
    }
}

console.log(bSearch(array, 5));
console.log(bSearch(array, 90));
console.log(bSearch(array, 1));