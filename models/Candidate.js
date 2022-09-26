
// initial model
const mongoose = require('mongoose');
const Candidate = mongoose.model('Candidate', {
    "name": String,
    "party": String,
    "salary": Number,
    "approved": Boolean,
});

module.exports = Candidate;