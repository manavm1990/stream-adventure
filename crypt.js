const crypto = require("crypto");

const [_, __, passphrase, initializationValue] = process.argv;

const cryptoStream = crypto.createDecipheriv(
  "aes256",
  passphrase,
  initializationValue
);

process.stdin.pipe(cryptoStream).pipe(process.stdout);
