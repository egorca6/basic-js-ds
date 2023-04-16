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
 *       npm run test ./test/stack.test
 */

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    // console.log("АУУ");
    return this.stack.pop();
  }
  // stack.pop(1);

  peek() {
    // if (this.stack)
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack,
};
