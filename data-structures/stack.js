// // Stacks are linear collections of elements (like arrays) but are considered 'first-in last-out'. Data can only be removed/added with pop/push type methods.

// class Stack {
//     constructor() {
//         this.items = []; // Will store our items
//     }
//     push(value) {
//         this.items.push(value)
//     }
//     pop() {
//         if (this.items.length !== 0) this.items.pop();
//     }
//     peek() {
//         if (this.items.length !== 0) console.log(this.items[this.items.length - 1]);
//     }
//     print() {
//         console.log(this.items.join('|'));
//     }
// }

// let stack = new Stack();
// stack.push(1);
// stack.print();
// stack.push(2);
// stack.print();
// stack.push(3);
// stack.print();
// stack.push(4);
// stack.print();
// stack.peek(); // Expects 4


// bs
// hash
// quick sort

const l = [1,2,3,4,5,6];
const l2 = [1,-90,2,3.09,-43.9,4434];

const bs = (list, t) => {
    if (list.length === 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (list[mid] === t) return true;
        if (t < list[mid]) return bs(list.slice(0, mid), t);
        return bs(list.slice(mid), t);
    }
}

console.log(bs(l, 3));
console.log(bs(l, 39));