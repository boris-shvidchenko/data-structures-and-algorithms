// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// // Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);

const a = [1,2,3,4,5,6];
const b = [1,-90,3.4,3.5,3,3,403,-93];

function bs(l, t) {
    if (l.length === 1) {
        if (l[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(l.length/2);
        if (t === l[mid]) return true;
        if (t < l[mid]) return bs(l.slice(0, mid), t);
        return bs(l.slice(mid), t)
    }
}

// console.log(bs(a, 3));
// console.log(bs(a, 5));
// console.log(bs(a, 50));

// merge sort

// q sort

// sel sort

const ss = (list, res=[]) => {
    if (list.length === 0) return res;
    const min = list.reduce((a, b) => a < b ? b : a);
    const minIndex = list.indexOf(min);
    res.push(min);
    list.splice(minIndex, 1);
    return ss(list, res); 
}

console.log(ss(b));

// fib