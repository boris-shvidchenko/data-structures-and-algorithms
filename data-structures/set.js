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


const v = 'boooksareeesweeeeet';

class customSet {
    constructor() {
        this.set = [];
    }
    add(str) {

        const strArray = str.split('');
        strArray.forEach(i => !this.set.includes(i) ? this.set.push(i) : null);
        console.log(this.set);

    }
}

const newSet = new customSet();
newSet.add(v);