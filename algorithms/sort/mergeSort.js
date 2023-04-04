// == Merge Sort ==
// Sorts an array by splitting the array into subarrays of size 1 (one element/item per array). Then, adjacent arrays are sorted and merged. This continues until a single array exists with sorted values.
// Runtime: O(n(log(n))) / Quasilinear

// const testArray = [9,4,8,3,1,100,2,5,7,6,9,4,8,3,1,10,2,5,7,6,-200];

// // Splits arrays in two
// function mergeSort(list) {
//     // Base Case
//     if (list.length <= 1) return list;
//     const midPoint = Math.floor(list.length/2);
//     const left = list.slice(0,midPoint);
//     const right = list.slice(midPoint);
//     return merge(mergeSort(left), mergeSort(right));
// }

// // Merges arrays together
// function merge(left, right) {
//     let resultsArray = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             resultsArray.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             resultsArray.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     return resultsArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// console.log(mergeSort(testArray)); 


// linked list
// graph

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    print() {
        let str = '';
        let current = this.head;
        while (current !== null) {
            str += current.val + '>';
            current = current.next;
        }
        console.log(str);
    }
    add(node) {
        const newNode = new Node(node);
        let current = this.head;
        if (this.head === null) {
            this.head = newNode;
        } else {
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;

    }
    remove(node) {
        let current = this.head;
        let prev;
        if (this.head.val === node) {
            this.head = current.next;
            this.length--;
            return;
        }
        while (current.val !== node) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
        this.length--;
    }
    addAt(node, index) {
        const newNode = new Node(node);
        let current = this.head;
        let prev;
        let currentIndex = 0;
        if (index === 0) {
            this.head = newNode;
            newNode.next = current;
        } else {
            while (currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            prev.next = newNode;
            newNode.next = current;
        }
        this.length++;
    }
    delAll() {
        this.length = 0;
        this.head = null;
    }
}

const list = new LinkedList();
list.add('1');
list.print();
list.add('2');
list.print();
list.add('3');
list.print();
list.remove('3')
list.print();
list.addAt('4', 0);
list.print();
list.delAll();
list.print();