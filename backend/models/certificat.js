const mongoose = require('mongoose');

const certificatSchema = mongoose.Schema({
    id: { type: Number, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
});

module.exports = mongoose.model('Certificat', certificatSchema);