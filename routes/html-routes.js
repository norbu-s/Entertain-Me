// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const http = require("http");
const axios = require("axios");

module.exports = async function (app) {
  app.get("/", (req, res) => {

    const axios = require("axios");
    async function getMovie() {
        return axios.get("https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy");
    }
    res = getMovie();
  });
}

// module.exports = function(app) {
//   app.get("/", (req, res) => {
//     console.log("I am here")
//     http
//     .get("https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy", res => {
//       let data ="";
//       res.on("data", chunk => {
//         data += chunk;
//     });
//   })
//   res.on("end",()=> {
//     let url = JSON.parse(data).title;
//     console.log("chunk: ", chunk)
//   });
// });
// }

// {
//   if (req.length > 0) {
//     res.redirect("/index");
//   }
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

//   app.get("/movie", (req, res) => {
//     if (req.movieTitle) {
//       res.redirect("/movieDetail");
//     }
//     res.sendFile(path.join(__dirname, "../public/movie.html"));
//   });

//   app.get("/watchList", (req, res) => {
//     if (req.watchList) {
//       res.redirect("/watchList");
//     }
//     res.sendFile(path.join(__dirname, "../public/watch.html"));
//   });

//   app.get("/reviewList", (req, res) => {
//     if (req.reviewList) {
//       res.redirect("/reviewList");
//     }
//     res.sendFile(path.join(__dirname, "../public/reviewList.html"));
//   });
// }
