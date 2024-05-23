const express = require('express');
const cors = require('cors');

const app = express();

// Utiliser le middleware CORS
app.use(cors());

// Définir vos routes ici
app.post('/api/users/login', (req, res) => {
  // Logique de votre route
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
 