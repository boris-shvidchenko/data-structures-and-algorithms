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
    append(val) {
        const newNode = new Node(val);
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
    appendAt(val, index) {
        const newNode = new Node(val);
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
    remove(val) {
        let current = this.head;
        let prev;
        if (this.head.val === val) {
            this.head = current.next;
        } else {
            while (current !== null) {
                if (current.val === val) {
                    prev.next = current.next;
                    return;
                }
                prev = current;
                current = current.next;
            }
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
// a -> b -> c -> etc.
list.print();
list.remove('a'); // a -> c -> etc.
list.appendAt('z', 0);
list.print();
