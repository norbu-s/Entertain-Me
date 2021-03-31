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
    app.get("/api/posts/", (req, res) => {
        db.Post.findAll({}).then((dbPost) => res.json(dbPost));
    });

    // Get route for returning posts of a specific source
    app.get("/api/posts/source/:source", (req, res) => {
        db.Post.findAll({
            // GET * FROM posts WHERE source = req.params.source
            where: {
                source: req.params.source,
            },
        }).then((dbPost) => {
            res.json(dbPost);
        });
    });

    // Get route for retrieving a single review
    app.get("/api/posts/:id", (req, res) => {
        db.Post.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });

    // POST route for saving a new review
    app.post("/api/posts", (req, res) => {
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
    app.delete("/api/posts/:id", (req, res) => {
        db.Post.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });

    // PUT route for updating posts
    app.put("/api/posts", (req, res) => {
        db.Post.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });
};