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


// fib 2
// hash
// btree 

const fib = (v) => {
    if (v <= 2) return 1;
    const table = new Array(v+1).fill(0);
    table[1] = 1;
    for (let i = 0; i < v; i++) {
        table[i+1] += table[i]
        table[i+2] += table[i]
    }
    return table[v];
}

console.log(fib(20))
console.log(fib(208))