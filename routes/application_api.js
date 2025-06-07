const express = require('express');
const candidateModel = require('../models/candidate_model');
const applicationModel = require('../models/applications');
const jobListingModel = require('../models/job_listings');
const router = express.Router();

// create a new application
router.post('/create', async (req, res, next) => {

    // Creating application
    applicationModel.create(req.body)
    .then(application => {
        res.status(201).json({ message: 'Application created successfully', application });
    }).catch(next);
});

// deleting an application
router.delete('/delete/:id', async (req, res, next) => {
    const applicationId = req.params.id;
    try {
        const deletedApplication = await applicationModel.findByIdAndDelete(applicationId);
        if (!deletedApplication) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json({ message: 'Application deleted successfully', application: deletedApplication });
    } catch (error) {
        next(error);
    }
});

// get application by id
router.get('/:id', async (req, res, next) => {
    const applicationId = req.params.id;
    await applicationModel.findById(applicationId).then((application) => {
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json({ application });
    }
    ).catch(next);
});

module.exports = router;
