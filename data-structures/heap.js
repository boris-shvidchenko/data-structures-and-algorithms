// // Common operations include push, pull, search, and peek. The below class turns the heap into a max heap.

// class Heap {

//     constructor() {
//         this.data = [];
//     }

//     // Helper functions

//     getParentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }

//     getLeftChildIndex(index) {
//         return index * 2 + 1;
//     }

//     getRightChildIndex(index) {
//         return index * 2 + 2;
//     }

//     swap(index1, index2) {
//         const temp = this.data[index1];
//         this.data[index1] = this.data[index2];
//         this.data[index2] = temp;
//     }

//     // Operations

//     // Pushes new data (key) into our array/heap.
//     push(key) {
//         this.data[this.data.length] = key;
//         this.heapifyUp();
//     }

//     // Moves our elements up so that they are in the correct heap order.
//     heapifyUp() {
//         let currentIndex = this.data.length - 1;
//         while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
//             this.swap(currentIndex, this.getParentIndex(currentIndex));
//             currentIndex = this.getParentIndex(currentIndex);
//         }
//     }

//     heapifyDown() {
//         let currentIndex = 0;
//         while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
//             let biggestChildIndex = this.getLeftChildIndex(currentIndex);
//             if (this.data[this.getRightChildIndex(currentIndex)] !== undefined && this.data[this.getRightChildIndex(currentIndex)] > this.data[this.getLeftChildIndex(currentIndex)]) {
//                 biggestChildIndex = this.getRightChildIndex(currentIndex);
//             }
//             if (this.data[currentIndex] < this.data[biggestChildIndex]) {
//                 this.swap(currentIndex, biggestChildIndex);
//                 currentIndex = biggestChildIndex;
//             } else {
//                 return;
//             }
//         }
//     }

//     // Remove the top element and replaces it with the last element of our array/heap.
//     pull() {
//         const maxValue = this.data[0];
//         this.data[0] = this.data[this.data.length - 1];
//         this.data.length--;
//         this.heapifyDown();
//         return maxValue;
//     }
// }

// const heap = new Heap();
// console.log(heap);
// heap.push(25);
// heap.push(5);
// heap.push(40);
// heap.push(70);
// heap.push(90);
// heap.push(44);

// console.log(heap.data.join(' > '));

// //        90
// //       /  \
// //     70    44
// //    /  \     \
// //   5    40    25

// let a = [];
// a.push(heap.pull());
// a.push(heap.pull());
// a.push(heap.pull());
// a.push(heap.pull());
// a.push(heap.pull());

// console.log('Top 5 items: ', a);
// console.log(heap.data.join(' > '));

// q sort
// btree

const ar = [2,6,-0.4,-40,32];

const fib = (v, memo={}) => {
    if (v <= 2) return 1;
    if (v in memo) return memo[v];
    memo[v] = fib(v-1, memo) + fib(v-2, memo);
    return memo[v];
}

// console.log(fib(10))
// console.log(fib(109))


function qs(list) {
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
    return [...qs(left), piv, ...qs(right)];
}

console.log(qs(ar));