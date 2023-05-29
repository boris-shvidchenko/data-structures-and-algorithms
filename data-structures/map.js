// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// // Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);



// b search
// merge sort
// quick sort
// sel sort
// fib memo/tab
// graph
// hash
// b tree
// linked list

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
    appendAt(node, index) {
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
    delAll() {
        this.head = null;
        this.length = 0;
    }
    print() {
        let cur = this.head;
        let str = '';
        while (cur !== null) {
            str += cur.val + '>';
            cur = cur.next;
        }
        console.log(str);
    }
}

const list = new LinkedList();
list.append('A');
list.append('B');
list.append('C');
list.append('D');
list.print();
list.appendAt('Z', 0);
list.appendAt('X', 3);
list.print();
list.remove('B')
list.remove('Z')
list.print();
list.delAll();
list.print();