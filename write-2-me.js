const { Writable } = require("stream");

const writable = new Writable({
  write(chunk, _, next) {
    console.log(`writing: ${chunk}`);
    next();
  },
});

process.stdin.pipe(writable);
