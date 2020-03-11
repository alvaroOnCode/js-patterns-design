/**
 * Decorator
 */

class Macbook {
  constructor() {
    this.price = 1000;
    this.screen = 11.6;
  }
}

const mb = new Macbook();

mb.addMemory = function() {
  /**
   * - Warning! -
   * Mind not to use arrow functions in here.
   * Arrow functions do not have this context.
   */

  this.price += 100;
};

console.log('Before:', mb);

mb.addMemory();

console.log('After:', mb);
