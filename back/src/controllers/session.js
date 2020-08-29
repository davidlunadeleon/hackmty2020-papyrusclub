const User = require('../models/user');

const sessionRouter = require('express').Router();
const bcrypt = require('bcrypt');

sessionRouter.route('/register').post(async (req, res) => {
	const body = req.body;

	if (!('password' in body)) {
		return res.status(400).json({ error: 'Password missing.' });
	} else if (body.password.length < 3) {
		return res.status(400).json({ error: 'Password length too short.' });
	}

	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(body.password, saltRounds);

	const user = new User({
		usuario: body.username,
		nombre: body.name,
		contrasena: passwordHash,
		tipo_de_cuenta: 'Usuario',
		correo: body.email
	});

	const savedUser = await user.save();
	res.json(savedUser);
});

sessionRouter.route('/login').post(async (req, res) => {
	const body = req.body;

	const user = await User.findOne({ usuario: body.username });
	const passwordCorrect =
		user === null || !('password' in body)
			? false
			: await bcrypt.compare(body.password, user.contrasena);

	if (!user || !passwordCorrect) {
		return res.status(401).json({ error: 'Invalid username or password.' });
	}

	req.session.userid = user._id;
	req.session.username = user.usuario;

	res.send('Session set');
});

sessionRouter.route('/logout').post(async (req, res) => {
	req.session.destroy();
	res.send('Session has ended');
});

sessionRouter.route('/').get((req, res) => {
	res.json({ ok: req.session.username });
});

module.exports = sessionRouter;
