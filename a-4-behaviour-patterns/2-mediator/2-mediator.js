/**
 * Mediator: NodeJS
 */

const events = require('events');

const emitter = new events();

emitter.on('power', num => console.log('NodeJS > power:', num * num));

emitter.emit('power', 3);
