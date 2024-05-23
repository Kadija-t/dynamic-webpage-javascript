const express = require('express');
const app = express();
const port = 5678;

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

const validCredentials = {
    email: 'sophie.bluel@test.tld',
    password: 'SOphie'
};

// Définir la route POST pour /api/users/login
app.post('/api/users/login', (req, res) => {
    const { email, password } = req.body;

    // Logique de validation des informations d'identification
    if (email === validCredentials.email && password === validCredentials.password) {
        res.status(200).json({ message: "Connexion réussie" });
    } else {
        res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
