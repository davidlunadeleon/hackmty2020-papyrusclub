require('dotenv').config();

let PORT = process.env.PORT || 3001;
let MONGOURI = process.env.MONGOURI;
let SESSIONSECRET = process.env.SESSIONSECRET;

module.exports = {
	PORT,
	MONGOURI,
	SESSIONSECRET
};
