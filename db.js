var fs = require("fs");
var file = __dirname + "/public/db/" + "users.db";
var exists = fs.existsSync(file);
/*
if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}
*/
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function() {
  /*
  if(!exists) {
    db.run("CREATE TABLE Stuff (thing TEXT)");
  }
  */
  db.prepare("INSERT INTO users VALUES ('kjd','jfekf')");
  
  //Insert random data
  
  db.each("SELECT * FROM USER", function(err, row) {
    console.log(row.ID + ": " + row.USER);
  });
});

db.close();

/*
exports.add = function(page) {
  db.run('INSERT INTO errors VALUES (' + page + ')')
}

exports.hi = function() {
  console.log("DHEK");
}
*/
