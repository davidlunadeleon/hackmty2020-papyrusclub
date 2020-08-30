const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const bookSchema = mongoose.Schema({
	url_api: { type: String, unique: true },
	questions: [{ type: mongoose.Types.ObjectId }]
});

bookSchema.plugin(uniqueValidator);

bookSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
