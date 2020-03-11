/**
 * Functions as Parameters
 */

const years = [1789, 1914, 1936, 1939, 2001];

function calc(array, fn) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]));
  }

  return result;
}

function yearsFromNow(year) {
  const y = new Date().getFullYear();
  return (y - year);
}

function isCentenary(year) {
  return (year >= 100);
}

const ages = calc(years, yearsFromNow);
console.log(ages);

const centenaries = calc(ages, isCentenary);
console.log(centenaries);
