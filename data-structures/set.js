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

// q sort
// sel sort
// merge sort
// graph
// l list
// b tree
// hash

const l = [1,4,-845,3.6,234,4.05,-909];

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    append(node) {
        const newNode = new Node(node);
        let cur = this.head;
        if (this.head === null) {
            this.head = newNode;
        } else {
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.length++
    }
    appendAt(index, node) {
        const newNode = new Node(node);
        let cur = this.head;
        let curIndex = 0;
        let prev;
        if (index === 0) {
            this.head = newNode;
            newNode.next = cur;
        } else {
            while (curIndex < index) {
                prev = cur;
                cur = cur.next;
                curIndex++;
            }
            prev.next = newNode;
            newNode.next = cur;
        }
        this.length++;
    }
    remove(node) {
        let cur = this.head;
        let prev;
        if (this.head.val === node) {
            this.head = cur.next;
        } else {
            while (cur.val !== node) {
                prev = cur;
                cur = cur.next;
            }
            prev.next = cur.next;
        }
        this.length--;
    }
    print() {
        let str = '';
        let cur = this.head;
        while (cur !== null) {
            str += cur.val + '>';
            cur = cur.next;
        }
        console.log(str);
    }
}


const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.print();
list.remove('b'); // a -> c -> etc.
list.appendAt(1,'z');
list.print();

const fib = (v) => {
    if (v <= 2) return 1;
    const tab = new Array(v+1).fill(0);
    tab[1] = 1;
    for (let i = 0; i < v; i++) {
        tab[i+1] += tab[i];
        tab[i+2] += tab[i];
    }
    return tab[v];
}

// console.log(fib(20));
// console.log(fib(300));

function bSearch(list, target) {
    if (list.length === 1) {
        if (list[0] === target) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (target === list[mid]) return true;
        if (target < list[mid]) {
            const left = list.slice(0, mid);
            return bSearch(left, target);
        } else {
            const right = list.slice(mid);
            return bSearch(right, target);
        }
    }
}

// console.log(bSearch(l, 2))
// console.log(bSearch(l, 20))