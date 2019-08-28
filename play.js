const connect = require('./client');
const x = require('./input');

console.log('Connecting ...');
connect();

x.setupInput();