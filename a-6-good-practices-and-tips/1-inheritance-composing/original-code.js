/**
 * Inheritance Composing: Original code
 */

class Person {
  constructor() {
    this.name = 'Álvaro';
  }

  greet() {
    console.log(`Hi, I'm ${this.name}!`);
  }

  breath() {
    setInterval(() => {
      console.log(`${this.name} is breathing...`);
    }, 1500);
  }
}

class Nexus extends Person {
  constructor() {
    super();
  }

  // ...
}

/**
 * - Warning! -
 * Nexus extending from Person is okay because that is the way we get the name property.
 * But it does not make sense a Nexus (a robot) to breath.
 * Check inheritance-composing.js for a better solution.
 */