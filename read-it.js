const { Readable } = require("stream");

const [_, __, contents] = process.argv;

/**
 * ...simplified constructor approach
 * https://nodejs.org/api/stream.html#stream_implementing_a_readable_stream
 */
const customReadable = new Readable({ read() {} });

customReadable.push(contents);
customReadable.pipe(process.stdout);
