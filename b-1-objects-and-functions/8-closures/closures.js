/**
 * Closures
 */

function retirement(retirementAge) {
  const s = ' year(s) left until retirement.';
  
  return function(yearOfBirth) {
    const age = new Date().getFullYear() - yearOfBirth;
    return ((retirementAge - age) + s);
  }
}

// USA
console.log(retirement(66)(1989));
