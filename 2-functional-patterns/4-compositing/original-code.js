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
    age: 35,
    firstName: 'Anthony',
    lastName: 'Caballero'
  },
  {
    age: 33,
    firstName: 'Rafa',
    lastName: 'Mariscal'
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