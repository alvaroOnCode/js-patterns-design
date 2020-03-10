/**
 * Responsibility Chain
 */

class Add {
  constructor(v = 0) {
    this.val = v;
  }

  add(v) {
    this.val += v;
    return this;
  }
}

/**
 * Use case
 */

const f = new Add(1);
const value = f
  .add(3)
  .add(5)
  .add(2)
  .val;

console.log('value:', value);
