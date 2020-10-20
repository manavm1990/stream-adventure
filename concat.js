const concat = require("concat-stream");

process.stdin.pipe(
  // Concatenate all stream data and run 🏃🏽‍♂️ cb
  concat((buffer) => {
    const reversed = buffer.toString().split("").reverse().join("");
    process.stdout.write(reversed);
  })
);
