import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import App from './App';

function Character_List(){
    const [characters, setCharacters] = useState([]);
    useEffect(() =>{
        fetch('/api/characters')
          .then((response) => response.json())
          .then((data) => setCharacters(data))
          .catch((error) => console.error(error));
      }, [] );

    return (
        <Router>
        <div>
            <h1> Characters </h1>
            <u1>
            {characters.map((character) => (
                <li key = {character.id}>
                <Link to = {`character/$(character.id}`}>{character.name}</Link>
                </li>
            ))}
            </u1>
        </div>
        </Router>
    )
}
        
export default App;
