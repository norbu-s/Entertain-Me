// Requiring our Todo model
const db = require("../models");
const axios = require("axios");

// Routes
// =============================================================
module.exports = (app) => {



    app.get("/api/search/:title", (req, res) => {
        db.Movies.findAll({
            where: { title: req.params.title },
        }).then((movies) => {
            if (movies.length === 0) {
                axios
                    .get(
                        "https://www.omdbapi.com/?t=" + req.params.title + "&apikey=trilogy"
                    )
                    .then((omdbdata) => {
                        // TODO: insert into movies database using sequelize here
                        console.log(omdbdata);
                        db.Movies.create({
                            title: omdbdata.data.Title,
                            genre: omdbdata.data.Genre,
                            plot: omdbdata.data.Plot,
                            director: omdbdata.data.Director,
                            actors: omdbdata.data.Actors,
                            year: omdbdata.data.Year,
                            image: omdbdata.data.Poster,
                        }).then((omdbdata) => res.json(omdbdata));
                    });
            } else {
                res.json(movies);
            }
        });
    });
 



  // GET route for getting all of the posts
  app.get('/api/reviews/', (req, res) => {  
    db.Review.findAll({}).then((dbReview) => res.json(dbReview)); 
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
  app.post('/api/reviews', (req, res) => {
    console.log(req.body);
    db.Review.create({
      //id: req.body.id,
      // movieId: req.body.movieId,
      title: req.body.title,
      review: req.body.review,
      rating: req.body.rating,
      source: req.body.source,
      author: req.body.author,
    }).then((dbReview) => res.json(dbReview));
  });

  // DELETE route for deleting reviews
  app.delete('/api/reviews/:id', (req, res) => {
    db.Review.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbReview) => res.json(dbReview));
  });

    // PUT route for updating posts
  app.put('/api/reviews', (req, res) => {
    db.Review.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbReview) => res.json(dbReview));
  });
};
