const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
	usuarios: [{ type: mongoose.Types.ObjectId, required: true }],
	mensajes: [
		{
			usuario: { type: mongoose.Types.ObjectId, required: true },
			contenido: { type: String },
			fecha: { type: Date }
		}
	]
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
