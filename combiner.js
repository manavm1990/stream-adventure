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
  pipeline(split2(), transform, gzip, (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
    } else {
      console.log("Pipeline succeeded.");
    }
  });
