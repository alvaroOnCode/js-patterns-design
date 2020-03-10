/**
 * Mixin
 */

// Mixing object
let mixin = {
  greet() {
    console.log(`Hi, ${this.name}!`);
  },
  sayBye() {
    console.log(`See ya, ${this.name}.`);
  }
};

// Class
class User {
  constructor(name) {
    this.name = name;
  }
}

/**
 * - Warning! -
 * User instances will still be User instances after this upgrading.
 */
Object.assign(User.prototype, mixin);

// Logging
const user = new User('Álvaro');
user.greet();
