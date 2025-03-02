const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Internal array to store stack elements
  }

  push(element) {
    this.items.push(element); // Add element to the end (top)
  }

  pop() {
    return this.items.pop(); // Remove and return the last element (top)
  }

  peek() {
    return this.items[this.items.length - 1]; // Return last element without removing it
  }
}

module.exports = {
  Stack,
};
