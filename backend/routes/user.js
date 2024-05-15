const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

// Route pour l'inscription //
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Vérifie si l'utilisateur existe déjà //
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ message: 'Cet e-mail est déjà utilisé.' });
        }
        // Créé un nouvel utilisateur //
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
    }
    });

    // Route pour la connexion //
    router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Vérifie si l'utilisateur existe //
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(401).json({ message: 'L\'e-mail ou le mot de passe est incorrect.' });
        }
        // Vérifie si le mot de passe est correct //
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
        return res.status(401).json({ message: 'L\'e-mail ou le mot de passe est incorrect.' });
        }
        // Authentification réussie //
        res.status(200).json({ message: 'Authentification réussie.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la connexion.' });
    }
});

module.exports = router;
