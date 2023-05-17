// == Quick Sort ==
// Sorts an array by identifying the first item as the 'pivot'. All items in the array, not including the pivot, are groups into two subarrays based on whether they are < or > the pivot. This is repeated until only multiple single item arrays (just like in a merge sort) are left. These items are sorted and merged to create a sorted array.
// Runtime: O(n^2) / Quadratic

// const testArray = [5, 4, 6, 1, 2, 3, 10, 9, 7, 8];

// function quickSort(list) {
//     //Base case
//     if (list.length <=1) return list;
//     const pivot = list[0];
//     let left = [];
//     let right = [];
//     for (let i = 1; i<list.length; i++) {
//         if (list[i] < pivot) {
//             left.push(list[i])
//         } else {
//             right.push(list[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort(testArray));

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(node) {
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
    appendAt(index, node) {
        const newNode = new Node(node);
        let current = this.head;
        let currentIndex = 0;
        let prev;
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
    contains(node) {
        let current = this.head;
        while (current !== null) {
            if (current.val === node) {
                return 'True';
            }
            current = current.next;
        }
        return 'False';
    }
    remove(node) {
        let current = this.head;
        let prev;
        if (this.head.val === node) {
            this.head = current.next;
        } else {
            while (current.val !== node) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
        this.length--;
    }
    print() {
        let current = this.head;
        let str = '';
        while (current !== null) {
            str += current.val + '>';
            current = current.next;
        }
        console.log(str);
    }
}

// Test
const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
// a -> b -> c -> etc.
list.contains('a'); // true
list.contains('z'); // false
list.print();
list.remove('a'); // a -> c -> etc.
list.appendAt(0,'z');
list.print();
list.contains('z'); // true