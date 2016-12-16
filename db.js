var file = __dirname + "/public/db/" + "users.db";

var sqlite3 = require("sqlite3").verbose();


exports.add = function(user, pswd) {
  var db = new sqlite3.Database(file);
  db.serialize(function() {
    db.run("INSERT INTO users (usr, pswd) VALUES ('" + user + "','" + pswd + "')", function(err, row) {
      console.log(err);
    });
  });
  db.close();
};

exports.print = function() {
  var db = new sqlite3.Database(file);
  db.serialize(function() {
    db.each("SELECT * FROM users", function(err, row) {
      console.log(row.ID + ": " + row.USER + " - " + row.PASSWORD);
    });
  });
  db.close();
};