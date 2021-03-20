const connection = require('../config/config.json');

// Routes
// =============================================================
module.exports = (app) => {
  // Serach Movie by title
  app.get('/api/searchTitle', (req, res) => {
    const dbQuery = 'SELECT title FROM movies where title = ?';
    connection.query(dbQuery, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a review
  app.post('/api/new', (req, res) => {
    console.log('Review Data:');
    console.log(req.body);

    const dbQuery =
      'INSERT INTO review (score, comment) VALUES (?)';

    connection.query(
      dbQuery,
      [req.body.score, req.body.body, req.body.review],
      (err, result) => {
        if (err) throw err;
        if (result) {
          console.log('Review Successfully Saved!');
          res.json(req.body);
        }
      }
    );
  });
};

