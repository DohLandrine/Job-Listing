const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JobListingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  requirements: {
    type: String,
    required: true
  }
});

const JobListingModel = mongoose.model('JobListing', JobListingSchema);
module.exports = JobListingModel;