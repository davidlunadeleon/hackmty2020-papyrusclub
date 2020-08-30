const Chat = require('../models/chat');
const User = require('../models/user');

const chatRouter = require('express').Router();

chatRouter.route('/user/:id').get(async (req, res) => {
	const chats = await Chat.find({ usuarios: req.params.id });
	res.json(chats);
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
