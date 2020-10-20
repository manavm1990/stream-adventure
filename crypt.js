const crypto = require("crypto");

const [_, __, passphrase, initializationValue] = process.argv;

process.stdin
  .pipe(
    crypto.createDecipheriv(
      // algorithm - key - initialization vector (https://g.co/kgs/TFu7Pz)
      "aes256",
      passphrase,
      initializationValue
    )
  )
  .pipe(process.stdout);
