const { spawn } = require("child_process");
const duplexer = require("duplexer3");

module.exports = (cmd, args) => {
  // spawn process based on command and arguments and returns a single stream
  const { stdin, stdout } = spawn(cmd, args);

  return duplexer(stdin, stdout);
};
