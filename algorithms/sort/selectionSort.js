// == Selection Sort ==
// Sorts an array by identifying the smallest number within the array and storing the value in a variable. Once a full iteration has been performed, the smallest value is pushed into a results array and also removed from the original list. This process continues until the original array is empty and the results array is sorted in the correct order.
// Runtime: O(n^2) / Quadratic

// const testArray = [9,10,4,2,8,1,3,5,7,6];

// // Stores the sorted array
// let newArray = [];

// function selectionSort(list) {
//     let min = list[0];
//     // Base case
//     if (list.length === 0) return newArray;
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] < min) min = list[i];
//     }
//     newArray.push(min);
//     const minIndex = list.indexOf(min);
//     list.splice(minIndex,1);
//     // Test log
//     console.log('Input List: ' + list);
//     console.log('Output List: ' + newArray);
//     return selectionSort(list);
// }

// // Method 2: Using reduce
// // function selectionSort(list, results=[]) {
// //     if (list.length === 0) return results;
// //     const min = list.reduce((a,b) => a < b ? a : b);
// //     results.push(min);
// //     const minIndex = list.indexOf(min);
// //     list.splice(minIndex, 1);
// //     return selectionSort(list, results);
// // }

// console.log(selectionSort(testArray));

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
    add(node) {
        const newNode = new Node(node);
        let current = this.head;
        if (this.head === null) {
            this.head = newNode;
        } else {
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode;
        }
        this.length++;
    }
    print() {
        let str = '';
        let current = this.head;
        while (current !== null) {
            str += current.val + '/';
            current = current.next;
        }
        console.log(str);
    }
    remove(node) {
        let current = this.head;
        let prev;
        if (this.head.val === node) {
            this.head = current.next;
            this.length--;
            return;
        }
        while (current !== null) {
            if (current.val === node) {
                prev.next = current.next;
                this.length--;
                return;

            }
            prev = current;
            current = current.next;
        }
    }
    addAt(node, index) {
        const newNode = new Node(node);
        let current = this.head;
        let prev;
        let currentIndex = 0;
        if (index === 0) {
            this.head = newNode;
            newNode.next = current;
            this.length++;
            return;
        }
        while (currentIndex < index) {
            prev = current;
            current = current.next;
            currentIndex++;
        }
        prev.next = newNode;
        newNode.next = current;
        this.length++;
    }
}

const list = new LinkedList();
list.add('A');
list.print();
list.add('B');
list.print();
list.add('C');
list.print();
list.add('D');
list.print();
list.add('E');
list.print();
list.remove('A')
list.print();
list.addAt('Z', 0)
list.print();

