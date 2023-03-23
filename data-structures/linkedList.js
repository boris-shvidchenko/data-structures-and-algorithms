// // Node class for creating a new node for a given value. 
// class Node {
//     constructor(val) {
//         this.val = val; // the value of the node
//         this.next = null; // reference to the next node is null by default
//     }
// }

// // Linked List class for creating the actual list and its functionality
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }

//     // Adds a node to the linked list
//     append(val){
//         // If the head is null then add an initial node
//         if (this.head === null) {
//             this.head = new Node(val);
//             this.length++;
//             return;
//         }
//         // If the head is not null, sequentially iterate through the linked list, and add the new node once current.next (the next node) is null.
//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next;
//         }
//         current.next = new Node(val);
//         this.length++;
//     }

//     // Adds a node, at a given index, to the linked list
//     appendAt(index, val) {
//         // Create a new node
//         const node = new Node(val);
//         let current = this.head;
//         let previous;
//         let currentIndex = 0;
//         // Return false if provided index is out of range
//         if (index > this.length) {
//             return false;
//         }
//         if (index === 0) {
//             node.next = current;
//             this.head = node;
//         } else {
//             while (currentIndex < index) {
//                 currentIndex++;
//                 previous = current;
//                 current = current.next;
//             }
//             node.next = current;
//             previous.next = node;
//         }
//         this.length++;
//     }

//     // Deletes a given value from the linked list
//     remove(val) {
//         let current = this.head;
//         let previous;
//         if (current.val === val) {
//             this.head = current.next;
//         } else {
//             while (current.val !== val) {
//                 previous = current;
//                 current = current.next;
//             }
//             previous.next = current.next;
//         }
//         this.length--;
//     }

//     // Checks if a value is contained within the linked list
//     contains(val){
//         let current = this.head;
//         while (current !== null) {
//             if (current.val === val) {
//                 console.log('True');
//                 return;
//             }
//             current = current.next;
//         }
//         console.log('False');
//     }

//     // Prints the linked list
//     print() {
//         let str = '';
//         let current = this.head;
//         while (current !== null) {
//             str += current.val + ' -> ';
//             current = current.next;
//         }
//         console.log(str);
//     }
// }

// Test
// const list = new LinkedList();
// list.append('a');
// list.append('b');
// list.append('c');
// // a -> b -> c -> etc.
// list.contains('a'); // true
// list.contains('z'); // false
// list.print();
// list.remove('b'); // a -> c -> etc.
// list.appendAt(1,'z');
// list.print();
// list.contains('z'); // true


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(node) {
        const newNode = new Node(node);
        if (this.head === null) {
            this.head = newNode;
            this.length++;
            return;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            this.length++;
        }
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
            this.length++;
            return;
        } else {
            while (currentIndex < index) {
                prev = current;
                current = current.next;
                currentIndex++;
            }
            prev.next = newNode; //here
            newNode.next = current;
            this.length++;
        }
    }
    delAll() {
        this.head = null;
        this.length = 0;
    }
    print() {
        let str = '';
        let current = this.head;
        while (current !== null) {
            str += current.val + ' > ';
            current = current.next;
        }
        console.log(str);
    }
}

const newList = new List();
newList.add('A');
newList.print();
newList.add('B');
newList.print();
newList.add('C');
newList.print();
newList.addAt('F', 1);
newList.print();
newList.remove('A');
newList.print();
newList.remove('C');
newList.print();
newList.delAll();
newList.print();