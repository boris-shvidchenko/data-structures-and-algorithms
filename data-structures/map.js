// // Maps are similar to objects in that keys and values are stored as pairs, however maps allow any data type to be a key (num, array, objects). Objects usually describe a single entity whereas maps can store more complex 'collections' of data.

// let countries = new Map();
// countries.set('US', 'North America');
// countries.set('Canada', 'North America');
// countries.set('Thailand', 'Asia');
// console.log(countries); // Expects: {US => North America, Canada => North America, Thailand => Asia}

// // Iteration splits each pair into sub-array
// for (let country of countries) console.log(country[0] + ' > ' + country[1]);

// bi search
// graph bft list
// quick sort

const ar1 = [1,2,3,4,5,6,7];
const ar2 = [9,3,90,-309,9.3,3];

const biSearch = (list, t) => {
    if (list.length === 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(list.length / 2);
        if (list[mid] === t) return true;
        if (t < list[mid]) return biSearch(list.slice(0,mid), t);
        return biSearch(list.slice(mid), t); 
    }
}

// console.log(biSearch(ar1, 2));
// console.log(biSearch(ar1, 20));

function quickSort(list) {
    if (list.length <= 1) return list;
    const pivot = list[0];
    const left = [];
    const right = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }
    return [...quickSort(right), pivot, ...quickSort(left)];
}

console.log(quickSort(ar2));