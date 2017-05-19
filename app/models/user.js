var mongoose = require('mongoose');
var Schema = mongoose.Schema

//Esquema del modelo usuario
//Aqui se guarda el tipo de datos que se van a utilizar

var userSchema = new Schema({
  email: String, //email, su tipo de dato string
  password: String
});

var User = mongoose.model('user', userSchema);

module.exports = User;
