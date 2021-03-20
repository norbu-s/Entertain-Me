// Requiring our models 
const Movies = require("../models/index.js");
const { Op } = require('sequelize');
// ROUTING

// Routes
module.exports = (app) => {
  // Get all books
  app.get('/api/all', (req, res) => {
    Movies.findAll({}).then((results) => res.json(results));
  });

  // Get a specific book
  app.get('/api/:title', (req, res) => {
    Movies.findAll({
      where: {
        title: req.params.book,
      },
    }).then((results) => res.json(results));
  });

  // Get all books of a specific genre
  app.get('/api/genre/:genre', (req, res) => {
    Movies.findAll({
      where: {
        genre: req.params.genre,
      },
    }).then((results) => res.json(results));
  });
}

  // Get all books from a specific author
  // app.get('/api/actor/:actor', (req, res) => {
  //   Movies.findAll({
  //     where: {
  //       author: req.params.author,
  //     },
  //   }).then((results) => res.json(results));
  // });

  // Get all "long" books (books 150 pages or more)
  // app.get('/api/books/long', (req, res) => {
  //   Movies.findAll({
  //     where: {
  //       pages: {
  //         [Op.gte]: 150,
  //       },
  //     },
  //     order: [['pages', 'DESC']],
  //   }).then((results) => res.json(results));
  // });

  // Get all "short" books (books 150 pages or less)
  // app.get('/api/books/short', (req, res) => {
  //   Movies.findAll({
  //     where: {
  //       pages: {
  //         [Op.lte]: 150,
  //       },
  //     },
  //     order: [['pages', 'ASC']],
  //   }).then((results) => res.json(results));
  // });

  // Add a movie to the review list
  // app.post('/api/new', (req, res) => {
  //   console.log('Book Data:');
  //   console.log(req.body);
  //   Movies.create({
  //     title: req.body.title,
  //     author: req.body.author,
  //     genre: req.body.genre,
  //     pages: req.body.pages,
  //   }).then((results) => res.json(results));
  // });

  // Delete a book
//   app.delete('/api/book/:id', (req, res) => {
//     console.log('Book ID:');
//     console.log(req.params.id);
//     Movies.destroy({
//       where: {
//         id: req.params.id,
//       },
//     }).then(() => res.end());
//   });
// };

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
// }}}}
