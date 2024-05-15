const Project = require('../models/project');

// Controller pour créer un nouveau projet //
exports.createProject = (req, res, next) => {
    const project = new Project({
        name: req.body.name,
        informations: req.body.informations,
        tags: req.body.tags,
        description: req.body.description,
        cover: {data: req.file.buffer, contentType: req.file.mimetype },
        photos: req.files.map(file => ({data: file.buffer, contentType: file.mimetype })),
        code: req.body.code,
        site: req.body.site,
        alt: req.body.alt,
        html: req.body.html,
        css: req.body.css,
        js: req.body.js
    });

    project.save()
        .then(result => {
            res.status(201).json({
                message: 'Projet créé avec succès !',
                project: result
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour récupérer tous les projets //
exports.getAllProjects = (req, res, next) => {
    Project.find()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour récupérer un projet par son ID //
exports.getProjectById = (req, res, next) => {
    Project.findById(req.params.id)
        .then(project => {
            if (!project) {
                return res.status(404).json({
                    message: 'Projet non trouvé'
                });
            }
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour mettre à jour un projet //
exports.updateProject = (req, res, next) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then(project => {
            if (!project) {
                return res.status(404).json({
                    message: 'Projet non trouvé'
                });
            }
            res.status(200).json({
                message: 'Projet mis à jour avec succès'
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};

// Controller pour supprimer un projet //
exports.deleteProject = (req, res, next) => {
    Project.findByIdAndDelete(req.params.id)
        .then(project => {
            if (!project) {
                return res.status(404).json({
                    message: 'Projet non trouvé'
                });
            }
            res.status(200).json({
                message: 'Projet supprimé avec succès'
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
};
