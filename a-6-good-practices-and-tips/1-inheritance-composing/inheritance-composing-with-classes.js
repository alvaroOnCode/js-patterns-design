/**
 * Inheritance Composing
 */

const methods = require('./methods');

class Person {
  constructor() {
    this.name = 'Álvaro';
  }

  greet() {
    methods.greet(this.name);
  }

  breath() {
    methods.breath(this.name);
  }
}

class Nexus {
  constructor() {
    this.name = 'Deckard';
  }

  greet() {
    methods.greet(this.name);
  }
}

/**
 * - Warning! -
 * Classes (Person and Nexus) have custom methods now.
 */

 const p = new Person();
 p.breath();
 p.greet();

 const n = new Nexus();
 n.greet();
 