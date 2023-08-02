// // Stacks are linear collections of elements (like arrays) but are considered 'first-in last-out'. Data can only be removed/added with pop/push type methods.

// class Stack {
//     constructor() {
//         this.items = []; // Will store our items
//     }
//     push(value) {
//         this.items.push(value)
//     }
//     pop() {
//         if (this.items.length !== 0) this.items.pop();
//     }
//     peek() {
//         if (this.items.length !== 0) console.log(this.items[this.items.length - 1]);
//     }
//     print() {
//         console.log(this.items.join('|'));
//     }
// }

// let stack = new Stack();
// stack.push(1);
// stack.print();
// stack.push(2);
// stack.print();
// stack.push(3);
// stack.print();
// stack.push(4);
// stack.print();
// stack.peek(); // Expects 4


// hash
// btree 

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = [];
    }
    hash(k) {
        let t = 0;
        for (let i=0; i<k.length; i++) {
            t += k.charCodeAt(i);
        }
        return t % this.size;
    }
    display() {
        this.table.forEach(i => console.log(i));
    }
    set(k, v) {
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
}

const table = new HashTable(50);
table.set('name', 'Ryan');
table.set('age', 25);
table.set('color', 'red');
table.display();
table.remove('color');
table.set('mane', 'Clark');
table.display();