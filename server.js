var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/public/html/" + "index.html" );
})

/*
app.get('/testing', function(req, res){
  res.send('id: ' + req.query.id);
});
*/

app.get('/name', function(req, res){
    console.log('Accessing the secret section ...')
  res.send('name: ' + req.query.name);
});

app.get('/404', function(req, res) {
    res.status(404).sendFile( __dirname + "/public/html/" + "404.html" );
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
  console.log(host + port);

})