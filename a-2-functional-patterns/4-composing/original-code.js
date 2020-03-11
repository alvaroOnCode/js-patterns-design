/**
 * Compositing: Original code
 */

const users = [
  {
    age: 30,
    firstName: 'Álvaro',
    lastName: 'Saavedra'
  },
  {
    age: 26,
    firstName: 'Marina',
    lastName: 'Suárez',
  },
  {
    age: 11,
    firstName: 'Claudia',
    lastName: 'Baeza'
  },
  {
    age: 9,
    firstName: 'Sofía',
    lastName: 'Baeza'
  }
];

const getFirstChild = data => {
  const children = data.filter(user => user.age < 2);
  const firstChild = children[0];
  const child = {
    fullName: `${firstChild.firstName} ${firstChild.lastName}`,
    age: firstChild.age
  };

  return `${child.fullName} is ${firstChild.age} year(s) old.`;
};