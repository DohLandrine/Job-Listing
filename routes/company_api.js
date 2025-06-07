const express = require('express');
const companyModel = require('../models/company_model');
const router = express.Router();

// Create a new company
router.post('/create', async (req, res, next) => {
    companyModel.create(req.body)
        .then((company) => {
            res.status(201).json({ message: 'Company created successfully', company });
        })
        .catch(next);
});

// Get all companies
router.get('/', async (req, res, next) => {
    companyModel.find()
        .then((companies) => {
            res.status(200).json({ companies });
        })
        .catch(next);
});

module.exports = router;