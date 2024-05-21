const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const projectRoutes = require('./routes/project');
const certificatRoutes = require('./routes/certificat');
const cvRoutes = require('./routes/cv');
const userRoutes = require('./routes/user');

const app = express();

// Middleware CORS pour autoriser toutes les requêtes //
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB //
mongoose.connect('mongodb+srv://admin-dev-ldla:DevAdminDataBase2024@devsiteldlacluster.xtpuzzh.mongodb.net/?', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

// Middleware pour parser les requêtes JSON //
app.use(express.json());

// Middleware pour autoriser les requêtes vers le dossier 'images' ++
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes //
app.use('/api/project', projectRoutes);
app.use('/api/certificat', certificatRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
