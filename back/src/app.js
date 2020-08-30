const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('express-async-errors');

const middleware = require('../utils/middleware');
const logger = require('../utils/logger');
const config = require('../utils/config');

const sessionRouter = require('./controllers/session');
const chatRouter = require('./controllers/chat');
const booksRouter = require('./controllers/books');

const app = express();

logger.info('Connecting to MongoDB');

mongoose
	.connect(config.MONGOURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => {
		logger.info('Connection successful!');
	})
	.catch((error) => {
		logger.error(
			'Error while establishing connection to MongoDB',
			error.message
		);
	});

app.use(cors());
app.use(morgan('common'));
app.use(express.json());
app.use(express.static('build'));
app.use(
	session({
		secret: config.SESSIONSECRET,
		store: new MongoStore({
			mongooseConnection: mongoose.connection
		})
	})
);

app.use('/api/session', sessionRouter);
app.use('/api/chat', chatRouter);

app.use('/', (req, res) => {
	const io = req.app.get('socketio');
	io.emit('message', 'Hola');
	res.sendStatus(200);
});
app.use('/api/session', booksRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
