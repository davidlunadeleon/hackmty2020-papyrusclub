const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('express-async-errors');

const middleware = require('../utils/middleware');
const logger = require('../utils/logger');
const config = require('../utils/config');

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
app.use(middleware.tokenExtractor);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
