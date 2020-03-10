/**
 * Decorator
 */

class Macbook {
  price() {
    return 1000;
  }
}

const memory = mac => {
  const p = mac.price();
  mac.price = function() {
    return p + 100;
  }
};

const mb = new Macbook();

console.log('Before:', mb.price());

memory(mb);

console.log('After:', mb.price());
