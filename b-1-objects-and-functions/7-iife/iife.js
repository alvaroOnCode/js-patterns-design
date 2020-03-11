/**
 * IIFE (Immediately Invoke Function Expression)
 */

/**
 * ☹️ Instead of doing this...
 */

function game() {
  const score = Math.random() * 10;
  console.log(score >= 5 ? 'You loose.' : 'You win!');
}
game();

/**
 * 😃 ... It is better to do this
 */
(function(goodLuck) {
  const score = Math.random() * 10;
  console.log(score >= goodLuck ? 'You loose.' : 'You win!');
})(5);
