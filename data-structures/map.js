// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// // Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);


// ms
// qs
// ss
// hash
// bt
// graph

const l = [1,2,3,4,5,6];
// const l = [1,-90,3,4.5,333,0.9,-900];

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
        let cur = this.head;
        let str = '';
        while (cur !== null) {
            str += cur.v + '>';
            cur = cur.next;
        }
        console.log(str);
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


class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }
    hash(k) {
        let t = 0;
        for (let i=0; i<k.length; i++) {
            t += k.charCodeAt(i);
        }
        return t % this.size;
    }
    set(k,v) {
        const index = this.hash(k);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[k,v]];
        } else {
            const sameKey = bucket.find(i => i[0] === k);
            if (sameKey) {
                sameKey[1] = v;
            } else {
                bucket.push([k,v]);
            }
        }
    }
    remove(k) {
        const index = this.hash(k);
        const bucket = this.table[index];
        const sameKey = bucket.find(i => i[0] === k);
        bucket.splice(bucket.indexOf(sameKey), 1);
    }
    display() {
        this.table.forEach(i => console.log(i));
    }
}

const table = new HashTable(50);
table.set('name', 'Ryan');
table.set('age', 25);
table.set('color', 'red');
table.display();
table.remove('color');
table.set('mane', 'Clark');
table.display();