var express = require('express');
var dao = require("./mongo-dao");
var app = express();

app.use(express.json()); //Parse JSON body

// server start-up


app.get("/api/characters", (req, res) => {
    dao.findAllCharacters((err, characters) => {
      if (characters !== undefined) {
        //We have characters
        console.log("index.js all characters: " + characters );
        res.send(characters);
      } else {
        res.statusCode = 500;
        res.end();
      }
    });
  });

// app.get("/api/films", (req, res) => {
//     dao.findAllFilms(function(data){
//         res.send(data)
//     })
//   });

app.get("/api/films", (req, res) => {
  dao.findAllFilms((err, films) => {
    if (films !== undefined) {
      //We have characters
      console.log("index.js all films: " + films );
      res.send(films);
    } else {
      res.statusCode = 500;
      res.end();
    }
  });
});

  // app.get("/api/characters/:id", (req, res) => {
  //   dao.findCharacter(function(data){
  //       res.send(data)
  //   })
  // });

  app.get("/api/characters/:id", (req, res) => {
    dao.findCharacter(req.params.id, (err, character) => {
      if (character !== undefined) {
        //We have character
        console.log("index.js all characters: " + req.params.id );
        res.send(character);
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  });

  // app.get("/api/films/:id", (req, res) => {
  //   dao.findFilm(function(data){
  //       res.send(data)
  //   })
  // });

  app.get("/api/films/:id", (req, res) => {
    dao.findFilm(req.params.id, (err, film) => {
      if (film !== undefined) {
        //We have character
        console.log("index.js single film: " + req.params.id );
        res.send(film);
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  });

  // app.get("/api/planets/:id", (req, res) => {
  //   dao.findPlanet(function(data){
  //       res.send(data)
  //   })
  // });

  app.get("/api/planets/:id", (req, res) => {
    const planet_id = parseInt(req.params.id);
    dao.findPlanet(planet_id, (err, planet) => {
      if (planet !== undefined) {
        //We have planet
        console.log("index.js planet: " + planet_id );
        res.send(planet);
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  });

  // app.get("/api/films/:id/characters", (req, res) => {
  //   dao.findFilmCharacters(function(data){
  //       res.send(data)
  //   })
  // });

  app.get("/api/films/:id/characters", (req, res) => {
    dao.findFilmCharacters(req.params.id, (err, character) => {
      if (character !== undefined) {
        //We have character
        console.log("index.js all characters: " + req.params.id );
        res.send(character);
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  });


  // app.get("/api/films/:id/planets", (req, res) => {
  //   dao.findFilmPlanets(function(data){
  //       res.send(data)
  //   })
  // });

  app.get("/api/films/:id/planets", (req, res) => {
    dao.findFilmPlanets(req.params.id, (err, planet) => {
      if (planet !== undefined) {
        //We have character
        console.log("index.js film planet: " + req.params.id );
        res.send(planet);
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  });

  // app.get("/api/characters/:id/films", (req, res) => {
  //   dao.findCharacterFilms(function(data){
  //       res.send(data)
  //   })
  // });

  app.get("/api/characters/:id/films", (req, res) => {
    dao.findCharacterFilms(req.params.id, (err, character) => {
      if (character !== undefined) {
        //We have character in film
        console.log("index.js character film: " + req.params.id );
        res.send(character);
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  });

  // app.get("/api/planets/:id/films", (req, res) => {
  //   dao.findPlanetFilms(function(data){
  //       res.send(data)
  //   })
  // });

  app.get("/api/planets/:id/films", (req, res) => {
    dao.findPlanetFilms(req.params.id, (err, planet) => {
      if (planet !== undefined) {
        //We have character in film
        console.log("index.js planet film: " + req.params.id );
        res.send(planet);
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  });

  // app.get("/api/planets/:id/characters", (req, res) => {
  //   dao.findPlanet(function(data){
  //       res.send(data)
  //   })
  // });

  app.get("/api/planets/:id/characters", (req, res) => {
    dao.findPlanetCharacters(req.params.id, (err, planet) => {
      if (planet !== undefined) {
        //We have planet in film
        console.log("index.js planet characters: " + req.params.id );
        res.send(planet);
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  });


const port = 4000
console.log("Open a browser to http://localhost:"+port+" to view the application");
app.listen(port);
