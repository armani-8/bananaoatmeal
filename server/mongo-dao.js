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
          callback("Failed to find film", undefined);
        }
    });
  };


  // module.exports.findPlanet = function(id, callback) {
  //   var col = dbPool.collection("planets");
  //   col.findOne({id: id})
  //     .toArray((err, planets) => {
  //       if (err === null && planets.length > 0) {
  //         callback(null, planets);
  //       } else {
  //         callback("Failed to find planet", undefined);
  //       }
  //   });
  // };

  // module.exports.findPlanet = function(id, callback) {
  //   var col = dbPool.collection("planets");
  //   col.findOne({id: id}, function(err, result) {
  //     if (err) throw err;
  //    callback(result);
  //   })
  // };

  module.exports.findPlanet = function(id, callback) {
    const collection = dbPool.collection('planets');
    collection.findOne({id : id}, function (err, result) {
         console.log(id, result);
         if (err) {
                console.error('Error', err);
                callback(err, null);
         }else {
                callback(null,result);
         }
    });
  };


  module.exports.findFilmCharacters = function(id, callback) {
    var col = dbPool.collection("films_characters");
    col.find({id: id})
      .toArray((err, films_characters) => {
        if (err === null && films_characters.length > 0) {
          callback(null, films_characters);
        } else {
          callback("Failed to find film character", undefined);
        }
    });
  };

  module.exports.findFilmPlanets = function(id, callback) {
    var col = dbPool.collection("films_planets");
    col.find({id: id})
      .toArray((err, films_planets) => {
        if (err === null && films_planets.length > 0) {
          callback(null, films_planets);
        } else {
          callback("Failed to find film planets", undefined);
        }
    });
  };

  module.exports.findCharacterFilms = function(id, callback) {
    var col = dbPool.collection("films_planets");
    col.find({id: id})
      .toArray((err, films_planets) => {
        if (err === null && films_planets.length > 0) {
          callback(null, films_planets);
        } else {
          callback("Failed to find film planets", undefined);
        }
    });
  };

