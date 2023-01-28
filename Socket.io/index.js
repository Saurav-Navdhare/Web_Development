const express = require('express');
const app = express();
const server = require('http').Server(app);
const {Server} = require('socket.io');
const io = new Server(server);
require("dotenv").config();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg); // send to all
      });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

const Port = process.env.PORT || 3000;
server.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});


// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });