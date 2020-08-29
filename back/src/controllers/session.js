const sessionRouter = require('express').Router();

sessionRouter.route('/login').post(async (req, res) => {
	req.session.name = 'wenas';
	res.send({ ok: 'ok' });
});

sessionRouter.route('/').get((req, res) => {
	res.json({ ok: req.session.name });
});

module.exports = sessionRouter;
