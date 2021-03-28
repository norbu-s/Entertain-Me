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


        // GET route for getting all of the posts
        app.get('/api/posts/', (req, res) => {
            db.Post.findAll({}).then((dbPost) => res.json(dbPost));
        });

        // Get route for returning posts of a specific source
        app.get('/api/posts/source/:source', (req, res) => {
                    db.Post.findAll({ // GET * FROM posts WHERE source = req.params.source
                        where: {
                            source: req.params.source,
                        },
                    }).then((dbPost) => {
                        res.json(dbPost);
                    });

                    // PUT route for updating posts
                    app.put("/api/reviews", (req, res) => {
                        db.Post.update(req.body, {
                            where: {
                                id: req.body.id,
                            },
                        }).then((dbPost) => res.json(dbPost));
                    });

                    app.get("/api/movies/:id", (req, res) => {
                        db.Movies.findOne({
                            where: {
                                id: req.params.id,
                            },
                        }).then((dbMovies) => res.json(dbMovies));
                    });
                };