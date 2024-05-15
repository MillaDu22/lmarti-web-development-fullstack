const express = require('express');
const router = express.Router();
const cvController = require('../controllers/cv');

// Route pour créer un nouveau CV //
router.post('/', cvController.createCV);

// Route pour récupérer tous les CV //
router.get('/', cvController.getAllCVs);

// Route pour récupérer un CV par son ID //
router.get('/:id', cvController.getCVById);

// Route pour mettre à jour un CV //
router.put('/:id', cvController.updateCV);

// Route pour supprimer un CV //
router.delete('/:id', cvController.deleteCV);

module.exports = router;
