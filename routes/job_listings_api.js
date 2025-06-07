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

// update a job
router.put('/modify/:id', (req, res, next) => {
    const jobId = req.params.id;
    JobListingModel.findByIdAndUpdate({_id:jobId},req.body).then(
        () => {
            JobListingModel.findById(
            {_id : jobId}
        ).then(
            (updatedJob) => {
                res.send(updatedJob);
            }
        ).catch(next);
        }
    ).catch(next);
});

// get all jobs
router.get('/all', (req, res, next) => {
    JobListingModel.find()
        .then((jobs) => {
            res.status(200).json({ jobs });
        })
        .catch(next);
});

// get a job by id
router.get('/:id', (req, res, next) => {
    const jobId = req.params.id;
    JobListingModel.findById(jobId)
        .then((job) => {
            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.status(200).json({ job });
        })
        .catch(next);
});

module.exports = router;