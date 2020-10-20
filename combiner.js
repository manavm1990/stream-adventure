const combine = require("stream-combiner2");
const split2 = require("split2");
const { Transform } = require("stream");

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
    console.log(JSON.stringify(categorizedBooks));
    next();
  },
});

module.exports = () => combine(split2(), transform);
