const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // First element
    this.tail = null; // Last element
  }

  getUnderlyingList() {
    return this.head; // Returns the entire linked list
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = this.tail = newNode; // First element
    } else {
      this.tail.next = newNode; // Attach new node at the end
      this.tail = newNode; // Update tail
    }
  }

  dequeue() {
    if (!this.head) return null; // Queue is empty

    const removedValue = this.head.value;
    this.head = this.head.next; // Move head to the next node

    if (!this.head) this.tail = null; // If the queue becomes empty

    return removedValue;
  }
}

module.exports = {
  Queue,
};
