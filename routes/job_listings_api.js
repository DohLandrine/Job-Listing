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

// deleting a job
router.delete('/delete/:id',(req, res, next) => {
    const jobId = req.params.id;
    JobListingModel.findByIdAndDelete(jobId)
        .then((deletedJob) => {
            if (!deletedJob) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.status(200).json({ message: 'Job deleted successfully', job: deletedJob });
        })
        .catch(next);
});

module.exports = router;