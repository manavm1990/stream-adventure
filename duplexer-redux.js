const duplexer = require("duplexer3");
const { Transform } = require("stream");

const transformer = new Transform({
  writableObjectMode: true,
  transform: (data, _, next) => {
    console.log(data);
    next();
  },
});

module.exports = (counter) => {
  return duplexer({ objectMode: true }, transformer, counter);
};
