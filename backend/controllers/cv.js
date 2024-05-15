const CV = require('../models/cv');

// Controller pour créer un nouveau CV //
exports.createCV = (req, res, next) => {
    const cv = new CV({
        title: req.body.title,
        pdf: {data: req.file.buffer, contentType: req.file.mimetype }
    });
    cv.save()
        .then(createdCV => {
            res.status(201).json({
                message: 'CV créé avec succès !',
                cv: createdCV
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour récupérer tous les CV //
exports.getAllCVs = (req, res, next) => {
    CV.find()
        .then(cvs => {
            res.status(200).json(cvs);
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour récupérer un CV par son ID //
exports.getCVById = (req, res, next) => {
    CV.findById(req.params.id)
        .then(cv => {
            if (!cv) {
                return res.status(404).json({
                    message: 'CV non trouvé'
                });
            }
            res.status(200).json(cv);
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour mettre à jour un CV //
exports.updateCV = (req, res, next) => {
    // À implementer, A voir... /
};

// Controller pour supprimer un CV //
exports.deleteCV = (req, res, next) => {
    CV.findByIdAndDelete(req.params.id)
        .then(cv => {
            if (!cv) {
                return res.status(404).json({
                    message: 'CV non trouvé'
                });
            }
            res.status(200).json({
                message: 'CV supprimé avec succès'
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};
