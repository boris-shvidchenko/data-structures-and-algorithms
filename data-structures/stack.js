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

// merge sort
// sel sort


const a = [1,90,-20,4.5,4.6,-98.92];

function mergeSort(list) {
    if (list.length <= 1) return list;
    const mid = Math.floor(list.length/2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return sort(mergeSort(left), mergeSort(right));
}

function sort(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    const res = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            res.push(left[leftIndex]);
            leftIndex++;
        } else {
            res.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return res.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// console.log(mergeSort(a));

const selSort = (list, res=[]) => {
    if (list.length === 0) return res;
    const min = Math.min(...list);
    const minIndex = list.indexOf(min);
    res.push(min);
    list.splice(minIndex, 1);
    return selSort(list, res);
}

console.log(selSort(a));