const combine = require("stream-combiner2");
const split2 = require("split2");
const { Transform } = require("stream");

const transform = new Transform({
  writableObjectMode: true,
  transform(data, _, next) {
    console.log(data);
    next();
  },
});

module.exports = () => combine(split2(), transform);
