import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route}  from 'react-router-dom';

import Character from './Character';
import Film from './Film'
import Planet from './Planet'

import './App.css';

function App() {

  // Characters
  const [characters, setCharacters] = useState([]);
  useEffect(() =>{
    fetch('/api/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error(error));
  }, [] );

  // Films
  const [films, setFilms] = useState([]);
  useEffect(() =>{
    fetch('/api/films')
      .then((response) => response.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, [] );

  // Planets
  const [planets, setplanets] = useState([]);
  useEffect(() =>{
    fetch('/api/planets')
      .then((response) => response.json())
      .then((data) => setplanets(data))
      .catch((error) => console.error(error));
    }, [] );

  return (
    <Router>
      <div>

        <h1> Characters </h1>
        <u1>
          {characters.map((character) => (
            <li key = {character.id}>
              <Link to = {'character/$(character.id}'}>{character.name}</Link>
            </li>
          ))}
        </u1>

        <h1> Films </h1>
        <u1>
          {films.map((film) => (
            <li key = {film.id}>
              <Link to = {'film/$(film.id}'}>{film.name}</Link>
            </li>
          ))}
        </u1>

        <h1> Planets </h1>
        <u1>
          {planets.map((planet) => (
            <li key = {planet.id}>
              <Link to = {'planet/$(planet.id}'}>{planet.name}</Link>
            </li>
          ))}
        </u1>

        <Route path = "/character/:id" component ={Character} />
        <Route path = "/film/:id" component ={Film} />
        <Route path = "/planet/:id" component ={Planet} />

      </div>
    </Router>
  );
}

export default App;
