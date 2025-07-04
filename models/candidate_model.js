const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  resumeLink: {
    type: String,
    required: true
  },
});

const CandidateModel = mongoose.model('Candidate', CandidateSchema);
module.exports = CandidateModel;