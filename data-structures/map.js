// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// // Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);


// bs
// ms
// qs
// ss
// hash
// ll
// bt
// graph

const l = [1,2,3,4,5,6];
// const l = [1,-90,3,4.5,333,0.9,-900];

const fib = (v) => {
    if (v <= 2) return 1;
    const table = new Array(v+1).fill(0);
    table[1] = 1;
    for (let i=0; i<v; i++) {
        table[i+1] += table[i] ;
        table[i+2] += table[i] ;
    }
    return table[v];
}

// console.log(fib(20))
// console.log(fib(200))

function bs(list, t) {
    if (list.length === 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (t === list[mid]) return true;
        if (t < list[mid]) {
            const left = list.slice(0, mid);
            return bs(left, t);
        } else {
            const right = list.slice(mid);
            return bs(right, t);
        }
    }
}

console.log(bs(l, 2))
console.log(bs(l, 29))