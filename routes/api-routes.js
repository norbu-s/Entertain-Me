// Requiring our models 
const db = require("../models");

module.exports = function(app) {

  // Route for movies for list user out
  app.get("/api/review-list", (req, res) => {
    res.json([])
  });
};
