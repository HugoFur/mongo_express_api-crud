
// initial model
const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema(
    {    
        name: String,
        party: String,
        salary: Number,
        approved: Boolean,

    }
)
const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;