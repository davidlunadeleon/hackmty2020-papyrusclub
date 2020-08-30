const Chat = require('../models/chat');
const User = require('../models/user');

const chatRouter = require('express').Router();

chatRouter.route('/user/:id').get(async (req, res) => {
	const chats = await Chat.find({ usuarios: req.params.id });
	res.json(chats);
});

chatRouter.route('/:id').post(async (req, res) => {
	const body = req.body;
	const chat = await Chat.findById(req.params.id);
	if (!body.userId || !body.message) {
		return res.status(400).json({ error: 'Information missing.' });
	} else if (!chat) {
		return res.status(404).json({ error: 'Chat not found.' });
	} else if (
		!chat.usuarios.find((u) => u.toString() === body.userId.toString())
	) {
		return res.sendStatus(401);
	}

	await Chat.findByIdAndUpdate(req.params.id, {
		$push: {
			mensajes: {
				usuario: body.userId,
				contenido: body.message,
				fecha: new Date()
			}
		}
	});
	res.sendStatus(201);
});

chatRouter.route('/').post(async (req, res) => {
	const body = req.body;
	const userIds = await Promise.all(
		body.users.map(async (u) => await User.findOne({ usuario: u }))
	);

	const chat = new Chat({
		usuarios: userIds
	});

	const savedChat = await chat.save();
	res.json(savedChat);
});

module.exports = chatRouter;
