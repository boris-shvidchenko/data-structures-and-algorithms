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

// tree
// hash
// merge sort
// quick sort
// b search
// fab tab/memo

class Node {
    constructor(v) {
        this.v = v;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    append(n) {
        const newNode = new Node(n);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let cur = this.head;
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.length++;
    }
    appendAt(n, i) {
        const newNode = new Node(n);
        let cur = this.head;
        let curIndex = 0;
        let prev;
        if (i === 0) {
            this.head = newNode;
            newNode.next = cur;
        } else {
            while (curIndex < i) {
                prev = cur;
                cur = cur.next;
                curIndex++;
            }
            prev.next = newNode; // here
            newNode.next = cur;
        }
        this.length++;
    }
    remove(n) {
        let cur = this.head;
        let prev;
        if (n === this.head.v) {
            this.head = cur.next;
        } else {
            while (cur !== null) {
                if (cur.v === n) {
                    prev.next = cur.next; // here
                    return;
                }
                prev = cur;
                cur = cur.next;
            }
        }
        this.length--;
    }
    print() {
        let str = '';
        let cur = this.head;
        while (cur !== null) {
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
list.remove('b'); 
list.appendAt('z', 1);
list.print();
list.appendAt('p', 0);
list.remove('p'); 
list.print();
