const { Writable } = require("stream");

const writable = new Writable({
  write(chunk, _, next) {
    console.info(`writing: ${chunk}`);
    next();
  },
});

process.stdin.pipe(writable);
