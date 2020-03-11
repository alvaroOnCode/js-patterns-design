/**
 * Creating Objects
 */

const personProto = {
  calculateAge: function() {
    const y = new Date().getFullYear();
    return (y - this.yearOfBirth);
  }
};

const jane = Object.create(personProto, {
  name: {
    value: 'Jane'
  },
  yearOfBirth: {
    value: 1969
  },
  job: {
    value: 'Designer'
  }
});

const john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';
