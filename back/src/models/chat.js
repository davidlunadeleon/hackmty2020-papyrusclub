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

chatSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		delete returnedObject.contrasena;
	}
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
