/**
  * Constructor pattern with prototypes
  */

/**
  * Adding a new method to Object prototype
  */
Object.prototype.log = function() {
    /**
     * - Warning! -
     * Mind not to use arrow functions in here.
     * Arrow functions do not have this context.
     */

     console.log(this);
};

const x = { a: 3 };
x.log();

/**
  * Adding a new method to String prototype in case it does not exist
  */
if (!String.prototype.trim) {
  /**
   * - Warning! -
   * Old browsers do not have this method.
   */
  String.prototype.trim = function() {
    try {
      return this.replace(/^\s+|\s+$/g, "");
    } catch(error) {
      return this;
    }
  }
}

const y = "      Hello, World!      ".trim();
y.log();
