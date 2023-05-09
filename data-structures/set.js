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

// hash
// merge
// tree
// quick sort

class HashMap {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }
    hash(k) {
        let total = 0;
        for (let i = 0; i < k.length; i++) {
            total += k.charCodeAt(i);
        }
        return total % this.size;
    }
    add(k,v) {
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
    print() {
        this.table.forEach(i => console.log(i));
    }
}

const table = new HashMap(50);
table.add('name', 'Ryan');
table.add('age', 25);
table.add('color', 'red');
table.print();
table.remove('color');
table.add('mane', 'Clark');
table.print();

