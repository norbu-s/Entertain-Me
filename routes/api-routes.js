// Requiring our Todo model
const db = require("../models");

// Routes
// =============================================================
module.exports = (app) => {
    // GET route for getting all of the posts
    app.get("/api/reviews/", (req, res) => {
        db.Post.findAll({}).then((dbPost) => res.json(dbPost));
    });

    app.get("/reviews/:id", (req, res) =>
        db.reviews.findByPk(req.params.id).then((result) => res.json(result))
    );

    // Get route for returning posts of a specific source
    app.get("/api/reviews/source/:source", (req, res) => {
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
    app.get("/api/reviews/:id", (req, res) => {
        db.Post.findOne({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
    });

    // POST route for saving a new review
    app.post("/api/reviews", (req, res) => {
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
    app.delete("/api/reviews/:id", (req, res) => {
        db.Post.destroy({
            where: {
                id: req.params.id,
            },
        }).then((dbPost) => res.json(dbPost));
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