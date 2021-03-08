const EventEmmiter = require('events');

class MyEmitter extends EventEmmiter {}

const myEmitter = new MyEmitter();

myEmitter.on('call', () => { console.log('Event fired!'); })

myEmitter.emit('call');
myEmitter.emit('call');
myEmitter.emit('call');
