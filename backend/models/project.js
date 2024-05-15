const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: { type: String, required: true },
    informations: { type: String, required: true },
    tags: { type: String, required: true },
    description: { type: String, required: true },
    cover: { data: Buffer, contentType: String },
    photos: { data: Buffer, contentType: String },
    code: { type: String, required: true },
    site: { type: String, required: true },
    alt: { type: String, required: true },
    html: { type: Number, required: true },
    css: { type: Number, required: true },
    js: { type: Number, required: true },
    
});

module.exports = mongoose.model('Project', projectSchema);