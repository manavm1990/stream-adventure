const crypto = require("crypto");

const [_, __, passphrase, initializationValue] = process.argv;

process.stdin
  .pipe(crypto.createDecipheriv("aes256", passphrase, initializationValue))
  .pipe(process.stdout);
