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

const arr = [10, 1, -3, 30, 0.4, -9.4, 121];



function quickSort(list) {
    if (list.length === 0) return list;
    const pivot = list[0];
    const left = [];
    const right = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > pivot) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));