// Stacks are linear collections of elements (like arrays) but are considered 'first-in last-out'. Data can only be removed/added with pop/push type methods.

class Stack {
    constructor() {
        this.items = []; // Will store our items
    }
    push(value) {
        this.items.push(value)
    }
    pop() {
        if (this.items.length !== 0) this.items.pop();
    }
    peek() {
        if (this.items.length !== 0) console.log(this.items[this.items.length - 1]);
    }
    print() {
        console.log(this.items.join('|'));
    }
}

let stack = new Stack();
stack.push(1);
stack.print();
stack.push(2);
stack.print();
stack.push(3);
stack.print();
stack.push(4);
stack.print();
stack.peek(); // Expects 4
