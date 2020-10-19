const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8099");
const wsStream = WebSocket.createWebSocketStream(ws);

wsStream.write("hello\n");

wsStream.pipe(process.stdout);
