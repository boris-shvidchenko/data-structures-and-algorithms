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


const l = [2,0.4,-43,23423,23,-77];

// b tree
// hash
// l list
// graph
// fib memo
// fib tab
// m sort
// s sort

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }
    hash(k) {
        let t = 0;
        for (let i = 0; i < k.length; i++) {
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

// console.log(qSort(l));

function qSort(list) {
    if (list.length <= 1) return list;
    const piv = list[0];
    const left = [];
    const right = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < piv) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }
    return [...qSort(right), piv, ...qSort(left)];
}

const bSearch = (list, target) => {
    if (list.length === 1) {
        if (list[0] === target) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (target === list[mid]) return true;
        if (target < list[mid]) {
            const left = list.slice(0, mid);
            return bSearch(left, target);
        } else {
            const right = list.slice(mid);
            return bSearch(right, target);
        }
    }
};

// console.log(bSearch(l, 3));
// console.log(bSearch(l, 90));
