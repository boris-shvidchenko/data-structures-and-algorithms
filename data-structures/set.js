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

// l list
// stack

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
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }
    appendAt(node, index) {
        const newNode = new Node(node);
        let current = this.head;
        let currentIndex = 0;
        let prev;
        if (index === 0) {
            this.head = newNode;
            newNode.next = current;
        } else {
            while (currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            prev.next = newNode;
            newNode.next = current;
        }
        this.length++;
    }
    remove(node) {
        let current = this.head;
        let prev;
        if (this.head.val === node) {
            this.head = current.next;
        } else {
            while (current.val !== node) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
        this.length--;
    }
    removeAll() {
        this.length = 0;
        this.head = null;
    }
    print() {
        let str = '';
        let current = this.head;
        while (current !== null) {
            str += current.val + '>';
            current = current.next;
        }
        console.log(str);
    }
}

const list = new LinkedList();
list.append('A');
list.append('B');
list.append('C');
list.print();
list.appendAt('Z', 0);
list.print();
list.appendAt('X', 2);
list.print();
list.remove('B');
list.remove('Z');
list.print();
list.removeAll();
list.print();

