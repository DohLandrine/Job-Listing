const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const mongoose = require('mongoose');

const jobRoutes = require('./routes/job_listings_api');
const candidateRoutes = require('./routes/candidate_api');

mongoose.connect('mongodb://localhost:27017/jobBoard');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());

app.use('/api/job_listings', jobRoutes);
app.use('/api/candidates', candidateRoutes);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
}
);
