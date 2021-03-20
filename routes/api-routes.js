// Requiring our models 
const db = require("../models");
const path = require('path');
// ROUTING

module.exports = (app) => {
  app.get("/api/reviewList", (req, res) => {
    res.json([])
  });

  app.get("/api/searchmovies/:searchQuery", (req, res) => {
    res.json([])
  });

  app.post('/api/movies', (req, res) => {
    if (tableData.length < 0) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    movieData.length = 0;
    res.json({ ok: true });
  });
};
