
// NEW STATIC DB 

// Dependencies
// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
const sequelize = require('../config/connection.js');

// Creates a "Movie" model that matches up with DB
const Movie = sequelize.define('movie', {
  title: Sequelize.STRING,
  actor: Sequelize.STRING,
  genre: Sequelize.STRING,
  year: Sequelize.INTEGER,
});

// Syncs with DB
Movie.sync();

// Makes the Movie Model available for other files (will also create a table)
module.exports = Movie;




// 'use strict';
// const orm = require('../config/orm.js');

// const movies = {
//   all(cb) {
//     orm.all('movies', (res) => cb(res));
//   },
//   // The variables cols and vals are arrays.
//   create(cols, vals, cb) {
//     orm.create('movies', cols, vals, (res) => cb(res));
//   },
//   update(objColVals, condition, cb) {
//     orm.update('movies', objColVals, condition, (res) => cb(res));
//   },
//   delete(condition, cb) {
//     orm.delete('movies', condition, (res) => cb(res));
//   },
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = movies;