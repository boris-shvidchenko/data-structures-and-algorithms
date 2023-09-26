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








const a1 = [1,2,3,4,5,6];
const a2 = [1,0.5,-93,232,6];

function mergeSort(list) {
    if (list.length <= 1) return list;
    const mid = Math.floor(list.length/2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return sort(mergeSort(left), mergeSort(right));
}
function sort(left, right) {
    const res = [];
    let leftIndex = 0;
    let rightIndex = 0;
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

// console.log(mergeSort(a2));

function bsearch(list, t) {
    if (list.length === 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (list[mid] === t) return true;
        if (t < list[mid]) {
            const left = list.slice(0, mid);
            return bsearch(left, t);
        } else {
            const right = list.slice(mid);
            return bsearch(right, t);
        }
    }
}

// console.log(bsearch(a1, 2));
// console.log(bsearch(a1, 29));

function qsort(list) {
    if (list.length <= 1) return list;
    const piv = list[0];
    const left = [];
    const right = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < piv) left.push(list[i]);
        if (list[i] >= piv) right.push(list[i]);
    }
    return [...qsort(left), piv, ...qsort(right)];
}

// console.log(qsort(a2));

function selSort(list, res=[]) {
    if (list.length === 0) return res;
    const min = Math.min(...list);
    const minIndex = list.indexOf(min);
    list.splice(minIndex, 1);
    res.push(min);
    return selSort(list, res); 
}

function fib(v, memo={}) {
    if (v <= 2) return 1;
    if (v in memo) return memo[v];
    memo[v] = fib(v-1, memo) + fib(v-2, memo);
    return memo[v];
}

// console.log(fib(14));
// console.log(fib(189));

function fib2(v) {
    if (v <= 2) return 1;
    const table = new Array(v+1).fill(0);
    table[1] = 1;
    for (let i = 0; i < v; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[v];
}

console.log(fib2(20));
console.log(fib2(200));

    

// B Tree
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// function dft(root, t) {

// }
// console.log(dft(a));
// // console.log(dft(a, 'b'));
// // console.log(dft(a, 'z'));

// // function bft(root, t) {

// // }
// // console.log(bft(a));
// // // console.log(bft(a, 'b'));
// // // console.log(bft(a, 'z'));