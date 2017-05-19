//Express maneja las rutas o direcciones del servidor.
//Por ejemplo, la ruta 'facebook.com/id=123123?' es manejada por express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

//Conexion con la base de datos de mongodb.
var dbconfig = require('./config/db');
mongoose.connect(dbconfig.url);

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error', err);
});

db.once('open', function () {
  console.log('connected.');
});

//Puerto en el cual el servidor esta escuchando
var port = process.env.PORT || 8080;

//Se utiliza para que el servidor pueda parsear data de tipo json
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

//el servidor empieza a escuchar los request que se realizan en el puerto 8080
app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;
