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

// graph
// hash

class CustomSet {
    constructor() {
        this.set = [];
    }
    add(val) {
        if (!this.set.includes(val)) this.set.push(val);
    }
    print() {
        console.log(this.set);
    }
}

const newSet = new CustomSet();
newSet.add('A');
newSet.add('B');
newSet.add('C');
newSet.add('C');
newSet.add('D');
newSet.add('E');
newSet.add('E');
newSet.print();
