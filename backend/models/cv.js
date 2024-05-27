const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
});

module.exports = mongoose.model('Cv', cvSchema);
