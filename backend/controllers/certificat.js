const Certificat = require('../models/certificat');

// Controller pour créer un nouveau certificat //
exports.createCertificat = (req, res, next) => {
    const certificat = new Certificat({
        id: req.body.id,
        description: req.body.description,
        pdf: {data: req.file.buffer, contentType: req.file.mimetype }
    });

    certificat.save()
        .then(result => {
            res.status(201).json({
                message: 'Certificat créé avec succès !',
                certificat: result
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour récupérer tous les certificats //
exports.getAllCertificats = (req, res, next) => {
    Certificat.find()
        .then(certificats => {
            res.status(200).json(certificats);
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour récupérer un certificat par son ID //
exports.getCertificatById = (req, res, next) => {
    Certificat.findById(req.params.id)
        .then(certificat => {
            if (!certificat) {
                return res.status(404).json({
                    message: 'Certificat non trouvé'
                });
            }
            res.status(200).json(certificat);
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour mettre à jour un certificat //
exports.updateCertificat = (req, res, next) => {
    Certificat.findByIdAndUpdate(req.params.id, req.body)
        .then(certificat => {
            if (!certificat) {
                return res.status(404).json({
                    message: 'Certificat non trouvé'
                });
            }
            res.status(200).json({
                message: 'Certificat mis à jour avec succès'
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour supprimer un certificat //
exports.deleteCertificat = (req, res, next) => {
    Certificat.findByIdAndDelete(req.params.id)
        .then(certificat => {
            if (!certificat) {
                return res.status(404).json({
                    message: 'Certificat non trouvé'
                });
            }
            res.status(200).json({
                message: 'Certificat supprimé avec succès'
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};
