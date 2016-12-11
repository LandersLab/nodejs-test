var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/public/html/" + "index.html" );
})

var exphbs = require('express-handlebars'); 
app.engine('hbs', exphbs({defaultLayout: 'template', extname: '.hbs', layoutsDir:'public/templates/layouts'}));
app.set('view engine', 'hbs');

app.get('/u/:username', function (req, res) {
    res.render( __dirname + '/public/templates/' + 'user', {name: req.params.username});
});

app.get('/signup', function (req, res) {
    res.render( __dirname + '/public/templates/' + 'user', {signup: true, layout: 'user.hbs'});
});

app.get('/ajax', function(req, res) {
    res.sendFile( __dirname + "/public/html/" + "ajax.html" );
});

var db = require("./db");

app.get('*', function(req, res) {
    res.status(404).sendFile( __dirname + "/public/html/" + "404.html" );
    var problemURL = req.params[0].substring(1);
    db.add(problemURL);
});


/* 
* Ping pong the request, send in order of array at end "[cb0, cb1, cb2]", independent of actual order of appearance in file.
* For Later
var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])
*/



var server = app.listen(process.env.PORT, function () {

  var host = process.env.IP
  var port = process.env.PORT

  console.log("Server is running...")
  console.log("https://www.nodejs-test-lincolnanders.c9users.io");

})