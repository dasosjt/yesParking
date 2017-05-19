var mongoose = require('mongoose');
var Schema = mongoose.Schema

//Esquema del modelo location (parqueos)
//Aqui se guarda el tipo de datos que se van a utilizar

var locationSchema = new Schema({
  latitude: Number, //latitue, el tipo de dato es numero
  longitude: Number,
  name: String,
  info: String,
  stars: Number,
  priceperhour: Number
});

var Location = mongoose.model('location', locationSchema);

module.exports = Location;
