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
      }
    }
  }

  return () => () => console.error('You failed.');
}

// OK
foo('a')('b')('c');
foo('a')('B')('c');

// KO
foo('x')('B')('c');

/**
 * 😘 With love to WarmiWeb.
 */
