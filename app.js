//importation du module http
const http = require('http');

// Importation d'express depuis Node.js
const express = require('express');

// Création de l'application Express
const app = express();

// Route de base
app.get('/', (req, res) => {
  res.send('Hello ESGI world !');
});

// Test démarage serveur

// app.listen(3000, () => {
//   console.log('Le serveur est en écoute sur le port 3000');
// });

//création serveur HTTP
const server = http.createServer(app);
server.listen(3000);