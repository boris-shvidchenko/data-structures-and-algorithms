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

// linked
// selection sort

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
    append(v) {
        const newNode = new Node(v);
        let current = this.head;
        if (this.head === null) {
            this.head = newNode;
        } else {
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }
    appendAt(i, v) {
        const newNode = new Node(v);
        let current = this.head;
        let currentIndex = 0;
        let prev;
        if (i === 0) {
            this.head = newNode;
            newNode.next = current;
        } else {
            while (currentIndex < i) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            prev.next = newNode;
            newNode.next = current;
        }
        this.length++;
    }
    remove(v) {
        let current = this.head;
        let prev;
        if (this.head.val === v) {
            this.head = current.next;
        } else {
            while (current.val !== v) {
                prev = current;
                current = current.next;
            } 
            prev.next = current.next;
        }
        this.length--;
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

// Test
const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.print();
list.remove('b'); 
list.appendAt(1,'z');
list.print();
list.appendAt(0,'p');
list.print();
list.remove('p');
list.print();
