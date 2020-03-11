/**
 * Bind, Call and Apply
 */

const jane = {
  name: 'Jane',
  age: 51,
  job: 'Teacher',

  presentation: function(style, timeOfDay) {
    switch(style) {
      case 'formal':
        console.log(`Good ${timeOfDay} to everyone. I am ${this.name} and I am ${this.age} year(s) old. I work as ${this.job.toLowerCase()}.`);
        break;

      case 'friendly':
        console.log(`Hi, everybody! I'm ${this.name} and I'm ${this.age} year(s) old. I work as ${this.job.toLowerCase()}. Have a nice ${timeOfDay}!`);
        break;

      default: console.log(`Hello, World!`);
    }
  }
};

jane.presentation('formal', 'night');

/**
 * Use case
 */

const emily = {
  name: 'Emily',
  age: 35,
  job: 'Designer'
};

// Apply
//jane.presentation.apply(emily, ['friendly', 'afternoon']);

// Call
jane.presentation.call(emily, 'friendly', 'afternoon');

// Bind
jane.presentation.bind(jane, 'formal')('morning');
jane.presentation.bind(jane, 'friendly')('afternoon');
jane.presentation.bind(emily, 'friendly')('night');

/**
 * - Warning! -
 * Currying is applied here because 'presentation' method requires
 * two params but using 'bind' splits functionality in two steps.
 */

