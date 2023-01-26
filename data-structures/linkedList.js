// Node class for creating a new node for a given value. 
class Node {
    constructor(val) {
        this.val = val; // the value of the node
        this.next = null; // reference to the next node is null by default
    }
}

// Linked List class for creating the actual list and its functionality
class LinkedList {
    constructor() {
        this.head = null
    }

    // Adds a node to the linked list
    append(val){
        // If the head is null then add an initial node
        if (this.head === null) {
            this.head = new Node(val)
            return;
        }
        // If the head is not null, sequentially iterate through the linked list, and add the new node once current.next (the next node) is null.
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(val);
    }

    // Checks if a value is contained within the linked list
    contains(val){
        let current = this.head;
        while (current !== null) {
            if (current.val === val) {
                console.log('True');
                return;
            }
            current = current.next;
        }
        console.log('False');
    }

    // Prints the linked list
    print() {
        let str = '';
        let current = this.head;
        while (current !== null) {
            str += current.val + ' -> ';
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
