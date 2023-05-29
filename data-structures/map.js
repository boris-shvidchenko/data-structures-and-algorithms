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


const fib = (v) => {
    if (v <= 2) return 1;
    const table = new Array(v + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i < v; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[v];
}

console.log(fib(20));
console.log(fib(200));