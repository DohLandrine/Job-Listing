const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ApplicationSchema = new Schema({
    candidateId: {
        type: Schema.Types.ObjectId,
        ref: 'Candidate',
        required: true
    },
    jobListingId: {
        type: Schema.Types.ObjectId,
        ref: 'JobListing',
        required: true
    },
    resumeLink: {
        type: String,
        required: true
    },
});

const ApplicationModel = mongoose.model('Application', ApplicationSchema);
module.exports = ApplicationModel;