const net = require('net');

// requiring net from library

// //establishes connection with game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '192.168.88.151',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8');

//   return conn;
// };

const x = function () {
  const conn = net.createConnection({
    host: '192.168.88.151',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  return conn;
};

module.exports = x;
