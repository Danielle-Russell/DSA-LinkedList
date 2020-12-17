//1. Create a Linked List Class

const { SSL_OP_ALL } = require("constants");

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(item, nextItem){
        if (!this.head) {
            return null
        }
        if (this.head.value === nextItem) {
            this.insertFirst(item);
        }
        let currentNode = this.head;
        let prevNode = this.head;

        while ((currNode !== null) && (currNode.value !== nextItem)) {
            previousNode = currNode;
            currNode = currNode.next;
          }
      
          if (currNode === null) {
            console.log('Item not found');
            return;
          }
          let newNode = new _Node(item, previousNode.next);
          previousNode.next = newNode;
    }
    insertAfter(newItem, prevItem) {
        if (!this.head) {
          return null;
        }
        let currNode = this.head;
    
        while ((currNode !== null) && (currNode.value !== prevItem)) {
          currNode = currNode.next;
        }
        if (currNode === null) {
          console.log('Item not found');
          return;
        }
        if (prevItem.next === null) {
          this.insertLast(newItem);
          return;
        }
        let newNode = new _Node(newItem, currNode.next);
        currNode.next = newNode;
      }
      insertAt(newItem, pos) {
        let stepper = 0;
        let currNode = this.head;
        while (stepper !== pos) {
          stepper++;
          currNode = this.head.next;
        }
        if (currNode === null) {
          console.log('Item not found');
          return;
        }
        if (stepper === pos) {
          this.insertAfter(newItem, currNode.value);
          return;
        }
      }
}

//2. Create a singly linked list

function main () {
let SLL = new LinkedList()
SLL.insertFirst("Apollo")
SLL.insertLast("Boomer")
SSL.insertLast("Helo")
SSL.insertLast("Husker")
SSL.insertLast("Starbuck")
SSL.insertLast("Tauhida")
SSL.remove("Husker")
SSL.insertBefore("Athena", "Boomer")
SSL.insertAfter("Hotdog", "Helo")
SSL.insertAt("Kat", 3)
}

