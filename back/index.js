const http = require('http');
const io = require('socket.io')(http);

const app = require('./src/app');
const config = require('./utils/config');
const logger = require('./utils/logger');

app.set('socketio', io);

const server = http.createServer(app);

server.listen(config.PORT, () => {
	logger.info(`Server running on ${config.PORT}`);
});
