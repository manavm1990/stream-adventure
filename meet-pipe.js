const { createReadStream } = require("fs");

const [_, __, file] = process.argv;

createReadStream(file).pipe(process.stdout);
