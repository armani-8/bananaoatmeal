const mongodb = require("mongodb"); // mongo client library                    
const url = "mongodb://localhost:27017/swapi";
let dbPool; // database connection

mongodb.MongoClient.connect(url, function(err, db) {
    if (!err) {
        dbPool = db.db("swapi");
    } else {
        console.log("DB CONNECTION FAILED. Is database running?");
    }
});

module.exports.findAllCharacters = function(callback) {
    var col = dbPool.collection("characters");
    col.find()
      .toArray((err, characters) => {
        if (!err) {
          callback(null, characters);
        } else {
          callback("Failed to find characters", undefined);
        }
    });
  };


module.exports.findAllFilms = function(callback) {
    var col = dbPool.collection("films");
    col.find()
      .toArray((err, films) => {
        if (!err) {
          callback(null, films);
        } else {
          callback("Failed to find films", undefined);
        }
    });
  };

  module.exports.findCharacter = function(id, callback) {
    var col = dbPool.collection("characters");
    col.find({id: id})
      .toArray((err, characters) => {
        if (err === null && characters.length > 0) {
          callback(null, characters);
        } else {
          callback("Failed to find character", undefined);
        }
    });
  };

  module.exports.findFilm = function(id, callback) {
    var col = dbPool.collection("films");
    col.find({id: id})
      .toArray((err, films) => {
        if (err === null && films.length > 0) {
          callback(null, films);
        } else {
          callback("Failed to find films", undefined);
        }
    });
  };