'use strict';
const orm = require('../config/orm.js');

const cat = {
  all(cb) {
    orm.all('movies', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create('movies', cols, vals, (res) => cb(res));
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = movies;
