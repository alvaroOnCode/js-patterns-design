/**
 * Mediator
 */

const emitter = (() => {
  const topics = {};
  const hOP = topics.hasOwnProperty;

  return {
    on: (topic, listener) => {
      if (!hOP.call(topics, topic)) {
        topics[topic] = [];
      }

      topics[topic].push(listener);
    },

    emit: (topic, info) => {
      if (!hOP.call(topics, topic)) {
        return;
      }

      topics[topic].forEach(item => {
        item(info !== undefined ? info : {});
      });
    }
  }
})();

/**
 * Use case
 */

// Subscriptor
emitter.on('power', num => console.log('power:', num * num));

// Dispatcher
emitter.emit('power', 3);
