var file = __dirname + "/local.db";
console.log(file);
var path = require('path');
var dbPath = path.resolve(file);
var sqlite3 = require("sqlite3").verbose();

exports.log = function(fileName) {
  var db = new sqlite3.Database(dbPath);
  
  db.serialize(function() {
    db.run("INSERT INTO errors (path) VALUES ('" + fileName + "')", function(err, row) {
      if (err == null) {console.log("Error found at %s and it has been logged.", row.path)};
    });
  });
  db.close();
};

exports.print = function() {
  var db = new sqlite3.Database(dbPath);
  db.serialize(function() {
    db.each("SELECT * FROM errors", function(err, row) {
      console.log(row.id + ": " + row.path);
    });
  });
  db.close();
};