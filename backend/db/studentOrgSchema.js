const mongoose = require('mongoose');

const studentOrgSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String
});

module.exports = studentOrgSchema;