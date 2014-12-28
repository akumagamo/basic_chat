module.exports = function(server){
	
	var io = require('socket.io')(server); 
	var msgs = [];
	
	io.on('connection', function(socket){
		socket.on('sendMessage', function(msg){
			msgs.push(msg);
			io.emit('newMessage', msg);
		});
		socket.on('getMessages', function(){
			socket.emit('messages', msgs);
		});
		
		socket.on('login', function(username){
			io.emit('userEnteredChat', username);
		});
		
		socket.on('logout', function(username){
			io.emit('userLeftChat', username);
		});
	});
	
	return server;
};