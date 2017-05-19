//Se utilizan estos esquemas de dato para guardar informacion en la base de datos
//Esto maneja el guardado y la correcta ingreso de la informacion
var User = require('./models/user');
var Location = require('./models/location');

module.exports = function(app) {

  //Angular toma posesion del app en esta ruta y el maneja las rutas desde angular
  app.get('/login', function(req, res) {
    //Se envia el archivo index, el cual posee el script para mantenerse en angular
    res.sendfile('./public/views/index.html');
  });
  //Angular toma posesion del app en esta ruta y el maneja las rutas desde angular
  app.get('/signup', function(req, res) {
    //Se envia el archivo index, el cual posee el script para mantenerse en angular
    res.sendfile('./public/views/index.html');
  });
  //Angular toma posesion del app en esta ruta y el maneja las rutas desde angular
  app.get('/', function(req, res) {
    //Se envia el archivo index, el cual posee el script para mantenerse en angular
    res.sendfile('./public/views/index.html');
  });
  //Angular toma posesion del app en esta ruta y el maneja las rutas desde angular
  app.get('/dashboard', function(req, res) {
    //Se envia el archivo index, el cual posee el script para mantenerse en angular
    res.sendfile('./public/views/index.html');
  });

  //Al realizarse un login, se debe postear al servidor los parametros del formulario
  app.post('/login', function (req, res) {
    //Se muestra en consola la informacion
    console.log("POST(/login): email -> " + req.body.email);
    console.log("POST(/login): password -> " + req.body.password);

    //Se busca el nombre del usuario en el servidor
    User.findOne({email : req.body.email}, function(err, user){
      if (err) return console.log(err);
      res.setHeader('Content-Type', 'application/json');
      //Verificamos que el resultado no sea indefinido
      if(typeof user !== "undefined" && !!user){
        //Enviamos si el password es el mismo en ambos lados, base de datos como lo que se ingresa
        //Se envia un json como resultado
        res.send(JSON.stringify({ value : req.body.password === user.password }));
      } else {
        //Si el usuario no se encontro
        //Entonces enviamos de una vez que el ingreso fue incorrect
        res.send(JSON.stringify({ value : false }));
      }
    });
  });

  //Al realizarse un signup, se debe postear al servidor los parametros del formulario para ser guardados
  // en la base de datos
  app.post('/signup', function (req, res) {
    //Se muestra en consola la informacion
    console.log("POST(/signup): email -> " + req.body.email);
    console.log("POST(/signup): password -> " + req.body.password0);

    //Se crea un usuario con el esquema USER antes mencionado
    var xuser = new User({
      //Se guardan los datos en el esquema
      email: req.body.email,
      password: req.body.password0
    });

    //Se muestra en consola si el formato es el correcto
    console.log(xuser);

    //Se guarda en la base datos la informacion
    xuser.save(function(err) {
      //Si existe un error, entonces se despliega en consola
      if (err)
        console.log(err);
      //Si no existe un error, entonces se despliega en consola que se guardo la data
      console.log('User saved successfully!');
    });

    //Se envia que el post fue correcto
    res.json({status: 200});
  });

  //Se busca toda las parqueos en esta ruta
  app.get('/locations', function(req, res) {
    //La base de datos busca todos los parques y los devuelve
    Location.find({}, function (err, locations) {
      //Se revisa la data de parqueos
      console.log(locations);

      //Se envia en formato json
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(locations));
    });
  });

}
