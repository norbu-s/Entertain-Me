'use strict';
// const orm = require('../config/orm.js');

// const movies = {
//   all(cb) {
//     orm.all('movies', (res) => cb(res));
//   },
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

// module.exports = movies;



// Sequelize (capital) references the standard library
const Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
const sequelize = require('../config/connection.js');

// Creates a "Book" model that matches up with DB
const Movies = sequelize.define('movies', {
  rank_no: Sequelize.INTEGER,
  title: Sequelize.STRING,
  genre: Sequelize.STRING,
  actor: Sequelize.STRING,
  year: Sequelize.INTEGER,
  runtime: Sequelize.INTEGER,
  rating: Sequelize.INTEGER,
  votes: Sequelize.INTEGER,
  revenue: Sequelize.INTEGER,
  metascore: Sequelize.INTEGER,
});

// Syncs with DB
Movies.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Movies;
