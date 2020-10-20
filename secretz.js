const crypto = require("crypto");

const concat = require("concat-stream");
const tar = require("tar");

const [_, __, algo, key, iv] = process.argv;

const tarParser = new tar.Parse();

tarParser.on(
  "entry",
  // Event wistener receives a readable stream of file contents
  (entryStream) => {
    // If this is not a file, nothing to see here, move along!
    if (entryStream.type !== "File") {
      entryStream.resume();
    }

    // for each file, create an encoded hash
    const hashStream = crypto.createHash("md5", { encoding: "hex" });

    entryStream.pipe(hashStream).pipe(
      concat((buffer) => {
        console.info(`${fileContents} ${entryStream.path}`);
      })
    );

    entryStream.resume();
  }
);

/**
 * Decrypt file.
 * Unzip it.
 */
process.stdin.pipe(crypto.createDecipheriv(algo, key, iv)).pipe(tarParser);
