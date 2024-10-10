const express = require('express');
const cors = require('cors');
const {pool} = require('pg');

//Nouvelle instance d'express
const app = express();
const port = 5000;

//Utiliser CORS pour permettre les requêtes depuis React
app.use(cors());
app.use(express.json());

//Configurer la connexion à PostgreSQL

const pool = new Pool({
    user:'bramac',
    host:'localhost',
    databse:'virtuallib',
    password:'',
    port:5432,
});

//Pour récupérer tous les livres
app.get('/books', async(req, res)=> {
    try{
        const result = await pool.query('SELECT * FROM books');
        res.json(result.rows);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
});

//Pour récupérer un livre avec son ID
app.get('/books/:id', async(req, res)=> {
    try{
        const result = await pool.query('SELECT * FROM books WHERE id=$1', [id]);
        res.json(result.rows);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
});

//Démarrer le serveur
app.listen(port, ()=> {
    console.log('Serveur lancé');
})

