const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};


const x = {
  setupInput,
  handleUserInput,
};

module.exports = x;

