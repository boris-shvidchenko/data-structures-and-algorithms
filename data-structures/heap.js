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

// linked list

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
    append(node) {
        const newNode = new Node(node);
        let cur = this.head;
        if (this.head === null) {
            this.head = newNode;
        } else {
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.length++;
    }
    appendAt(node, index) {
        const newNode = new Node(node);
        let cur = this.head;
        let curIndex = 0;
        let prev;
        if (index === 0) {
            this.head = newNode;
            newNode.next = cur;
        } else {
            while (curIndex < index) {
                try {
                    prev = cur;
                    cur = cur?.next;
                    curIndex++;
                } catch (err) {
                    console.log(err);
                    return;
                }
            }
            prev.next = newNode;
            newNode.next = cur;
        }
        this.length++;
    }
    print() {
        let str = '';
        let cur = this.head;
        while (cur !== null) {
            str += cur.val + '>';
            cur = cur.next;
        }
        console.log(str);
    }
    remove(node) {
        let cur = this.head;
        let prev;
        if (this.head.val === node) {
            this.head = cur.next;
        } else {
            while (cur.val !== node) {
                prev = cur;
                cur = cur.next;
            }
            prev.next = cur.next;
        }
        this.length--;
    }

}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.print();
list.remove('a'); // a -> c -> etc.
list.appendAt('z', 4);
list.print();
