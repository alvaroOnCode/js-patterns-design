/**
  * Constructor pattern with prototypes
  */

/**
  * ECMAScript 6
  */
class SomeClass {
  constructor(propOne, propTwo) {
    this.propertyOne = propOne;
    this.propertyTwo = propTwo;
  }

  someMethod() {
    // This is a method
  }
}

// Creating an instance
const instance = new SomeClass(3, 5);
console.log(instance);

/**
 * - Warning! -
 * Prototype methods are not visible in Node console. Use the browser console to check them.
 * In this case, there should be two methods: constructor and someMethod.
 */
