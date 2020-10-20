const duplexer = require("duplexer3");
const { finished, Transform } = require("stream");

const countryCount = {};

const transform = new Transform({
  objectMode: true,
  transform({ country }, _, next) {
    countryCount[country] = (countryCount[country] || 0) + 1;
    this.push(countryCount);
    next();
  },
});

module.exports = (counter) => {
  const duplex = duplexer(
    { objectMode: true },

    // 'Merge' 'writer' and 'reader' into...duplexer 🦄.
    transform,
    counter
  );

  // Keep on...'transforming!' 🚚
  transform.resume();

  finished(transform, () => {
    counter.setCounts(countryCount);
  });

  return duplex;
};
