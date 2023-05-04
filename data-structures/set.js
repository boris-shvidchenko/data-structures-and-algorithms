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


// first in last out
// a/b/c/d ...

class Queue {

    constructor() {
        this.stack = [];
    }

    add(val) {
        this.stack.unshift(val);
    }

    rmv() {
        this.stack.pop();
    }

    print() {
        let str = '';
        this.stack.forEach(i => str += i);
        console.log(str);
    }
}

const newQueue = new Queue();
newQueue.add('A');
newQueue.add('B');
newQueue.add('C');
newQueue.print();
newQueue.rmv();
newQueue.print();
newQueue.rmv();
newQueue.print();