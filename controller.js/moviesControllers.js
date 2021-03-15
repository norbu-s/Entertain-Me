const express = require('express');

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const movies = require('../models/');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
 movies.all((data) => {
    const hbsObject = {
      cats: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/?', (req, res) => {
  review.create(['name', 'sleepy'], [req.body.name, req.body.], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put('/api/?/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  review.update(
    {
      sleepy: req.body.sleepy,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete('/api/?/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  review.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
