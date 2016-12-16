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


app.get("/public/css/:filename", function(req, res) {
    res.sendFile( __dirname + '/public/css/' + req.params.filename);
});


var error = require("./public/db/error");

app.get('*', function(req, res) {
    res.status(404).sendFile( __dirname + "/public/html/" + "404.html" );
    console.log(req.params);
    var problemURL = req.params[0].substring(1);
    if (problemURL == '404') {
        console.log('lost');
    } else {
        console.log(problemURL);
        error.log(problemURL);
    }
});

var server = app.listen(process.env.PORT, function () {

  var host = process.env.IP
  var port = process.env.PORT

  console.log("Server is running...")
  console.log("https://www.nodejs-test-lincolnanders.c9users.io");

})