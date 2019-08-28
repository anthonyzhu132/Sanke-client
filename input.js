let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    setInterval(() => connection.write("Move: up"), 100);
  }
  if (key === 'a') {
    setInterval(() => connection.write("Move: left"), 100);
  }
  if (key === 's') {
    setInterval(() => connection.write("Move: down"), 100);
  }
  if (key === 'd') {
    setInterval(() => connection.write("Move: right"), 100);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const x = {
  setupInput,
  handleUserInput,
};


module.exports = x;