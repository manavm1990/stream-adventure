const { Writable } = require("stream");

const split2 = require("split2");

const writable = new Writable({
  write(line, _, next) {
    console.log(line.toString().toLowerCase());
    next();
  },
});

process.stdin.pipe(split2()).pipe(writable);
