const { Writable } = require("stream");

const writable = new Writable({
  write(chunk, _, next) {
    console.info(chunk.toString().trimEnd().toUpperCase());
    next();
  },
});

process.stdin.pipe(writable);
