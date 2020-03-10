/**
 * Constructor pattern
 */

 /**
 * ECMAScript 5
 */
function SomeClass() {
  this.property = 0;
  this.method = function () {
    // This is a method
  };
}

// Creating an instance
const instanceOne = new SomeClass();
console.log(instanceOne);

 /**
 * ECMAScript 6
 */
class AnotherClass {
  constructor(prop) {
    this.property = prop;
    this.method = () => {
      // This is a method
    };
  }
}

// Creating an instance
const instanceTwo = new AnotherClass(3);
console.log(instanceTwo);
