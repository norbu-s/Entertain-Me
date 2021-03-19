// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const https = require("https");

module.exports = function(app) {
  app.get("/", (req, res) => {
    https
    .get("https://www.omdbapi.com/?t=&plot=short&apikey=trilogy", res => {
      let data ="";  
      console.log("res",res)  
      res.on("data", chunk => {
        data += chunk;
        console.log("chunk: ", chunk)
    });
  })
  res.on("end",()=> {
    let url = JSON.parse(data);
  });
});
}

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
