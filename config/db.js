const mongoose = require('mongoose');
const keys = require('../config/keys');

const dbURI = keys.mongoURI;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose
  .connect(
    dbURI,
    options
  )
  .then(
    () => {
      console.log('Database connection established!');
    },
    err => {
      console.log('Error connecting Database instance due to: ', err);
    }
  );

// require any models

require('../models/Task');
