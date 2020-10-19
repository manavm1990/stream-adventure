const { createServer } = require("http");

const { Transform } = require("readable-stream");

const [_, __, port] = process.argv;

const transformer = new Transform({
  transform(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
  },
});

const server = createServer((req, res) => {
  switch (req.method) {
    case "POST":
      res.statusCode = 200;
      req.pipe(transformer).pipe(res);
      break;
    default:
      res.statusCode = 400;
      res.end("POST only!");
  }
});

server.listen(port, () => {
  console.info("Server 🏃🏽‍♂️", port);
});
