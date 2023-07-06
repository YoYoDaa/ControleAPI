//importation du module http
const http = require('http');

// Importation d'express depuis Node.js
const express = require('express');

//recupération du JSON
const apiController = require('./src/controllers/apiController');

// Création de l'application Express
const app = express();

// Route de base
// app.get('/', (req, res) => {
//   res.send('Hello ESGI world !');
// });

//ajout du contrôl d'erreur
app.use((err, req, res, next) => {
    // Logique de gestion des erreurs
    console.error(err);
    res.status(500).send('Erreur serveur');
    next();
});

app.get('/users', apiController.getUsers);

// Test démarage serveur

// app.listen(3000, () => {
//   console.log('Le serveur est en écoute sur le port 3000');
// });

//création serveur HTTP
const server = http.createServer(app);
server.listen(3000);