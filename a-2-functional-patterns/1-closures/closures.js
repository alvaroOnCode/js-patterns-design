/**
 * Closures
 */

const x = 'Hi, there!';

const foo = () => {
  const y = 'Hello, World!';
  
  return () => {
    const z = 'Ey!';
    console.log(x, y, z);
  };
};

foo();

/**
 * - Warning! -
 * 1.- x is available for everyone.
 * 2.- y is not available for global scope.
 * 3.- z is not available for foo or global scope.
 */
