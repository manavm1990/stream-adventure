const split2 = require("split2");
const { pipeline } = require("stream");
const { Transform } = require("stream");
const { createGzip } = require("zlib");

const gzip = createGzip();

const categorizedBooks = {};

const transform = new Transform({
  writableObjectMode: true,
  transform(data, _, next) {
    const json = JSON.parse(data);
    if (json.type === "genre") {
      categorizedBooks.name = json.name;
    } else if (categorizedBooks.books) {
      categorizedBooks.books.push(json.name);
    } else {
      categorizedBooks.books = [];
    }
    next();
  },
});

module.exports = () =>
  /**
   * Break up a stream and reassemble it so that each line is a chunk.
   * https://www.npmjs.com/package/split2
   * ⬇️
   * transform - 'categorize books by genre' 👆🏽
   * ⬇️
   * zip 🤐
   *
   * 'cb' when 'pipeline' is dun
   */
  pipeline(split2(), transform, gzip, (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.info("Pipeline succeeded.");
    }
  });
