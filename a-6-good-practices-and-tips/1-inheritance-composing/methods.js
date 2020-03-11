/**
 * Inheritance Composing: Methods
 */

module.exports = {
  greet: name => console.log(`Hi, I'm ${name}!`),

  breath: name => {
    setInterval(() => {
      console.log(`${name} is breathing...`);
    }, 1500);
  }
};
