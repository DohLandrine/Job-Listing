const express = require('express');
const JobListingModel = require('../models/job_listings');
const router = express.Router();

// create a job
router.post('/create', (req, res, next) => {
    const job = req.body;
    JobListingModel.create(job)
        .then((createdJob) => {
            res.status(201).json({ message: 'Job created successfully', job: createdJob });
        })
        .catch(next);
    console.log('Job created:', job);
    res.status(201).json({ message: 'Job created successfully', job });
});

module.exports = router;