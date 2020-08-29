require('dotenv').config();

let PORT = process.env.PORT || 3001;
let MONGOURI = process.env.MONGOURI;

module.exports = {
	PORT,
	MONGOURI
};
