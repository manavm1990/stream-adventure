const { spawn } = require("child_process");
const duplexer = require("duplexer3");

module.exports =
  /**
   * The first parameter is the command to run.
   * The second parameter is an array containing a list of options.
   * https://flaviocopes.com/how-to-spawn-child-process-node/
   */
  (cmd, args) => {
    // spawn process and return a single stream
    const processStream = spawn(cmd, args);

    // @returns a single duplex stream joining together the stdin and stdout
    return duplexer(processStream.stdin, processStream.stdout);
  };
