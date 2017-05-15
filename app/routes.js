var User = require('./models/user');
var Location = require('./models/location');

module.exports = function(app) {

  app.get('/login', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

  app.get('/signup', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

  app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

  app.get('/dashboard', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

  app.post('/login', function (req, res) {
    console.log("POST(/login): email -> " + req.body.email);
    console.log("POST(/login): password -> " + req.body.password);

    User.findOne({email : req.body.email}, function(err, user){
      if (err) return console.log(err);
      res.setHeader('Content-Type', 'application/json');
      if(typeof user !== "undefined" && !!user){
        res.send(JSON.stringify({ value : req.body.password === user.password }));
      } else {
        res.send(JSON.stringify({ value : false }));
      }
    });
  });

  app.post('/signup', function (req, res) {
    console.log("POST(/signup): email -> " + req.body.email);
    console.log("POST(/signup): password -> " + req.body.password0);

    var xuser = new User({
      email: req.body.email,
      password: req.body.password0
    });

    console.log(xuser);

    xuser.save(function(err) {
      if (err)
        console.log(err);

      console.log('User saved successfully!');
    });

    res.json({status: 200});
  });

  app.get('/locations', function(req, res) {
    Location.find({}, function (err, locations) {
      console.log(locations);

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(locations));
    });
  });

}
