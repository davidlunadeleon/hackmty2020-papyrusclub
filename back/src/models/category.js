const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const categorySchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    books: [{ type: mongoose.Types.ObjectId, ref: 'Book', required: true}],
	votes: [{ type: mongoose.Types.ObjectId }]
});

categorySchema.plugin(uniqueValidator);

categorySchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;