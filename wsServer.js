// wsServer.js
const { networkInterfaces } = require('os');
const WebSocket = require('ws');

const SERVER_IP = '192.168.2.190';
const SERVER_PORT = 8081;

console.log(networkInterfaces());

const wss = new WebSocket.Server({ port: SERVER_PORT });

console.log(`Web Socket is running on ws://${SERVER_IP}:${SERVER_PORT}/`);

wss.on('connection', (ws, req) => {
  console.log('New client connected');

  ws.on('message', message => {
    console.log('Received:', message.toString());

    // Gửi lại cho tất cả client khác
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        console.log(message);
        client.send(message.toString());
      }
    });
  });

  // ws.send('Connected to WebSocket server');
});
