const mongoose = require('mongoose');

const certificatSchema = mongoose.Schema({
    id: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
});

module.exports = mongoose.model('Certificat', certificatSchema);