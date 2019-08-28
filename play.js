const connect = require('./client');
const x = require('./input');

console.log('Connecting ...');
x.setupInput(connect());
module.exports = connect;