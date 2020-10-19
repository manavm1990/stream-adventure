const { Transform } = require("readable-stream");
const trumpet = require("trumpet");

const trumpetStream = trumpet();
const loudStream = trumpetStream.select(".loud").createStream();

const transformer = new Transform({
  transform(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
  },
});

loudStream.pipe(transformer).pipe(loudStream);

process.stdin.pipe(trumpetStream).pipe(process.stdout);
