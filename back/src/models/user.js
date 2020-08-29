const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usuario: {type: String, required: true, minlength: 3, unique: true},
    correo: {type: String, required: true, unique: true},
    contrasena: {type: String, required: true},
    nombre: {type: String, required: true},
    tipo_de_cuenta: {type: String, required: true},

})

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		delete returnedObject.passwordHash;
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;