// // Queues are 'first-in first-out' data structures. They use shift/unshift type operations to add/remove elements.

// class Queue {
//     constructor() {
//         this.items = [];
//     }
//     add(item) {
//         this.items.unshift(item);
//     }
//     remove() {
//         if (this.items.length !== 0) this.items.pop();
//     }
//     print() {
//         if (this.items.length !== 0) console.log(this.items.join('|'));
//     }
// }

// let queue = new Queue();
// queue.add(1);
// queue.print()
// queue.add(2);
// queue.print()
// queue.add(3);
// queue.print()
// queue.add(4);
// queue.print()
// queue.remove()
// queue.print()

// fib tab
// sel sort
// graph all

const fib = (val) => {
    if (val <= 2) return 1;
    const tab = new Array(val + 1).fill(0);
    tab[1] = 1;
    for (let i = 0; i < val; i++) {
        tab[i+1] += tab[i];
        tab[i+2] += tab[i];
    }
    return tab[val];
}
console.log(fib(20))
console.log(fib(202))