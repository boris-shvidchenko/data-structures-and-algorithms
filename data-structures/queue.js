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

// sel sort
// graph all

const a = [1,40,-4,3.8,3.9,-0.5,3,3];

function selSort(list, res=[]) {
    if (list.length === 0) return res;
    const min = Math.min(...list);
    const minIndex = list.indexOf(min);
    return selSort(list.splice(minIndex, 1), res.push(min));
}

console.log(selSort(a));