/**
 * Prototype pattern
 */

const dog = {
  race: 'CodeTerrier',
  bark: function() {
    /**
     * - Warning! -
     * Mind not to use arrow functions in here.
     * Arrow functions do not have this context.
     */

    console.log(`Guau!, I am a ${this.race}`);
  }
}

const coddy = Object.create(dog);
coddy.bark();

console.log(coddy);

/**
 * - Warning! -
 * Logging coddy returns an empty object,
 * but modifying properties and methods is allowed in this pattern.
 */

coddy.race = 'ScriptBull';
coddy.bark = function () {
  console.log(`GUAU!!!, I am a ${this.race}!`);
};
coddy.bark();
