// 



// merge sort
// sel sort

// fib memo
// fib tab

const l = [1,50,-4,2.5,34];

function fibMemo(v, memo={}) {
    if (v <= 2) return 1;
    if (v in memo) return memo[v];
    memo[v] = fibMemo(v-1, memo) + fibMemo(v-2, memo);
    return memo[v];
}

console.log(fibMemo(10));
console.log(fibMemo(100));

function fibTab(v) {
    if (v <= 2) return 1;
    const table = new Array(v+1).fill(0);
    table[1] = 1;
    for (let i = 0; i < v; i++) {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[v];
}
console.log(fibTab(20))
console.log(fibTab(200))

function bs(list, target) {
    if (list.length === 1) {
        if (list[0] === target) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (target === list[mid]) return true;
        if (target < list[mid]) {
            const left = list.slice(0, mid);
            return bs(left, target);
        } else {
            const right = list.slice(mid);
            return bs(right, target);
        }
    }
}

// console.log(bs(l, 2))
// console.log(bs(l, 23))

function qs(list) {
    if (list.length <= 1) return list;
    const piv = list[0];
    let left = [];
    let right = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < piv) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }
    return [...qs(left), piv, ...qs(right)];
}
// console.log(qs(l));

class Node {
    constructor(val) {
        this.val = val;
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
        let prev;
        let curIndex = 0;
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
        let s = '';
        let cur = this.head;
        while (cur !== null) {
            s += cur.val + '>';
            cur = cur.next;
        }
        console.log(s);
    }
}

// Test
// const list = new LinkedList();
// list.append('a');
// list.append('b');
// list.append('c');
// list.print();
// list.remove('b'); // a -> c -> etc.
// list.appendAt(1,'z');
// list.print();