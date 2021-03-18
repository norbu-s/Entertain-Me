'use strict';
const orm = require('../config/orm.js');

const movies = {
  all(cb) {
    orm.all('movies', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create('movies', cols, vals, (res) => cb(res));
  },
  update(objColVals, condition, cb) {
    orm.update('movies', objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete('movies', condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = movies;
