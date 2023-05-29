// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// // Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);



// merge sort
// hash
// b tree

// const arr = [10, 1, -3, 30, 0.4, -9.4, 121];

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