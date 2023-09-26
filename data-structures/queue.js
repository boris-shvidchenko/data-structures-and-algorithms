// Queues are 'first-in first-out' data structures. They use shift/unshift type operations to add/remove elements.

class Queue {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.unshift(item);
    }
    remove() {
        if (this.items.length !== 0) this.items.pop();
    }
    print() {
        if (this.items.length !== 0) console.log(this.items.join('|'));
    }
}

let queue = new Queue();
queue.add(1);
queue.print()
queue.add(2);
queue.print()
queue.add(3);
queue.print()
queue.add(4);
queue.print()
queue.remove()
queue.print()