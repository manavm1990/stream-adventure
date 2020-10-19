const concat = require("concat-stream");

process.stdin.pipe(
  concat((buffer) => {
    const reversed = buffer.toString().split("").reverse().join("");
    process.stdout.write(reversed);
  })
);
