

// NEW ROUTES FOR STATIC DB

// Dependencies
const Movie = require('../models/index');

const { Op } = require('sequelize');

// Routes
module.exports = (app) => {
  // Get all moviess
  app.get('/api/all', (req, res) => {
    Movie.findAll({}).then((results) => res.json(results));
  });

  // Get a specific movie
  app.get('/api/:movie', (req, res) => {
    Movie.findAll({
      where: {
        title: req.params.movie,
      },
    }).then((results) => res.json(results));
  });



  // Delete a Movie
  app.delete('/api/movie/:id', (req, res) => {
    console.log('Movie ID:');
    console.log(req.params.id);
    Movie.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => res.end());
  });
};



// // Requiring our models 
// const db = require("../models");
// const path = require('path');
// // ROUTING

// module.exports = (app) => {
//   app.get("/api/reviewList", (req, res) => {
//     res.json([])
//   });

//   app.get("/api/searchmovies/:searchQuery", (req, res) => {
//     res.json([])
//   });

//   app.post('/api/movies', (req, res) => {
//     if (tableData.length < 0) {
//       tableData.push(req.body);
//       res.json(true);
//     } else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     movieData.length = 0;
//     res.json({ ok: true });
//   });
// };
