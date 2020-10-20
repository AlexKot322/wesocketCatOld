function sendMessage(name, value) {
    socket.emit('send_message', name, value)
}

socket.on('send_all_message', function(name, value) {
    message = name + ': ' + value; 
    messages.innerHTML += '<div>' + message + '</div>'
})