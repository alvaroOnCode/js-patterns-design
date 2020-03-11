/**
 * Functions Returning Functions
 */

function interviewQuestion(job) {
  const _job = job ? job.toLowerCase() : '';

  if (_job === 'designer') {
    return function(name) {
      console.log(`Well, ${name}. Could you explain what UX design is, please?`);
    }
  } else if (_job === 'teacher') {
    return function(name) {
        console.log(`What subject do you teach, ${name}?`);
      }
  } else {
    return function(name) {
      console.log(`Hello, ${name}. What do you do for a living?`);
    }
  }
}

const dq = interviewQuestion('Designer');
dq('Jane');

/**
 * 😉 This is shorter.
 */
interviewQuestion('Teacher')('Megan');
interviewQuestion()('Anthony');
