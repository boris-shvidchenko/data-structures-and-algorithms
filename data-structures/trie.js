// Tries (prefix tree) are very specific data structures that are based on binary trees. They are useful when it comes to searching for data. 
// Common operations include node insertion, checking if a node exists, and removal of nodes.

class Node {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    // Insert
    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let charToInsert = word[i];
            if (!(charToInsert in current.children)) {
                current.children[charToInsert] = new Node();
            }
            current = current.children[charToInsert];
        }
        current.isWord = true;
    }

    // Check if contains
    contains(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let charToFind = word[i];
            if (!(charToFind in current.children)) {
                return false;
            }
            current = current.children[charToFind];
        }
        return current.isWord;
    }

    // Check if word starts with prefix
    startsWithPrefix(prefix) {
        let current = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i];
            if (!(charToFind in current.children)) {
                return false;
            }
            current = current.children[charToFind];
        }
        return true;
    }
}