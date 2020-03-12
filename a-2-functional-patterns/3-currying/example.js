/**
 * Currying
 */

function foo(a) {
  if (a === 'a') {
    return (b) => {
      if (b === 'b') {
        return (c) => {
          console.log(`${c} < ${b} < ${a}`);
        };
      } else if (b === 'B') {
        return (c) => {
          console.log(`${c} < ${b}! < ${a}`);
        };
      } else {
        return () => console.log('Your second param is wrong.');
      }
    }
  }

  return () => () => console.error('Your first param is wrong.');
}

// OK
foo('a')('b')('c');
foo('a')('B')('c');

// KO
foo('x')('B')('c');
foo('a')('y')('c');

/**
 * 😘 With love to WarmiWeb.
 */
