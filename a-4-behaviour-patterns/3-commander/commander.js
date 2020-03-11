/**
 * Commander
 */

const commander = (() => {
  const o = {
    buy: article => {
      console.log(`Buying ${article}`);
    },
    sell: article => {
      console.log(`Selling ${article}`);
    }
  };

  return {
    run: (cmd, params) => {
      if (!o[cmd]) {
        console.log(`Command '${cmd}' does not exist.`);
        return;
      }

      o[cmd](params);
    }
  }
})();

/**
 * Use case
 */

commander.run('buy', 'Triumph');
commander.run('invented', 'Should launch an error!');
