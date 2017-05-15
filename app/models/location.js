var mongoose = require('mongoose');
var Schema = mongoose.Schema

var locationSchema = new Schema({
  latitude: Number,
  longitude: Number,
  name: String,
  info: String,
  stars: Number,
  priceperhour: Number
});

var Location = mongoose.model('location', locationSchema);

module.exports = Location;
