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

const a = [1,2,3,4,5];
// const a = [1,0,4,5,-90,3.4];

// merge s
// sel sort
// q sort
// link list
// hash
// btree
// graph

class Node {
    constructor(v) {
        this.v = v;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
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
        this.length++;
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
        if (this.head.v === node) {
            this.head = cur.next;
        } else {
            while (cur.v !== node) {
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
        while(cur !== null) {
            str += cur.v + '>';
            cur = cur.next;
        }
        console.log(str);
    }
}

// Test
const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.print();
list.remove('b'); // a -> c -> etc.
list.appendAt(1,'z');
list.print();

function fib(val) {
    if (val <= 2) return 1;
    const tab = new Array(val+1).fill(0);
    tab[1] = 1;
    for (let i = 0; i < val; i++) {
        tab[i+1] += tab[i];
        tab[i+2] += tab[i];
    }
    return tab[val];
}

// console.log(fib(120))
// console.log(fib(1200))

const bs = (list, t) => {
    if (list.length === 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        let half;
        const mid = Math.floor(list.length/2);
        if (t === list[mid]) return true;
        if (t < list[mid]) {
            half = list.slice(0, mid);
        } else {
            half = list.slice(mid);
        }
        return bs(half, t);
    }
}

// console.log(bs(a, 2));
// console.log(bs(a, 24));