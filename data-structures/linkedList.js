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
    appendAt(index, node) {
        const newNode = new Node(node);
        let cur = this.head;
        let curIndex = 0;
        let prev;
        if (index === 0) {
            this.head = newNode;
            newNode.next = cur;
        } else {
            while (curIndex < index) {
                prev = cur;
                cur = cur.next;
                curIndex++;
            }
            prev.next = newNode;
            newNode.next = cur;
        }
        this.length++;
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
    print() {
        let cur = this.head;
        let str = '';
        while (cur !== null) {
            str += cur.val + '>';
            cur = cur.next;
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
// list.contains('a'); // true
// list.contains('z'); // false
list.print();
list.remove('a'); // a -> c -> etc.
list.appendAt(0,'z');
list.print();
// list.contains('z'); // true



