const logger = require('./logger');

const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: 'Uknown endpoint.' });
};

const errorHandler = (error, req, res, next) => {
	logger.error(error.message);
	if (error.name === 'CastError') {
		return res.status(400).send({ error: 'Malformated id' });
	} else if (error.name === 'ValidationError') {
		return res.status(400).json({ error: error.message });
	}
	next(error);
};

const tokenExtractor = (req, res, next) => {
	const auth = req.get('authorization');
	if (auth && auth.toLowerCase().startsWith('bearer ')) {
		req.token = aut.substring(7);
	} else {
		req.token = null;
	}
	next();
};

module.exports = {
	unknownEndpoint,
	errorHandler,
	tokenExtractor
};
