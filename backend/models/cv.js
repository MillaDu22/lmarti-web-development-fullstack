const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
    title: { type: String, required: true },
    pdf: { data: Buffer, contentType: String, required: true}
});

module.exports = mongoose.model('CV', cvSchema);
