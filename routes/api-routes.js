// Requiring our dats model
const db = require('../models');
const axios = require('axios');

// Routes
// =============================================================
module.exports = (app) => {

    // GET route for getting movie titles
    app.get('/api/search/:title', (req, res) => {
        db.Movies.findAll({}).then((movies) => {
            if (movies.length === 0) {

                axios.get("https://www.omdbapi.com/?t=" + req.params.title + "&apikey=trilogy").then(omdbdata => {
                    // TODO: insert into movies database using sequelize here
                    db.Movies.create({
                        title: movie.title,
                        genre: movie.genre,
                        plot: movie.plot,
                        director: movie.director,
                        actors: movie.actors,
                        year: movie.year,
                        image: movie.image,
                    }).then((omdbdata) => res.json(omdbdata.data));
                    console.log(omdbdata.data);
                });
            } else {
                res.json(movies);
            }
        })
    });


    // GET route for getting all of the reviews
    app.get('/api/reviews/', (req, res) => {
        db.Reviews.findAll({}).then((dbReviews) => res.json(dbReviews));
    });

    // Get route for returning reviews of a specific source
    app.get('/api/reviews/source/:source', (req, res) => {
        db.Reviews.findAll({ // GET * FROM reviews WHERE source = req.params.source
            where: {
                source: req.params.source,
            },
        }).then((dbReviews) => {
            res.json(dbReviews);
        });

        // PUT route for updating reviews
        app.put("/api/reviews", (req, res) => {
            db.Reviews.update(req.body, {
                where: {
                    id: req.body.id,
                },
            }).then((dbReviews) => res.json(dbReviews));
        });

        app.get("/api/movies/:id", (req, res) => {
            db.Movies.findOne({
                where: {
                    id: req.params.id,
                },
            }).then((dbMovies) => res.json(dbMovies));
        });
    });
}