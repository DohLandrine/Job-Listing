const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const mongoose = require('mongoose');

const jobRoutes = require('./routes/job_listings_api');
const candidateRoutes = require('./routes/candidate_api');
const applicationRoutes = require('./routes/application_api');
const companyRoutes = require('./routes/company_api');

mongoose.connect('mongodb://localhost:27017/jobBoard');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());

app.use('/api/job_listings', jobRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/companies', companyRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
  next();
}
);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
}
);
