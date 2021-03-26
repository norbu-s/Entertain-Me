const axios = require('axios');
const express = require('express');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Syncing our sequelize models and then starting our Express app




db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
});

// db.sequelize.sync().then(
//   () => {
//     const Movies = () => {
//       try {
//         return axios.get("https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy")
//       } catch (error) {
//         console.error(error)
    
    
    // axios.get("https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy").then(
//       (Movies) => { 
//         console.log(Movies.data);
//         Movies.forEach((movie) => {
//           db.Movies.create({
//             title: movie.title,
//             genre: movie.genre,
//             plot: movie.plot,
//             director: movie.director,
//             actors: movie.actors,
//             year: movie.year,
//             image: movie.image,
//           })
//         })
//         app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
//       }            
//     )
//   }
// );