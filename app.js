var PORT = process.env.PORT || 5000;

const express = require('express');

const app = express();

app.use(express.static('publick'))

app.get('/', (req,res) => {
    res.sendFile('publick/index.html');
});

var server = app.listen(PORT, ()=> console.log('Server started'));

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
    console.log('Client connected')
    socket.on('send_message', function(name, value) {
        io.emit('send_all_message', name, value)
    })
})