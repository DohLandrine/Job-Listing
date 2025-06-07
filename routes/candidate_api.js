const express = require('express');
const CandidateModel = require('../models/candidate_model');
const router = express.Router();

// create a candidate   
router.post('/create', (req, res, next) => {
    const candidate = req.body;
    CandidateModel.create(candidate)
        .then((candidate) => {
            res.json({ message: 'Candidate created successfully', candidate: candidate });
        })
        .catch(next);
});

// deleting a candidate
router.delete('/delete/:id', (req, res, next) => {
    const candidateId = req.params.id;
    CandidateModel.findByIdAndDelete(candidateId)
        .then((deletedCandidate) => {
            if (!deletedCandidate) {
                return res.status(404).json({ message: 'Candidate not found' });
            }
            res.json({ message: 'Candidate deleted successfully', candidate: deletedCandidate });
        })
        .catch(next);
});

module.exports = router;