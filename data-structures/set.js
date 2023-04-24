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

// linke list
// hash
// bi search

// const list = [2,4,23,-0.9,-300,222,32,1.4];

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
            while (current !== null) {
                prev = current;
                current = current.next;
                if (current.val === node) {
                    prev.next = current.next;
                    return;
                } 
            }
        }
        this.length--;
    }
    contains(node) {
        let current = this.head;
        while (current !== null) {
            if (current.val === node) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    print() {
        let current = this.head;
        let str = '';
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
console.log(list.contains('a')); // true
console.log(list.contains('z')); // false
list.print();
list.remove('a'); // a -> c -> etc.
list.appendAt('z', 0);
list.print();
console.log(list.contains('z')); // true