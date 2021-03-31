// Requiring our Todo model
const db = require('../models');

// Routes
// =============================================================
module.exports = (app) => {
  // GET route for getting all of the posts
  app.get('/api/reviews/', (req, res) => {  // same format must be lower case, plural in api/ path 
    db.Review.findAll({}).then((dbReview) => res.json(dbReview)); //Review is same format as variable Post in review.js in original excercise which was Post (capital P and singular)
  });

  // Get route for returning reviews of a specific source
  app.get('/api/reviews/source/:source', (req, res) => {
    db.Review.findAll({ // GET * FROM reviews WHERE source = req.params.source
      where: {
        source: req.params.source,
      },
    }).then((dbReview) => {
      res.json(dbReview);
    });
  });

  // Get route for retrieving a single review
  app.get('/api/reviews/:id', (req, res) => {
    db.Review.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbReview) => res.json(dbReview));
  });

  // POST route for saving a new review
  app.post('/api/posts', (req, res) => {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      review: req.body.review,
      rating: req.body.rating,
      source: req.body.source,
      author: req.body.author,
    }).then((dbPost) => res.json(dbPost));
  });

  // DELETE route for deleting reviews
  app.delete('/api/posts/:id', (req, res) => {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });

    // PUT route for updating posts
  app.put('/api/posts', (req, res) => {
    db.Post.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });
};
