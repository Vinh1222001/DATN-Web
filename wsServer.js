// wsServer.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', (ws, req) => {
  console.log('New client connected');

  ws.on('message', message => {
    console.log('Received:', message.toString());

    // Gửi lại cho tất cả client khác
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.send('Connected to WebSocket server');
});
