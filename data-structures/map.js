// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// // Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);

// qs
// ss
// ms

// const a = [1,2,3,4,5,6];
const a = [1,70,-4.5,33.2,32];

function bs(l, t) {
    if (l.length === 1) {
        if (l[0] === t) return true;
        return false;
    } 
    const mid = Math.floor(l.length/2);
    if (l[mid] === t) return true;
    if (t < l[mid]) return bs(l.slice(0, mid), 1);
    return bs(l.slice(mid), 1);
}

// console.log(bs(a, 3))
// console.log(bs(a, 32))

function qs(list) {
    if (list.length <= 1) return list;
    const piv = list[0];
    const left = [];
    const right = [];
    for (let i = 1; i<list.length; i++) {
        if (list[i] < piv) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }
    return [...qs(left), piv, ...qs(right)];
}

// console.log(qs(a));