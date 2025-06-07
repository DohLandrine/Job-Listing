const express = require('express');
const candidateModel = require('../models/candidate_model');
const applicationModel = require('../models/applications');
const jobListingModel = require('../models/job_listings');
const router = express.Router();

// create a new application
router.post('/create', async (req, res) => {

        // I am checking if the candidate exist here
        const candidate = await candidateModel.findById(candidateId);
        if (!candidate) {
            return res.status(404).json({ error: 'Candidate not found' });
        }

        // checking if the job listing exist here
        const jobListing = await jobListingModel.findById(jobListingId);
        if (!jobListing) {
            return res.status(404).json({ error: 'Job listing not found' });
        }

        // Creating application
        applicationModel.create(req.body)
        .then(application => {
            res.status(201).json({ message: 'Application created successfully', application });
        }).catch(next);
}
);
