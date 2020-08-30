const http = require('http');
const socketio = require('socket.io');

const app = require('./src/app');
const config = require('./utils/config');
const logger = require('./utils/logger');

const server = http.createServer(app);

const io = socketio(server);
app.set('socketio', io);

server.listen(config.PORT, () => {
	logger.info(`Server running on ${config.PORT}`);
});
