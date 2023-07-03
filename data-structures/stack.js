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



const ar2 = [2,-894444,0.3,3.5,-5.8,2000];


// linked list

function merge(list) {
    if (list.length <= 1) return list;
    const mid = Math.floor(list.length/2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return sort(merge(left), merge(right));
}

function sort(left, right) {
    let li = 0;
    let ri = 0;
    const res = [];
    while (li < left.length && ri < right.length) {
        if (left[li] < right[ri]) {
            res.push(left[li]);
            li++;
        } else {
            res.push(right[ri]);
            ri++;
        }
    }
    return res.concat(left.slice(li), right.slice(ri));
}

console.log(merge(ar2));