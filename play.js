
const { stdin } = require('process');
const {connect} = require('./client.js')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  console.log('key:',key)
  if (key === '\u0003'){
    process.exit()
  }
};

console.log('connecting....')
connect();
setupInput();

module.exports = {
  setupInput
}