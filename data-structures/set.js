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

// qsort

const ar = [1,90,-0.5,32];

const bs = (list, t) => {
    if (list.length === 1) {
        if (list[0] === t) return true;
        return false;
    } else {
        const mid = Math.floor(list.length/2);
        if (list[mid] === t) return true;
        if (t < list[mid]) return bs(list.slice(0, mid), t);
        return bs(list.slice(mid), t);
    }
}

// console.log(bs(ar, 3))
// console.log(bs(ar, 38))


function selSort(list, res=[]) {
    if (!list) return res;
    const min = Math.min(...list);
    const minIndex = list.indexOf(min);
    res.push(min);
    list.splice(minIndex, 1);
    return selSort(list, res);
}

// console.log(selSort(ar));

const qs = (list) => {
    if (list.length <= 1) return list;
    const piv = list[0];
    const left = [];
    const right = [];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < piv) left.push(list[i]);
        if (list[i] > piv) right.push(list[i]);
    }
    return [...qs(left), piv, ...qs(right)];
}

console.log(qs(ar));