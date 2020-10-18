const { Writable } = require("stream");

const writable = new Writable({
  write(chunk, _, next) {
    console.log(chunk.toString().trimEnd().toUpperCase());
    next();
  },
});

process.stdin.pipe(writable);
