const express = require('express');
const { MongoClient } = require ('mongodb');

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'swapi';

MongoClient.connect(url, (err, client) => {
    if (err){
        console.error('Failed to connect to Mongo Database', err);
        return;
    }

    console.log('Connected to Mongo database');
    const db = client.db(dbName);

    process.on('SIGINT', () => {
        client.close();
        console.log('MongoDB connection closed');
        process.exit(0);
    });
});

app.listen(port, () => {
    console.log('Server listening on port $(port)');
});

//////////////////////////////////////////////////////////////////////////////

app.get('/api/characters', (req, res) => {
    const charactersCollection = db.collection('characters');
    charactersCollection.find({}).toArray((err, characters) => {
        if (err) {
            console.error('Error Fetching Characters', err);
            return;
        }
        res.json(characters);
    });
});

app.get('/api/planets', (req, res) => {
    const planetsCollection = db.collection('planets');
    planetsCollection.find({}).toArray((err, planets) => {
        if (err) {
            console.error('Error Fetching Planets', err);
            return;
        }
        res.json(planets);
    });
});

app.get('/api/films', (req, res) => {
    const filmsCollection = db.collection('films');
    filmsCollection.find({}).toArray((err, films) => {
        if (err) {
            console.error('Error Fetching Films', err);
            return;
        }
        res.json(films);
    });
});

app.get('/api/planets', (req, res) => {
    const planetsCollection = db.collection('planets');
    planetsCollection.find({}).toArray((err, characters) => {
        if (err) {
            console.error('Error Fetching Planets', err);
            return;
        }
        res.json(characters);
    });
});
