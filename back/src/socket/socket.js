const Chat = require('../models/chat');

const socketEvents = (io) => {
	io.of('/chat').on('connection', (socket) => {
		socket.on('join', (chatId) => {
			Chat.findById(chatId).then((room) => {
				if (room) {
					socket.join(chatId);
				}
			});
		});

		socket.on('newMessage', async (chatId, userId, message) => {
			const room = Chat.findById(chatId);
			if (room) {
				const savedMessage = {
					usuario: userId,
					contenido: message,
					fecha: new Date()
				};
				await Chat.findByIdAndUpdate(chatId, {
					$push: {
						mensajes: savedMessage
					}
				});
				socket.to(chatId).emit('message', JSON.stringify(message));
			}
		});
	});
};

const init = (app) => {
	const http = require('http').createServer(app);
	const io = require('socket.io')(http);

	app.set('socketio', io);
	socketEvents(io);

	return http;
};

module.exports = init;
