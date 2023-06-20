// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// // Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);


// quick sort
// graph
// btree dfsearch

const fib = (val) => {
    if (val <= 2) return 1;
    const table = new Array(val + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i < val; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[val];
}

// console.log(fib(10));
// console.log(fib(100));

const a = [1,3,4,2,-90,5.9,5,90,0,333,-99];

function quickSort(list) {
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
    return [...quickSort(left), piv, ...quickSort(right)];
}

console.log(quickSort(a));