/**
 * Bind, Call and Apply
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

function toLimit(limit, year) {
  return (year >= limit);
}

const ages = calc(years, yearsFromNow);
const isCentenary = calc(ages, toLimit.bind(this, 100));

console.log('ages:', ages);
console.log('isCentenary:', isCentenary);
